// Reporte de errores de contenido (traducciones, frases, teoría). La app no
// tiene servidor: los reportes se guardan en localStorage, separados del
// progreso (así "Borrar todo el historial" no se los lleva), y se exportan a
// Markdown para corregirlos en data/translations.txt, grammar.js o topics.js.
// Lo que escribe el usuario se pinta siempre con textContent.
"use strict";

const REPORTS_KEY = "englishQuestB2.reports";
const REPORT_TYPES = {
  translation: "Traducción incorrecta",
  answer: "Respuesta válida no aceptada",
  theory: "Error en la explicación",
  other: "Otro",
};

function reportsLoad() {
  try { return JSON.parse(localStorage.getItem(REPORTS_KEY)) || []; } catch { return []; }
}
function reportsSave(list) {
  try { localStorage.setItem(REPORTS_KEY, JSON.stringify(list)); return true; } catch { return false; }
}

// Qué se está reportando: lo que se ve en pantalla y la referencia para encontrarlo en los datos
function reportCtxWord(w) {
  return { kind: "vocab", ref: w.en[0], shown: `${w.en.join(" / ")} → ${w.es.join(", ")}`, type: "translation" };
}
function reportCtxTopic(t) {
  return { kind: "theory", ref: t.id, shown: t.title, type: "theory" };
}
function reportCtxQuestion() {
  const typed = $("input").value.trim();
  if (G.kind !== "grammar") return { ...reportCtxWord(G.cur.w), typed };
  const it = G.cur.item;
  return { kind: "grammar", ref: `${itemTopic()}:${it.id}`, shown: `${it.text} → ${it.answers.join(" / ")}`, typed, type: "answer" };
}

let reportCtx = null;
function openReport(ctx) {
  reportCtx = ctx;
  $("reportShown").textContent = ctx.shown;
  $("reportTyped").textContent = ctx.typed ? `Escribiste: ${ctx.typed}` : "";
  $("reportType").value = ctx.type;
  $("reportNote").value = "";
  $("reportNote").placeholder = ctx.kind === "theory" ? "Copia la frase con el error y explica qué falla…" : "¿Qué debería poner? ¿Dónde lo has comprobado?";
  $("reportErr").classList.add("hidden");
  $("reportDlg").showModal();
  $("reportNote").focus();
}
Object.entries(REPORT_TYPES).forEach(([value, label]) => {
  const o = document.createElement("option"); o.value = value; o.textContent = label; $("reportType").append(o);
});
$("reportCancel").onclick = () => $("reportDlg").close();
$("reportForm").onsubmit = e => {
  e.preventDefault();
  const note = $("reportNote").value.trim();
  const showErr = msg => { $("reportErr").textContent = msg; $("reportErr").classList.remove("hidden"); };
  // en la teoría no se sabe qué frase es si no se dice
  if (reportCtx.kind === "theory" && !note) { showErr("Indica qué frase tiene el error."); $("reportNote").focus(); return; }
  const list = reportsLoad();
  list.push({ ...reportCtx, type: $("reportType").value, note, at: new Date().toISOString() });
  if (!reportsSave(list)) { showErr("No se ha podido guardar (almacenamiento del navegador bloqueado o lleno)."); return; }
  $("reportDlg").close();
  updateReportBadge(); floatText("🚩 Guardado");
};
$("reportBtn").onclick = () => openReport(reportCtxQuestion());

function updateReportBadge() {
  const n = reportsLoad().length, b = $("reportBadge");
  b.textContent = n ? `🚩 ${n}` : "";
  b.title = n ? `${n} errores reportados: míralos en Historial` : "";
  b.classList.toggle("hidden", !n);
}

function reportsMarkdown(list) {
  const lines = ["# Errores de contenido reportados — English Quest B2", ""];
  list.forEach(r => {
    lines.push(`- ${r.at.slice(0, 10)} · **${REPORT_TYPES[r.type] || r.type}** · ${r.kind} · \`${r.ref}\``, `  - Mostrado: ${r.shown}`);
    if (r.typed) lines.push(`  - Escrito: ${r.typed}`);
    if (r.note) lines.push(`  - Comentario: ${r.note}`);
  });
  return lines.join("\n") + "\n";
}

function renderReports() {
  const list = reportsLoad(), box = $("reportsList");
  $("reportsCard").classList.toggle("hidden", !list.length);
  $("reportsStatus").textContent = "";
  box.textContent = "";
  list.forEach((r, i) => {
    const li = document.createElement("li"); li.className = "has-note";
    const a = document.createElement("b"); a.textContent = r.ref;
    const sp = document.createElement("span"); sp.textContent = REPORT_TYPES[r.type] || r.type;
    const del = document.createElement("button"); del.type = "button"; del.textContent = "🗑️";
    del.setAttribute("aria-label", `Borrar el reporte de ${r.ref}`);
    del.onclick = () => { const l = reportsLoad(); l.splice(i, 1); reportsSave(l); updateReportBadge(); renderReports(); };
    const note = document.createElement("span"); note.className = "note"; note.append(r.shown);
    if (r.typed) note.append(` · Escrito: ${r.typed}`);
    if (r.note) { const c = document.createElement("i"); c.textContent = r.note; note.append(c); }
    li.append(a, sp, del, note);
    box.append(li);
  });
}
$("reportsCopy").onclick = async () => {
  try {
    await navigator.clipboard.writeText(reportsMarkdown(reportsLoad()));
    $("reportsStatus").textContent = "Copiado.";
  } catch { $("reportsStatus").textContent = "El navegador no deja copiar: usa Descargar."; }
};
$("reportsDownload").onclick = () => {
  const url = URL.createObjectURL(new Blob([reportsMarkdown(reportsLoad())], { type: "text/markdown" }));
  const a = document.createElement("a"); a.href = url; a.download = "english-b2-errores.md"; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};
$("reportsClear").onclick = () => {
  if (confirm("¿Borrar todos los errores reportados?")) { reportsSave([]); updateReportBadge(); renderReports(); }
};
updateReportBadge();
