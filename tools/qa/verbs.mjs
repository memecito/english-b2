// Verbos irregulares y phrasal verbs: grupo propio en Estudiar y en Inicio,
// descripción/ejemplo en la lista y en el feedback del juego.
export default async (page) => {
  const errs=[]; page.on('pageerror',e=>errs.push(String(e))); page.on('console',m=>m.type()==='error'&&errs.push(m.text()));
  const out={}; page.on('dialog',d=>d.accept());
  out.level=await page.locator('#lvName').innerText();
  await page.click('#tab-study'); await page.click('#studySeg [data-view="vocab"]');
  out.groups=await page.locator('#vocabCats h3').allInnerTexts();
  await page.locator('#vocabCats .opt',{hasText:'Verbos irregulares'}).click();
  out.irrTitle=await page.locator('#vocabBlocksTitle').innerText();
  await page.locator('#vocabBlocks .opt').first().click();
  out.irrWords=(await page.locator('#vocabWordsList li').allInnerTexts()).slice(0,3).map(t=>t.replace(/\n/g,' | '));
  await page.click('#vocabWordsBack'); await page.click('#vocabBlocksBack');
  await page.locator('#vocabCats .opt',{hasText:'Phrasal verbs con GET'}).click();
  out.getTitle=await page.locator('#vocabBlocksTitle').innerText();
  await page.locator('#vocabBlocks .opt').first().click();
  out.getWords=(await page.locator('#vocabWordsList li').allInnerTexts()).slice(0,2).map(t=>t.replace(/\n/g,' | '));
  await page.click('#vocabWordsBack'); await page.click('#vocabPractice');
  out.homeGroups=await page.locator('#categories h3').allInnerTexts();
  out.pressed=(await page.locator('#categories .opt[aria-pressed="true"]').allInnerTexts()).map(t=>t.replace(/\n/g,' '));
  await page.click('#startBtn'); out.q=await page.locator('#word').innerText();
  await page.click('#skipBtn'); out.feedback=(await page.locator('#feedback').innerText()).replace(/\n/g,' | ');
  out.feedbackHasNote=await page.locator('#feedback .note').count();
  out.errs=errs; return out;
};
