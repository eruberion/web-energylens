// Supplemental viewport evidence, after the 24-case regression completed.
const { chromium, webkit } = require('/Users/ai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
(async () => {
  for (const [engine, type] of [['chromium', chromium], ['webkit', webkit]]) {
    const browser = await type.launch({ headless: true });
    try {
      for (const width of [375, 768, 1440]) {
        const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
        await context.route('**/*', route => new URL(route.request().url()).origin === 'http://127.0.0.1:5194' ? route.continue() : route.abort());
        const page = await context.newPage();
        await page.goto('http://127.0.0.1:5194', { waitUntil: 'networkidle' });
        const items = await page.locator('.preview-item').all();
        for (let i = 0; i < items.length; i++) {
          await items[i].evaluate(element => element.scrollIntoView({ block: 'center', behavior: 'instant' }));
          const rect = await items[i].boundingBox();
          assert(rect.y > 64 && rect.y + rect.height <= 1000, `${engine}/${width}/${i}: full item below header`);
          await page.screenshot({ path: `${__dirname}/${engine}-${width}-centered-item-${i + 1}.png` });
        }
        console.log(`${engine}-${width}: four fully visible preview items`);
        await context.close();
      }
    } finally { await browser.close(); }
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
