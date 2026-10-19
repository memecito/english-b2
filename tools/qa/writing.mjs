// Corrector de Writing con la API de Groq simulada (page.route): éxito, 401, 429 y
// una respuesta con HTML malicioso que NO debe ejecutarse. No necesita clave real.
const TEXT = `Dear Sir,\nI am writing to recommend to try the new office. It has three hundreds desks and it is more bigger than the old one. ` + 'word '.repeat(140);
const FB = {
  scores: { content: { score: 4, comment: 'Cubre los puntos <img src=x onerror="window.__xss=1">' }, communicative: { score: 3, comment: 'ok' },
            organisation: { score: 7, comment: 'fuera de rango' }, language: { score: '2', comment: 'errores' } },
  summary: 'Aprobaría por poco.',
  errors: [
    { original: 'recommend to try', correction: 'recommend trying', explanation: 'recommend + -ing', type: 'grammar', topic: 'verb-patterns' },
    { original: 'three hundreds desks', correction: 'three hundred desks', explanation: 'hundred sin -s', type: 'grammar', topic: 'nouns-articles' },
    { original: 'more bigger', correction: 'bigger', explanation: 'no doble comparativo', type: 'grammar', topic: 'inventado' },
    { original: 'texto que no está', correction: 'x', explanation: 'no se resalta', type: 'vocabulary', topic: null },
  ],
  strengths: ['Registro formal'], improvements: ['Usa linkers'], upgrades: [{ original: 'big', better: 'spacious' }], rewritten: 'Dear Sir, …',
};
export default async (page) => {
  const errs = []; page.on('pageerror', e => errs.push(String(e))); page.on('dialog', d => d.accept());
  let mode = 'ok';
  await page.route('https://api.groq.com/**', route => {
    if (mode === '401') return route.fulfill({ status: 401, contentType: 'application/json', body: '{"error":{"message":"Invalid API Key"}}' });
    if (mode === '429') return route.fulfill({ status: 429, contentType: 'application/json', body: '{}' });
    return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ choices: [{ message: { content: JSON.stringify(FB) } }] }) });
  });
  const out = {};
  await page.click('#tab-writing');
  await page.fill('#wrKey', 'gsk_TESTKEY123456'); await page.click('#wrSaveKey'); out.keyState = await page.locator('#wrKeyState').innerText(); // gitleaks:allow — clave inventada para la prueba (la API está simulada)
  await page.fill('#wrText', TEXT); await page.click('#wrCheck'); await page.waitForSelector('#wrResult h2');
  out.title = await page.locator('#wrResult h2').first().innerText();
  out.scores = await page.locator('.wr-scores b').allInnerTexts();
  out.marks = await page.locator('.wr-text mark').count();
  out.theoryLinks = await page.locator('.wr-errors button').count();
  out.xss = (await page.evaluate(() => window.__xss || 0)) + ' / img: ' + (await page.locator('#wrResult img').count());
  mode = '401'; await page.click('#wrCheck'); await page.waitForFunction(() => document.getElementById('wrStatus').textContent.includes('❌'));
  out.err401 = await page.locator('#wrStatus').innerText();
  mode = '429'; await page.click('#wrCheck'); await page.waitForFunction(() => document.getElementById('wrStatus').textContent.includes('Límite'));
  out.err429 = await page.locator('#wrStatus').innerText();
  await page.click('#wrClearKey'); out.cleared = await page.locator('#wrKeyState').innerText();
  out.errs = errs; return out;
};
