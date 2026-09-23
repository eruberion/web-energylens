/* Deterministic brand card, not an app screenshot. Uses existing local assets only. */
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'site/assets/images/energylens-social-preview.png');
const report = path.join(root, 'qa-evidence/social-preview/report.json');
const inputs = {};
function asset(relative, mime) {
  const bytes = fs.readFileSync(path.join(root, relative));
  inputs[relative] = crypto.createHash('sha256').update(bytes).digest('hex');
  return `data:${mime};base64,${bytes.toString('base64')}`;
}
async function main() {
  const icon = asset('site/assets/images/app-icon-new.png', 'image/png');
  const regular = asset('site/assets/fonts/Inter-Regular.woff2', 'font/woff2');
  const bold = asset('site/assets/fonts/Inter-Bold.woff2', 'font/woff2');
  const browser = await chromium.launch({headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? {executablePath: process.env.CHROMIUM_EXECUTABLE} : {})});
  try {
    const page = await browser.newPage({viewport: {width: 1200, height: 630}, deviceScaleFactor: 1});
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.route('**/*', route => route.abort());
    await page.setContent(`<!doctype html><html lang="de"><head><meta charset="utf-8"><style>
      @font-face{font-family:Inter;src:url('${regular}');font-weight:400}
      @font-face{font-family:Inter;src:url('${bold}');font-weight:700}
      *{box-sizing:border-box}html,body{margin:0;width:1200px;height:630px}
      body{background:#080D14;color:#F1F5F9;font-family:Inter,sans-serif}
      main{height:100%;padding:64px 72px;display:grid;grid-template-columns:640px 1fr;gap:40px;align-items:center;border-top:8px solid #22D3A5}
      .brand{font-size:24px;font-weight:700;letter-spacing:-.5px;color:#22D3A5;margin:0 0 28px}
      h1{font-size:72px;line-height:1.08;letter-spacing:-3px;margin:0 0 22px;font-weight:700}
      .purpose{font-size:25px;line-height:1.45;margin:0;color:#94A3B8}
      .status{font-size:18px;line-height:1.5;margin:34px 0 0;color:#F1F5F9}
      .status strong{color:#F59E0B;font-weight:700}
      img{width:320px;height:320px;border-radius:42px;display:block}
      .icon{display:flex;justify-content:center;align-items:center}
    </style></head><body><main>
      <section><p class="brand">EnergyLens</p><h1>Strompreise.<br>Klar im Blick.</h1>
      <p class="purpose">Preise vergleichen. Laufzeiten planen.<br>Für Tibber-Kunden mit iPhone.</p>
      <p class="status"><strong>In Entwicklung</strong> · Noch nicht im App Store</p></section>
      <div class="icon"><img src="${icon}" alt="EnergyLens App-Icon"></div>
    </main></body></html>`, {waitUntil: 'load'});
    await page.evaluate(() => document.fonts.ready);
    const check = await page.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
      imageLoaded: document.querySelector('img').naturalWidth > 0,
      text: document.querySelector('main').innerText,
      boxes: [...document.querySelectorAll('section,.icon,h1,.purpose,.status')].map(node => {
        const rect = node.getBoundingClientRect();
        return {left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom, overflow: node.scrollWidth > node.clientWidth};
      })
    }));
    assert.equal(check.width, 1200); assert.equal(check.height, 630);
    assert.ok(check.imageLoaded); assert.match(check.text, /Noch nicht im App Store/);
    assert.ok(check.boxes.every(box => box.left >= 0 && box.top >= 0 && box.right <= 1200 && box.bottom <= 630 && !box.overflow));
    assert.deepEqual(errors, []);
    await page.screenshot({path: output});
    fs.mkdirSync(path.dirname(report), {recursive: true});
    fs.writeFileSync(report, JSON.stringify({
      type: 'brand-card-not-app-screenshot', size: [1200, 630], browser: browser.version(),
      inputs, output: path.relative(root, output),
      outputSHA256: crypto.createHash('sha256').update(fs.readFileSync(output)).digest('hex'),
      check, errors, externalRequestsAllowed: false, visualReview: 'required separately'
    }, null, 2) + '\n');
    console.log('PASS: 1200×630 brand preview; local icon/fonts, no app/customer data. Visual review still required.');
  } finally { await browser.close(); }
}
main().catch(error => {console.error(error.message); process.exitCode = 1;});
