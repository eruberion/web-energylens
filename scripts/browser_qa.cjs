// Local-only browser regression suite. Install/use Playwright externally;
// no dependency or browser download is performed by this script.
const { chromium, webkit } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs = require('node:fs/promises');
const path = require('node:path');
const assert = require('node:assert/strict');
const base = process.env.QA_URL || 'http://127.0.0.1:5194';
const output = path.resolve(process.env.QA_OUTPUT || 'qa-evidence/browser-local');
const results = [];

async function testPage(browser, engine, width, height, mode = 'normal') {
  const context = await browser.newContext({ viewport: { width, height },
    hasTouch: mode === 'touch', isMobile: mode === 'touch',
    javaScriptEnabled: mode !== 'no-js', reducedMotion: mode === 'reduced' ? 'reduce' : 'no-preference' });
  const external = [];
  const injectedFailures = [];
  await context.route('**/*', route => {
    const url = new URL(route.request().url());
    if (url.origin === new URL(base).origin) {
      if (mode === 'missing-image' && url.pathname.includes('/screenshot-')) {
        injectedFailures.push(url.pathname);
        return route.fulfill({ status: 404, body: 'Deliberate QA asset failure' });
      }
      return route.continue();
    }
    external.push(route.request().url());
    return route.abort();
  });
  if (mode === 'no-observer') await context.addInitScript(() => { delete window.IntersectionObserver; });
  if (mode === 'broken-observer') await context.addInitScript(() => {
    window.IntersectionObserver = class { constructor() { throw new Error('QA injected observer failure'); } };
  });
  const page = await context.newPage();
  page.setDefaultTimeout(10000);
  const errors = [];
  const failedAssets = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error' && !(mode === 'missing-image' && message.text().includes('404'))) errors.push(message.text());
  });
  page.on('response', response => { if (response.status() >= 400) failedAssets.push(response.url()); });
  const label = `${engine}-${width}-${mode}`;
  const check = async (condition, text) => assert.ok(condition, `${label}: ${text}`);
  try {
    await page.goto(base, { waitUntil: 'networkidle' });
    if (mode === 'text-200') await page.addStyleTag({ content: 'html { font-size: 200%; }' });
    await page.evaluate(() => document.fonts.ready);
    await check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'no horizontal document overflow');
    const hero = await page.locator('h1').boundingBox();
    const primary = await page.locator('.hero-actions .button-primary').boundingBox();
    if (mode === 'normal' || mode === 'touch') {
      await check(hero.y < height && primary.y + primary.height <= height, 'purpose and primary action visible in first screen');
    }
    await page.screenshot({ path: path.join(output, `${label}-hero.png`) });
    if (width <= 768) {
      const summary = page.locator('.mobile-menu summary');
      const menuLink = page.locator('.mobile-menu a').first();
      await check(!(await menuLink.isVisible()), 'closed menu links are hidden');
      if (mode === 'touch') await summary.tap();
      else {
        await summary.focus();
        await page.keyboard.press('Enter');
      }
      await check(await menuLink.isVisible(), 'menu opens with keyboard');
      const targets = await page.locator('.mobile-menu a').evaluateAll(elements => elements.map(element => {
        const rect = element.getBoundingClientRect(); return { href: element.getAttribute('href'), width: rect.width, height: rect.height };
      }));
      await check(targets.length === 5 && targets.every(t => t.height >= 44 && t.width >= 44), 'all five targets have 44px touch area');
      await page.screenshot({ path: path.join(output, `${label}-menu.png`) });
      if (mode !== 'no-js') {
        await page.keyboard.press('Tab');
        await page.keyboard.press('Escape');
        await check(await summary.evaluate(e => e === document.activeElement), 'Escape restores summary focus');
        await check(!(await menuLink.isVisible()), 'Escape closes menu');
        await summary.click();
        await page.locator('.mobile-menu a[href="#faq"]').click();
        await check(await page.locator('#faq').evaluate(e => e === document.activeElement), 'anchor receives focus after menu closes');
      } else {
        await summary.press('Enter');
      }
    }
    // Visit every reveal region, not just the first viewport.
    for (const region of await page.locator('.reveal').all()) {
      await region.scrollIntoViewIfNeeded();
      await check(await region.evaluate(e => getComputedStyle(e).opacity === '1' && e.getBoundingClientRect().height > 0), 'reveal content visible');
    }
    await page.locator('#faq').scrollIntoViewIfNeeded();
    const faq = page.locator('.faq-list details').first();
    await faq.locator('summary').click();
    await check(await faq.evaluate(e => e.open), 'FAQ opens natively');
    await page.screenshot({ path: path.join(output, `${label}-faq.png`) });
    if (mode === 'missing-image') {
      await check(await page.locator('.image-fallback').count() === 5, 'all product images have readable failure fallback');
      await check(injectedFailures.length > 0 && failedAssets.every(url => new URL(url).pathname.includes('/screenshot-')), 'only injected image failures');
    } else {
      await check(await page.locator('img').evaluateAll(images => images.every(img => img.complete && img.naturalWidth > 0 && img.alt)), 'all images loaded and labelled');
      await check(failedAssets.length === 0, 'no asset failures');
    }
    await check(errors.length === 0 && external.length === 0, 'no JS or external-request failures');
    await page.goto(`${base}/support.html`, { waitUntil: 'networkidle' });
    if (mode === 'text-200') await page.addStyleTag({ content: 'html { font-size: 200%; }' });
    await check(await page.locator('a[href="./"]').last().isVisible(), 'support return navigation visible');
    await check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'support no horizontal overflow');
    await page.screenshot({ path: path.join(output, `${label}-support.png`) });
    results.push({ engine, width, height, mode, result: 'pass', heroTop: hero.y, primaryBottom: primary.y + primary.height, errors, failedAssets, injectedFailures, external });
  } catch (error) {
    results.push({ engine, width, height, mode, result: 'fail', error: error.message, errors, failedAssets, external });
    await page.screenshot({ path: path.join(output, `${label}-failure.png`) }).catch(() => {});
  } finally {
    console.log(`${label}: ${results.at(-1).result}`);
    await context.close();
  }
}

(async () => {
  await fs.mkdir(output, { recursive: true });
  for (const [name, type] of [['chromium', chromium], ['webkit', webkit]]) {
    let browser;
    try {
      browser = await type.launch({ headless: true, ...(name === 'chromium' && process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
    } catch (error) { results.push({ engine: name, result: 'blocked', error: error.message }); continue; }
    try {
      for (const [width, height] of [[320, 568], [375, 812], [390, 844], [768, 1024], [1440, 900]]) await testPage(browser, name, width, height);
      for (const mode of ['no-js', 'no-observer', 'broken-observer', 'reduced', 'text-200', 'missing-image', 'touch']) await testPage(browser, name, 375, 812, mode);
    } finally { await browser.close(); }
  }
  await fs.writeFile(path.join(output, 'report.json'), JSON.stringify(results, null, 2) + '\n');
  console.log(JSON.stringify(results, null, 2));
  if (results.some(result => result.result !== 'pass')) process.exitCode = 1;
})().catch(error => { console.error(error); process.exitCode = 1; });
