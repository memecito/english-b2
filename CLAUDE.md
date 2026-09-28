# CLAUDE.md — English Quest B2

Copia hermana de `~/claude/ingles-ari` (juego de mi hija para A2 Key),
creada el 2026-09-25 para que **yo** practique de cara al **Cambridge
B2 First**. Mismo motor, contenido propio y separado — ver
`~/claude/PATRON-JUEGO-APRENDIZAJE.md` (principios pedagógicos,
gamificación, arquitectura datos/motor/generador) antes de tocar la
estructura del juego.

**Estado actual: motor copiado y funcionando, contenido vacío.** Los
ficheros de datos (`words.js`, `topics.js`, `grammar.js`,
`data/translations.txt`) están a propósito sin contenido — pendiente
de rellenar con material B2. No es un PDF que extraer (a diferencia de
`ingles-ari`): la fuente es material propio ya existente:

- `~/claude/English/plan-estudio.md` — plan de 12 semanas B2→C1, con
  el temario de gramática/vocabulario semana a semana y los errores
  recurrentes ya diagnosticados (*recommend + -ing*, concordancia de
  plurales tras números, *as...as*, *if* vs *because*, relative
  *which*, word formation).
- `~/claude/English/theory/*.md` — apuntes propios: `word-formation.md`,
  `verb-patterns-gerund-infinitive.md`, `key-word-transformation.md`,
  `unreal-past.md`, `vocabulary.txt`.
- `~/claude/English/ejercicios/` — correcciones y ejercicios previos,
  útiles para ver qué errores concretos conviene reforzar primero.

Al construir el contenido, priorizar los puntos débiles ya
diagnosticados en el plan antes que un temario B2 genérico — es más
eficiente para el objetivo real (aprobar el examen) que cubrir todo el
nivel de golpe.

## Ficheros (idéntico patrón que ingles-ari)

- `index.html`: motor del juego, copiado sin cambios de lógica salvo
  dos ajustes deliberados: `KEY = "englishQuestB2.v1"` (distinta de la
  de `ingles-ari`, a propósito, para no mezclar progresos) y el
  título/descripción ("B2 First" en vez de "A2 Key"). Cualquier mejora
  de motor hecha en `ingles-ari` (Leitner, tipos de ejercicio, UI) NO
  se propaga sola aquí — si se quiere, portarla a mano y ver si
  conviene aplicarla también en `ingles-ari`.
- `words.js`: GENERADO por `python3 tools/build_words.py` desde
  `data/translations.txt` (mismo formato que ingles-ari:
  `ingles|es1,es2,...` o con 3er campo de categoría opcional).
- `topics.js` / `grammar.js`: mismo formato que ingles-ari (ver su
  CLAUDE.md para el detalle de forma) — vacíos por ahora.

## Pendiente de decidir cuando se retome

- Tono/copy: los mensajes actuales ("¡Buen intento!", el zorrito 🦊,
  niveles "Huevito → Pollito...") están pensados para una niña de 11
  años. Funcionan igual para un adulto, pero si molesta, es un cambio
  de copy trivial en este proyecto, no en el de ingles-ari.
- Publicar en git: por ahora esta copia no tiene repositorio propio
  (a diferencia de ingles-ari, que sí lo tiene desde el 2026-09-23) —
  crear uno si se quiere versionar el avance.
- Qué gramática B2 priorizar primero: candidatas del plan (present
  perfect vs past simple, condicionales, voz pasiva, reported speech,
  relative clauses, word formation) — decidir orden con el usuario, no
  asumir.

## Reglas heredadas de ingles-ari

- Revisar cualquier contenido de teoría/traducción antes de darlo por
  bueno.
- Sin build ni dependencias — no proponer TypeScript/framework sin que
  se pida.
