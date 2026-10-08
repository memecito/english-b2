# CLAUDE.md — English Quest B2

Copia hermana de `~/claude/ingles-ari` (juego de mi hija para A2 Key),
creada el 2026-09-25 para que **yo** practique de cara al **Cambridge
B2 First**. Mismo motor, contenido propio y separado — ver
`~/claude/PATRON-JUEGO-APRENDIZAJE.md` (principios pedagógicos,
gamificación, arquitectura datos/motor/generador) antes de tocar la
estructura del juego.

**Estado actual (2026-10-08):** motor funcionando, repo git propio
(GitHub privado: `memecito/english-b2`), copy con temática informática/espacio/ciencia ficción,
vocabulario migrado (14 palabras) y **10 temas de gramática, 259
frases**: relative clauses, present perfect vs past simple, verb
patterns, word formation (Part 3), unreal past, conditionals (con
*if* vs *because*), passive + causative, modals (obligación, permiso,
habilidad, consejo, peticiones), modals of deduction, comparison
(con *as...as*). Resto de gramática
pendiente — el usuario quiere montarla casi del tirón. No es un PDF que extraer
(a diferencia de `ingles-ari`): la fuente es material propio ya
existente:

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

## Enfoque del contenido (decidido 2026-09-28)

El usuario sigue dos formaciones a la vez: clases de inglés de la
empresa (objetivo: conversación en contexto laboral) y academia
(objetivo: Cambridge B2 First). Decisión: **el esqueleto es el del
examen** (temario B2, formato Use of English — Part 2 open cloze, Part
3 word formation, Part 4 key word transformation), pero **los
ejemplos y frases van en contexto de trabajo/tecnología/espacio**. Así
un mismo ítem sirve para las dos formaciones. Cuando la clase del
trabajo vea un tema, adelantarlo aquí (así se eligió relative clauses
como primer tema).

- La clase del trabajo usa la grammar guide de Learnlight:
  `docs/notas-learnlight.md` clasifica sus 126 lecciones (ya cubiertas
  / candidatas a tema nuevo / descartadas A1-A2) y anota sus puntos
  discutibles. Consultarlo antes de volver a descargar la web; al usar
  su contenido, parafrasear y poner ejemplos propios (copyright). Los
  temas alineados con la clase llevan una nota "📎 Work class" (o
  "📎 Academy class" si lo vio en la academia) al principio de la
  teoría.
- Teoría (`topics.js`) **en inglés**, con las trampas de
  hispanohablante marcadas — misma regla que `~/claude/English`. La UI
  del juego sigue en español.

## Ficheros (idéntico patrón que ingles-ari)

- `index.html`: motor del juego, copiado de `ingles-ari` con estos
  cambios deliberados: `KEY = "englishQuestB2.v1"` (distinta de la
  de `ingles-ari`, a propósito, para no mezclar progresos),
  título/descripción ("B2 First"), copy de ciencia ficción (niveles
  Hello World → IA singular, mascota 🤖) y **`norm(s, stripArticle)`:
  en gramática no se quita el `to`/`the`/`a` inicial** — en B2 eso es
  justo lo que se evalúa (`to whom` vs `whom`, `to go` vs `going`).
  Además `norm()` elimina apóstrofos (`hadn't` = `hadnt` = `hadn’t`).
  `ingles-ari` sigue quitándolo (ahí no se ha visto que moleste). Cualquier mejora
  de motor hecha en `ingles-ari` (Leitner, tipos de ejercicio, UI) NO
  se propaga sola aquí — si se quiere, portarla a mano y ver si
  conviene aplicarla también en `ingles-ari`.
- `words.js`: GENERADO por `python3 tools/build_words.py` desde
  `data/translations.txt` (mismo formato que ingles-ari:
  `ingles|es1,es2,...` o con 3er campo de categoría opcional, en
  español: trabajo, comida, naturaleza, historia). Aquí las líneas con
  `#` son comentarios.
- `topics.js` / `grammar.js`: mismo formato que ingles-ari (ver su
  CLAUDE.md para el detalle de forma). Ids de ítems estables (claves
  Leitner): solo añadir al final.

## Pendiente

- Resto de gramática B2 (orden acordado 2026-10-06, ver
  `docs/notas-learnlight.md` §2): sustantivos/cuantificadores/
  artículos (con la concordancia de plurales diagnosticada), reported
  speech + say/tell + indirect questions, pasados narrativos (used to /
  would), futuros (future perfect/continuous), adjetivos (gradable,
  -ed/-ing), preguntas (subject/object, tags),
  phrasal verbs (gramática) y preposiciones; linking words
  (although/despite…) del plan.
- Vocabulario: el usuario va a generar una lista con otra IA en el
  formato de `data/translations.txt` — revisarla al importarla
  (traducciones, duplicados, categorías coherentes).
- Revisar si el formato Part 4 (respuesta de 2-5 palabras) necesita
  que el motor acepte variantes con más flexibilidad que la lista
  `answers` exacta.

## Reglas heredadas de ingles-ari

- Revisar cualquier contenido de teoría/traducción antes de darlo por
  bueno.
- Sin build ni dependencias — no proponer TypeScript/framework sin que
  se pida.
