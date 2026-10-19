// Estudiar > Teoría agrupada (gramática / writing) y enlaces a las guías desde la pestaña Writing.
export default async (page) => {
  const errs = []; page.on('pageerror', e => errs.push(String(e)));
  const out = {};
  await page.click('#tab-study');
  out.groups = await page.locator('#topicsBox h3').allInnerTexts();
  out.topics = await page.locator('#topicsBox button').count();
  for (const name of ['Writing paper', 'Essay (Part', 'Email / letter', 'Article (Part', 'Review (Part', 'Report (Part']) {
    await page.click('#tab-study');
    await page.locator('#topicsBox button', { hasText: name }).first().click();
    out[name] = { title: await page.locator('#topicTitle').innerText(), sections: await page.locator('#topicBody h3').count(), modelParas: await page.locator('#topicBody .model p').count() };
  }
  await page.click('#tab-writing');
  await page.selectOption('#wrType', 'review'); await page.click('#wrGuide');
  out.guideFromWriting = await page.locator('#topicTitle').innerText();
  await page.click('#tab-writing'); await page.click('#wrGuideAll');
  out.overviewFromWriting = await page.locator('#topicTitle').innerText();
  out.started = await page.evaluate(() => document.getElementById('lvName').textContent); // si solo dice "Nivel", el JS no arrancó
  out.errs = errs; return out;
};
