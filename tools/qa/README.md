# Pruebas en navegador

Scripts para la skill `browser-automation` (Playwright/patchright). Cada uno
exporta `async (page) => resultado`.

```bash
B=~/.claude/skills/browser-automation/browser.mjs
U=file://$PWD/index.html
node $B $U --script tools/qa/grammar.mjs          # todas las frases de todos los temas
ONLY=comparison node $B $U --script tools/qa/grammar.mjs
node $B $U --script tools/qa/review.mjs           # modo Repaso de gramática
node $B $U --script tools/qa/vocab.mjs            # Estudiar > Vocabulario por categoría/letra
node $B $U --script tools/qa/verbs.mjs            # irregulares y phrasal verbs: grupos, descripción y ejemplo
node $B $U --script tools/qa/writing.mjs          # corrector de Writing con Groq simulado
```

Ojo: un error al cargar la página (p. ej. usar un `const` antes de
declararlo) NO sale en "console errors" porque ocurre antes de que el script
escuche. Síntoma: nada responde. Comprobar con
`--eval 'document.getElementById("lvName").textContent'` (debe decir
"Nivel 1: …", no solo "Nivel").
