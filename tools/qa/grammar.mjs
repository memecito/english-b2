// Juega todas las frases de los temas indicados con la primera respuesta válida.
// Uso: ONLY=tema1,tema2 node <skill>/browser.mjs file://$PWD/index.html --script tools/qa/grammar.mjs
// Sin ONLY juega todos los temas.
import { GRAMMAR, findItem } from './_grammar.mjs';
const ONLY = (process.env.ONLY || '').split(',').filter(Boolean);
export default async (page) => {
  const errs = []; page.on('pageerror', e => errs.push(String(e))); page.on('console', m => m.type() === 'error' && errs.push(m.text()));
  const out = {};
  for (const t of ONLY.length ? ONLY : Object.keys(GRAMMAR)) {
    const items = GRAMMAR[t].items, done = new Set(), bad = [];
    for (let s = 0; s < 15 && done.size < items.length; s++) {
      await page.click('#categorySeg [data-category="grammar"]');
      await page.click(`#grammarSeg [data-topic="${t}"]`);
      await page.click('#startBtn');
      for (let k = 0; k < 200; k++) {
        if (await page.locator('#end').isVisible()) break;
        const q = (await page.locator('#qCard').innerText()).replace(/\s+/g, ' ');
        const it = findItem(q, items);
        if (!it) { bad.push('nomatch:' + q); break; }
        await page.fill('#input', it.answers[0]); await page.click('#checkBtn');
        const fb = await page.locator('#feedback').innerText();
        if (fb.includes('❌')) bad.push(it.id + ':' + fb.slice(0, 80)); else done.add(it.id);
        await page.click('#nextBtn');
      }
      await page.reload();
    }
    out[t] = `${done.size}/${items.length}` + (bad.length ? ' BAD ' + bad.join(' | ') : '');
  }
  await page.click('#tab-study');
  out.topics = await page.locator('#topicsBox button').count();
  out.errs = errs; return out;
};
