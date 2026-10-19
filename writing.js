// Corrector de Writing (B2 First, Paper 2) con IA. Usa ai.js.
// La IA solo corrige y propone tareas: no genera ítems para el banco de
// gramática (el banco revisado a mano es más fiable que el modelo).
// Todo lo que viene del modelo se pinta con textContent / nodos de texto.
"use strict";

const WRITINGS_KEY = "englishQuestB2.writings";
const WRITINGS_MAX = 30;
const WORDS_MIN = 140, WORDS_MAX = 190;

// Convenciones de cada tipo de texto (resumen propio del handbook de B2 First)
const WRITING_TYPES = {
  essay: { guide: "writing-essay", label: "📝 Essay (Part 1)", conv: "Part 1, compulsory. Neutral/formal register. Answers the question, covers BOTH given notes plus the candidate's own idea, introduction and conclusion with a clear opinion, paragraphs, linkers." },
  email: { guide: "writing-email", label: "✉️ Email / letter (Part 2)", conv: "Part 2. Register appropriate to the reader (informal for a friend, formal for an organisation), suitable opening and closing, answers every point of the input." },
  article: { guide: "writing-article", label: "📰 Article (Part 2)", conv: "Part 2. For a magazine or website. Engages the reader: a title, direct questions, personal examples, lively but neutral/informal register." },
  review: { guide: "writing-review", label: "⭐ Review (Part 2)", conv: "Part 2. Describes and evaluates (a film, app, place, product…) and gives a recommendation. Neutral/informal register, title optional." },
  report: { guide: "writing-report", label: "📊 Report (Part 2)", conv: "Part 2. Formal. Clear purpose in the introduction, headings, factual presentation and recommendations at the end." },
};

const SCALES = [
  ["content", "Content"],
  ["communicative", "Communicative Achievement"],
  ["organisation", "Organisation"],
  ["language", "Language"],
];

