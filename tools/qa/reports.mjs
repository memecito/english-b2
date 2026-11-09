// Reporte de errores: botón tras responder, en Estudiar y en la teoría; badge,
// lista en Historial, escape de HTML, y que Enter en el diálogo no pase de pregunta.
export default async (page) => {
  const errs=[]; page.on('pageerror',e=>errs.push(String(e))); page.on('console',m=>m.type()==='error'&&errs.push(m.text()));
  page.on('dialog',d=>d.accept());
  const out={level:await page.locator('#lvName').innerText()};
  const save=async(note)=>{ await page.fill('#reportNote',note); await page.click('#reportForm button[type=submit]'); };
  // vocabulario en partida
  await page.click('#startBtn');
  out.hiddenBeforeAnswer=await page.locator('#reportBtn').isHidden();
  const q=await page.locator('#word').innerText();
  await page.fill('#input','zzz'); await page.click('#checkBtn');
  out.visibleAfterAnswer=await page.locator('#reportBtn').isVisible();
  await page.click('#reportBtn');
  out.dlgShown=await page.locator('#reportShown').innerText(); out.dlgTyped=await page.locator('#reportTyped').innerText();
  await page.focus('#reportNote'); await page.keyboard.press('Enter');
  out.enterKeepsDialog=await page.locator('#reportDlg').evaluate(d=>d.open);
  out.sameQuestion=(await page.locator('#word').innerText())===q;
  await save('<img src=x onerror="document.title=\'XSS\'">');
  out.badge1=await page.locator('#reportBadge').innerText();
  out.nextHidden=await page.locator('#reportDlg').evaluate(d=>d.open);
  await page.click('#quitBtn').catch(()=>{});
  // gramática en partida
  await page.click('#tab-exercises');
  await page.click('#categorySeg [data-category="grammar"]'); await page.click('#grammarSeg [data-topic="futures"]');
  await page.click('#startBtn'); await page.click('#skipBtn'); await page.click('#reportBtn');
  out.grammarShown=await page.locator('#reportShown').innerText(); out.grammarType=await page.locator('#reportType').inputValue();
  await save('');
  await page.click('#quitBtn').catch(()=>{});
  // Estudiar: palabra y teoría (la teoría exige comentario)
  await page.click('#tab-study'); await page.locator('#topicsBox button',{hasText:'Futures'}).click();
  await page.click('#topicReport'); await page.click('#reportForm button[type=submit]');
  out.theoryNeedsNote=await page.locator('#reportErr').innerText();
  await save('Sección 3, primer ejemplo');
  await page.click('#studySeg [data-view="vocab"]');
  await page.locator('#vocabCats .opt',{hasText:'Cualidades'}).click();
  await page.locator('#vocabBlocks .opt').first().click();
  await page.locator('#vocabWordsList li button[aria-label^="Reportar"]').first().click();
  await page.click('#reportCancel');
  out.badge3=await page.locator('#reportBadge').innerText();
  // Historial
  await page.click('#tab-hist');
  out.items=(await page.locator('#reportsList li').allInnerTexts()).map(t=>t.replace(/\n/g,' | '));
  out.xssRan=(await page.title())==='XSS'; out.imgs=await page.locator('#reportsList img').count();
  const [dl]=await Promise.all([page.waitForEvent('download'),page.click('#reportsDownload')]);
  const fs=await import('node:fs'); out.file=dl.suggestedFilename(); out.md=fs.readFileSync(await dl.path(),'utf8');
  await page.reload(); out.badgeAfterReload=await page.locator('#reportBadge').innerText();
  await page.click('#tab-hist'); await page.locator('#reportsList button').first().click();
  out.afterDelete=await page.locator('#reportsList li').count();
  await page.click('#reportsClear');
  out.afterClear=await page.locator('#reportsCard').isHidden(); out.badgeHidden=await page.locator('#reportBadge').isHidden();
  out.errs=errs; return out;
};
