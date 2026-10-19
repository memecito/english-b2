// Modo "Repaso de gramática": falla 2 frases en dos temas y comprueba que se mezclan en el repaso.
import { GRAMMAR, findItem } from './_grammar.mjs';
const all = Object.entries(GRAMMAR).flatMap(([k, g]) => g.items.map(i => ({ ...i, k })));
export default async (page) => {
  const errs = []; page.on('pageerror', e => errs.push(String(e))); page.on('dialog', d => d.accept());
  const out = {};
  await page.click('#categorySeg [data-category="grammar"]');
  await page.click('#grammarSeg [data-topic="__review"]');
  out.empty = await page.locator('#poolInfo').innerText();
  for (const t of ['comparison', 'reported-speech']) {
    await page.click(`#grammarSeg [data-topic="${t}"]`); await page.click('#startBtn');
    for (let k = 0; k < 2; k++) { await page.fill('#input', 'zzz'); await page.click('#checkBtn'); await page.click('#nextBtn'); }
    await page.click('#quitBtn'); await page.click('#homeBtn');
  }
  await page.reload(); await page.click('#categorySeg [data-category="grammar"]');
  out.badge = await page.locator('#grDueCount').innerText();
  await page.click('#grammarSeg [data-topic="__review"]'); await page.click('#startBtn');
  const seen = new Set();
  for (let k = 0; k < 10; k++) {
    if (await page.locator('#end').isVisible()) break;
    const it = findItem((await page.locator('#qCard').innerText()).replace(/\s+/g, ' '), all); seen.add(it.k);
    await page.fill('#input', it.answers[0]); await page.click('#checkBtn'); await page.click('#nextBtn');
  }
  out.topicsMixed = [...seen]; out.end = await page.locator('#end').isVisible();
  await page.click('#homeBtn'); await page.click('#categorySeg [data-category="grammar"]');
  out.badgeAfter = await page.locator('#grDueCount').innerText();
  out.errs = errs; return out;
};