const countWords = s => (s.trim().match(/[A-Za-z0-9’'-]+/g) || []).length;

function writingSystemPrompt(type) {
  const topics = TOPICS.filter(t => !t.group).map(t => `${t.id} = ${t.title}`).join("\n");
  return `You are an experienced Cambridge B2 First (FCE) Writing examiner and English teacher.
The student is a Spanish-speaking IT professional preparing for B2 First.

Assess the text with the official B2 First assessment scale: four subscales, each scored 0-5.
- Content (5: all content relevant, target reader fully informed; 3: minor irrelevances/omissions; 1: irrelevant or misinterpretation; 0: totally irrelevant)
- Communicative Achievement (5: uses the conventions of the task effectively to hold the reader's attention and communicate straightforward and complex ideas; 3: uses conventions to hold attention and communicate straightforward ideas; 1: uses conventions in generally appropriate ways for simple ideas)
- Organisation (5: well organised and coherent, variety of cohesive devices and organisational patterns; 3: generally well organised, variety of linking words and some cohesive devices; 1: connected using basic, high-frequency linkers)
- Language (5: range of vocabulary including less common lexis, range of simple and complex grammar with control and flexibility, occasional errors that do not impede communication; 3: everyday vocabulary used appropriately, simple and some complex grammar with good control, errors do not impede; 1: basic vocabulary and simple grammar, errors may impede)
Scores 2 and 4 are between the descriptors. Be honest and calibrated like a real examiner: do not inflate scores.

Task type: ${type.label}. Conventions: ${type.conv}
Expected length: ${WORDS_MIN}-${WORDS_MAX} words.

Known recurring errors of this student (check them especially): "recommend + to-infinitive" instead of "recommend + -ing"; plural agreement after numbers; "as...as" vs "than"; "if" used instead of "because"; relative "which" referring to a whole clause; calques from Spanish; spelling of Latin-root words (double consonants, -ibility).

Grammar topics available in the student's app (use the id in "topic" when an error matches one, otherwise null):
${topics}

Reply ONLY with a JSON object, no other text, with this exact shape:
{
  "scores": {
    "content": {"score": 0-5, "comment": "..."},
    "communicative": {"score": 0-5, "comment": "..."},
    "organisation": {"score": 0-5, "comment": "..."},
    "language": {"score": 0-5, "comment": "..."}
  },
  "summary": "2-3 sentences: overall impression and whether it would pass at B2",
  "errors": [
    {"original": "exact fragment copied from the student's text", "correction": "corrected fragment", "explanation": "why, briefly", "type": "grammar|vocabulary|spelling|punctuation|register|word order", "topic": "topic id or null"}
  ],
  "strengths": ["..."],
  "improvements": ["concrete, actionable advice"],
  "upgrades": [{"original": "plain wording from the text", "better": "more B2/C1 alternative"}],
  "rewritten": "the student's text rewritten at a solid B2+ level, keeping their ideas and structure"
}
Rules: "original" must be copied EXACTLY from the student's text (so it can be highlighted). List every real error, most important first (max 25). Do not mark correct British or American variants as errors.
Write comments, explanations, summary, strengths and improvements in SPANISH (the student's interface language); keep English examples in English.`;
}

// Valida y normaliza la respuesta del modelo (no confiar en que cumpla el formato).
function sanitizeFeedback(fb, text) {
  if (!fb || typeof fb !== "object") throw new AIError("Respuesta de la IA sin el formato esperado.", "format");
  const str = v => (typeof v === "string" ? v : "").trim();
  const arr = v => (Array.isArray(v) ? v : []);
  const topicIds = new Set(TOPICS.map(t => t.id));
  const scores = {};
  for (const [k] of SCALES) {
    const s = fb.scores?.[k] || {};
    const n = Math.round(Number(s.score));
    scores[k] = { score: Number.isFinite(n) ? Math.min(5, Math.max(0, n)) : 0, comment: str(s.comment) };
  }
  return {
    scores,
    total: SCALES.reduce((a, [k]) => a + scores[k].score, 0),
    summary: str(fb.summary),
    errors: arr(fb.errors).slice(0, 25).map(e => ({
      original: str(e?.original), correction: str(e?.correction), explanation: str(e?.explanation),
      type: str(e?.type), topic: topicIds.has(e?.topic) ? e.topic : null,
      found: !!str(e?.original) && text.includes(str(e?.original)),
    })).filter(e => e.original || e.correction),
    strengths: arr(fb.strengths).map(str).filter(Boolean),
    improvements: arr(fb.improvements).map(str).filter(Boolean),
    upgrades: arr(fb.upgrades).map(u => ({ original: str(u?.original), better: str(u?.better) })).filter(u => u.better),
    rewritten: str(fb.rewritten),
  };
}

async function correctWriting(typeKey, task, text) {
  const type = WRITING_TYPES[typeKey];
  const user = `TASK (what the exam asked):\n${task || "(not provided — infer it from the text)"}\n\nSTUDENT'S TEXT (${countWords(text)} words):\n${text}`;
  const fb = await aiChat([{ role: "system", content: writingSystemPrompt(type) }, { role: "user", content: user }], { json: true });
  return sanitizeFeedback(fb, text);
}

async function suggestTask(typeKey) {
  const type = WRITING_TYPES[typeKey];
  const r = await aiChat([
    { role: "system", content: "You write realistic Cambridge B2 First Writing tasks. Reply ONLY with JSON: {\"task\": \"...\"}." },
    { role: "user", content: `Write one ${type.label} task in the exact style of the B2 First exam (${type.conv}). Topic: work, technology, science or space. For an essay include the question, "Notes — write about: 1. … 2. … 3. (your own idea)". End with "Write your ${typeKey} in ${WORDS_MIN}–${WORDS_MAX} words."` },
  ], { json: true, temperature: 0.9, maxTokens: 800 });
  return typeof r.task === "string" ? r.task.trim() : "";
}

/* ====================== Almacenamiento ====================== */
function loadWritings() { try { return JSON.parse(localStorage.getItem(WRITINGS_KEY)) || []; } catch { return []; } }
function saveWriting(entry) {
  const list = loadWritings(); list.unshift(entry);
  localStorage.setItem(WRITINGS_KEY, JSON.stringify(list.slice(0, WRITINGS_MAX)));
}

/* ====================== UI ====================== */
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };

function wrRefreshCfg() {
  const c = aiLoadCfg(), prov = AI_PROVIDERS[c.provider];
  $("wrKeyState").textContent = c.key ? `🔑 Clave guardada (${c.key.slice(0, 4)}…${c.key.slice(-4)})` : "Sin clave: ponla para poder corregir.";
  const sel = $("wrModel"); sel.textContent = "";
  const models = prov.models.includes(c.model) ? prov.models : [c.model, ...prov.models];
  models.forEach(m => { const o = el("option", null, m); o.value = m; o.selected = m === c.model; sel.append(o); });
  $("wrKeyLink").href = prov.keyUrl;
}
function wrUpdateCount() {
  const n = countWords($("wrText").value), box = $("wrCount");
  box.textContent = `${n} palabras (objetivo ${WORDS_MIN}–${WORDS_MAX})`;
  box.className = "hint " + (n === 0 ? "" : n < WORDS_MIN || n > WORDS_MAX ? "wr-bad" : "wr-good");
}
function wrBusy(on, msg) {
  ["wrCheck", "wrSuggest"].forEach(id => { $(id).disabled = on; });
  $("wrStatus").textContent = msg || "";
}

function renderWritingPage() {
  const sel = $("wrType");
  if (!sel.options.length) Object.entries(WRITING_TYPES).forEach(([k, t]) => { const o = el("option", null, t.label); o.value = k; sel.append(o); });
  wrRefreshCfg(); wrUpdateCount(); renderWritingHistory();
  $("wrCfg").open = !aiLoadCfg().key; // plegada si ya hay clave; abierta la primera vez
}

// Texto del alumno con los fragmentos erróneos resaltados (nodos de texto, sin innerHTML).
function highlighted(text, errors) {
  const box = el("div", "wr-text");
  const marks = [];
  errors.forEach((e, i) => {
    if (!e.found) return;
    const at = text.indexOf(e.original);
    if (!marks.some(m => at < m.end && at + e.original.length > m.start)) marks.push({ start: at, end: at + e.original.length, n: i + 1 });
  });
  marks.sort((a, b) => a.start - b.start);
  let pos = 0;
  marks.forEach(m => {
    box.append(document.createTextNode(text.slice(pos, m.start)));
    const mk = el("mark", null, text.slice(m.start, m.end)); mk.title = `Error ${m.n}`;
    const sup = el("sup", null, String(m.n)); mk.append(sup);
    box.append(mk); pos = m.end;
  });
  box.append(document.createTextNode(text.slice(pos)));
  return box;
}

function openTheory(topicId) {
  const t = TOPICS.find(x => x.id === topicId); if (!t) return;
  renderStudy(); show("study"); openTopic(t);
}

function renderFeedback(entry) {
  const { fb, text } = entry, out = $("wrResult"); out.textContent = "";
  const head = el("div", "card");
  head.append(el("h2", null, `Resultado: ${fb.total} / 20`));
  head.append(el("p", "hint", `${WRITING_TYPES[entry.type]?.label || entry.type} · ${entry.words} palabras · ${entry.model} · ${new Date(entry.date).toLocaleString("es-ES")}`));
  if (fb.summary) head.append(el("p", null, fb.summary));
  const grid = el("div", "wr-scores");
  SCALES.forEach(([k, name]) => {
    const s = fb.scores[k], c = el("div", "stat");
    c.append(el("b", null, `${s.score}/5`), el("span", null, name));
    if (s.comment) c.append(el("p", "wr-comment", s.comment));
    grid.append(c);
  });
  head.append(grid);
  head.append(el("p", "hint", "Orientativo: la IA no es un examinador oficial. Cambridge suma las dos tareas del Writing (40 puntos) y lo convierte a su escala; usa la nota para ver tu evolución, no como predicción exacta."));
  const guide = WRITING_TYPES[entry.type]?.guide;
  if (guide) { const g = el("button", "link", "📖 Repasar la guía de este tipo de texto"); g.type = "button"; g.onclick = () => openTheory(guide); head.append(g); }
  out.append(head);

  const txt = el("div", "card");
  txt.append(el("h2", null, "Tu texto"), highlighted(text, fb.errors));
  out.append(txt);

  if (fb.errors.length) {
    const c = el("div", "card"); c.append(el("h2", null, `Errores (${fb.errors.length})`));
    const ol = el("ol", "wr-errors");
    fb.errors.forEach(e => {
      const li = el("li");
      const line = el("p");
      line.append(el("s", null, e.original), document.createTextNode(" → "), el("b", null, e.correction));
      if (e.type) line.append(el("span", "wr-tag", e.type));
      li.append(line);
      if (e.explanation) li.append(el("p", "hint", e.explanation));
      if (e.topic) {
        const t = TOPICS.find(x => x.id === e.topic);
        const b = el("button", "link", `📖 Teoría: ${t.emoji} ${t.title}`); b.type = "button";
        b.onclick = () => openTheory(e.topic); li.append(b);
      }
      ol.append(li);
    });
    c.append(ol); out.append(c);
  }

  const lists = [["💪 Puntos fuertes", fb.strengths], ["🎯 Cómo mejorar", fb.improvements]];
  lists.forEach(([title, items]) => {
    if (!items.length) return;
    const c = el("div", "card"); c.append(el("h2", null, title));
    const ul = el("ul"); items.forEach(i => ul.append(el("li", null, i))); c.append(ul); out.append(c);
  });
  if (fb.upgrades.length) {
    const c = el("div", "card"); c.append(el("h2", null, "⬆️ Vocabulario para subir de nivel"));
    const ul = el("ul");
    fb.upgrades.forEach(u => { const li = el("li"); li.append(el("span", null, u.original), document.createTextNode(" → "), el("b", null, u.better)); ul.append(li); });
    c.append(ul); out.append(c);
  }
  if (fb.rewritten) {
    const d = el("details", "card"); d.append(el("summary", null, "✨ Versión mejorada (léela después de corregir tú los errores)"));
    d.append(el("div", "wr-text", fb.rewritten)); out.append(d);
  }
  out.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderWritingHistory() {
  const list = loadWritings(), box = $("wrHistory"); box.textContent = "";
  if (!list.length) { box.append(el("p", "hint", "Aún no has corregido ningún writing.")); return; }
  list.forEach(entry => {
    const b = el("button", "topic", `${entry.fb.total}/20 · ${WRITING_TYPES[entry.type]?.label || entry.type} · ${new Date(entry.date).toLocaleDateString("es-ES")} — ${entry.text.slice(0, 50)}…`);
    b.type = "button"; b.onclick = () => renderFeedback(entry); box.append(b);
  });
}

$("wrText").oninput = wrUpdateCount;
$("wrModel").onchange = () => { const c = aiLoadCfg(); c.model = $("wrModel").value; aiSaveCfg(c); };
$("wrSaveKey").onclick = () => {
  const c = aiLoadCfg(), key = $("wrKey").value.trim();
  if (key) {
    const prefix = AI_PROVIDERS[c.provider].keyPrefix;
    if (prefix && !key.startsWith(prefix)) { $("wrKeyState").textContent = `⚠️ Una clave de ${AI_PROVIDERS[c.provider].label} empieza por «${prefix}».`; return; }
    c.key = key;
  }
  c.model = $("wrModel").value; aiSaveCfg(c);
  $("wrKey").value = ""; wrRefreshCfg();
};
$("wrClearKey").onclick = () => { aiClearKey(); wrRefreshCfg(); };
$("wrSuggest").onclick = async () => {
  wrBusy(true, "Pidiendo una tarea a la IA…");
  try { const t = await suggestTask($("wrType").value); if (t) $("wrTask").value = t; wrBusy(false); }
  catch (e) { wrBusy(false, "❌ " + e.message); }
};
$("wrCheck").onclick = async () => {
  const text = $("wrText").value.trim(), type = $("wrType").value;
  if (countWords(text) < 30) { $("wrStatus").textContent = "Escribe al menos unas frases (mínimo 30 palabras)."; return; }
  wrBusy(true, "Corrigiendo… (puede tardar unos segundos)");
  try {
    const fb = await correctWriting(type, $("wrTask").value.trim(), text);
    const entry = { date: new Date().toISOString(), type, task: $("wrTask").value.trim(), text, words: countWords(text), model: aiLoadCfg().model, fb };
    saveWriting(entry); renderWritingHistory(); wrBusy(false); renderFeedback(entry);
  } catch (e) { wrBusy(false, "❌ " + e.message); if (e.kind === "auth") $("wrCfg").open = true; }
};
$("wrGuide").onclick = () => openTheory(WRITING_TYPES[$("wrType").value].guide);
$("wrGuideAll").onclick = () => openTheory("writing-overview");
$("tab-writing").onclick = () => {
  if (G.active && !confirm("¿Salir de la partida?")) return;
  G.active = false; renderWritingPage(); show("writing");
};
