// Adaptador de IA, independiente del proveedor. Usa el formato de chat
// compatible con OpenAI (POST {base}/chat/completions), que también
// soportan Groq, OpenRouter, Mistral, Ollama y Gemini. Para cambiar de
// proveedor basta con añadir una entrada a AI_PROVIDERS.
//
// Seguridad:
// - La clave NUNCA va en el código ni en el repo: la escribe el usuario en
//   la app y se guarda solo en localStorage (AI_KEY), separada del progreso.
// - Ojo: en file:// todas las páginas locales comparten localStorage. Usar
//   una clave de capa gratuita sin tarjeta, para que una fuga solo gaste cuota.
// - Lo que devuelve el modelo es texto no confiable: se pinta siempre con
//   textContent, nunca con innerHTML (ver writing.js).
"use strict";

const AI_KEY = "englishQuestB2.ai";
const AI_PROVIDERS = {
  groq: {
    label: "Groq",
    base: "https://api.groq.com/openai/v1",
    keyUrl: "https://console.groq.com/keys",
    keyPrefix: "gsk_",
    // por calidad de corrección (de más a menos); la lista cambia: ver console.groq.com/docs/models
    models: ["openai/gpt-oss-120b", "llama-3.3-70b-versatile", "qwen/qwen3-32b", "openai/gpt-oss-20b"],
  },
};

function aiLoadCfg() {
  try {
    const c = JSON.parse(localStorage.getItem(AI_KEY)) || {};
    const p = AI_PROVIDERS[c.provider] ? c.provider : "groq";
    return { provider: p, key: c.key || "", model: c.model || AI_PROVIDERS[p].models[0] };
  } catch { return { provider: "groq", key: "", model: AI_PROVIDERS.groq.models[0] }; }
}
function aiSaveCfg(c) { localStorage.setItem(AI_KEY, JSON.stringify(c)); }
function aiClearKey() { const c = aiLoadCfg(); c.key = ""; aiSaveCfg(c); }

class AIError extends Error {
  constructor(msg, kind) { super(msg); this.kind = kind; } // kind: auth | rate | network | format | server
}

// Llamada de chat. Devuelve el texto de la respuesta (o el objeto ya
// parseado si json=true). Timeout para no dejar la UI colgada.
async function aiChat(messages, { json = false, temperature = 0.2, maxTokens = 4000, timeoutMs = 90000 } = {}) {
  const cfg = aiLoadCfg(), prov = AI_PROVIDERS[cfg.provider];
  if (!cfg.key) throw new AIError("Falta la clave de la API. Ponla en ⚙️ Configuración.", "auth");
  const body = { model: cfg.model, messages, temperature, max_tokens: maxTokens };
  if (json) body.response_format = { type: "json_object" };
  const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), timeoutMs);
  let res;
  try {
    res = await fetch(`${prov.base}/chat/completions`, {
      method: "POST", signal: ctl.signal,
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${cfg.key}` },
      body: JSON.stringify(body),
    });
  } catch (e) {
    throw new AIError(e.name === "AbortError" ? "La IA ha tardado demasiado. Prueba otra vez." : "Sin conexión con la API (¿estás sin internet?).", "network");
  } finally { clearTimeout(timer); }
  if (!res.ok) {
    let detail = "";
    try { detail = (await res.json()).error?.message || ""; } catch { /* cuerpo no JSON */ }
    if (res.status === 401) throw new AIError("La clave no es válida. Revísala en ⚙️ Configuración.", "auth");
    if (res.status === 429) {
      const wait = res.headers.get("retry-after");
      throw new AIError(`Límite de la capa gratuita alcanzado${wait ? ` — reintenta en ${wait} s` : ""}. Puedes probar otro modelo.`, "rate");
    }
    throw new AIError(`Error ${res.status} de la API${detail ? ": " + detail : ""}`, "server");
  }
  const data = await res.json();
  const text = data.choices?.[0]?.message?.content || "";
  if (!json) return text;
  try { return JSON.parse(text.replace(/^```(?:json)?\s*|\s*```$/g, "")); }
  catch { throw new AIError("La IA ha devuelto una respuesta con formato roto. Prueba otra vez u otro modelo.", "format"); }
}
