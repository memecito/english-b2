// Temas de teoría para la sección "Estudiar". Se edita a mano.
// Fuente: ~/claude/English/theory/*.md y ~/claude/English/plan-estudio.md,
// priorizando los errores ya diagnosticados (memoria del proyecto English).
// Teoría en inglés a propósito (misma regla que el proyecto English: parte
// del entrenamiento para el examen); las trampas de hispanohablante se
// señalan explícitamente. Ejemplos en contexto de trabajo/tecnología para
// que sirvan también para las clases de inglés de la empresa.
// Mismo formato que ingles-ari: cada tema {id, emoji, title, html}.
const TOPICS = [
  {
    id: "relative-clauses",
    emoji: "🔗",
    title: "Relative clauses",
    html: `
      <p>A <b>relative clause</b> adds information about a noun without starting a new sentence. It begins with a <b>relative pronoun</b> (who, which, that, whose…) that points back to the noun.</p>
      <p><i>The engineer <b>who fixed the outage</b> works in Madrid.</i></p>
      <p><b>Why it matters for B2 First:</b> relative pronouns are a classic gap in <b>Part 2 (open cloze)</b>, <i>whose</i> and <i>which</i> appear in <b>Part 4 (key word transformation)</b>, and non-defining clauses are one of the easiest ways to show a B2 range in <b>Writing</b>.</p>

      <h3>1. The relative pronouns</h3>
      <table>
        <thead><tr><th>Pronoun</th><th>Refers to</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>who</td><td>people</td><td>The colleague <b>who</b> trained me has left.</td></tr>
          <tr><td>which</td><td>things, animals, ideas</td><td>The server <b>which</b> crashed is old.</td></tr>
          <tr><td>that</td><td>people or things — <b>defining clauses only</b></td><td>The tool <b>that</b> we use is free.</td></tr>
          <tr><td>whose</td><td>possession (people or things)</td><td>The client <b>whose</b> project failed…</td></tr>
          <tr><td>where</td><td>places</td><td>The office <b>where</b> I work…</td></tr>
          <tr><td>when</td><td>times</td><td>The day <b>when</b> we went live…</td></tr>
          <tr><td>why</td><td>reasons (after <i>the reason</i>)</td><td>The reason <b>why</b> it failed…</td></tr>
          <tr><td>whom</td><td>people, as <b>object</b> — formal</td><td>The manager <b>to whom</b> I reported…</td></tr>
        </tbody>
      </table>

      <h3>2. Defining vs non-defining — the key distinction</h3>
      <p><b>Defining</b>: tells you <i>which one</i>. Without it the sentence is incomplete. <b>No commas.</b> <i>That</i> is allowed.</p>
      <p><i>The laptop <b>that/which</b> I bought last week has stopped working.</i> (which laptop? — this one)</p>
      <p><b>Non-defining</b>: extra information about something already identified. <b>Commas</b> on both sides. <b>Never <i>that</i></b>, and the pronoun can never be left out.</p>
      <p><i>Our CTO<b>, who</b> joined in 2019<b>,</b> is giving the talk.</i> (there's only one CTO — the clause just adds info)</p>
      <p>✗ <i>Our CTO, that joined in 2019, …</i> → ✓ <i>Our CTO, who joined in 2019, …</i></p>

      <h3>3. Leaving out the pronoun</h3>
      <p>In a <b>defining</b> clause you can omit who/which/that when it is the <b>object</b> of the verb (there's another subject after it):</p>
      <p><i>The report (<s>that</s>) you sent me was very clear.</i> — "you" is the subject, so the pronoun can go.</p>
      <p>You <b>cannot</b> omit it when it's the <b>subject</b>: <i>The report <b>that</b> arrived yesterday…</i> (✗ <i>The report arrived yesterday was…</i>)</p>

      <h3>4. "which" for the whole previous idea ⚠️ your recurring error</h3>
      <p><i>Which</i> after a comma can refer to the <b>whole previous clause</b>, not just a noun. Spanish uses <i>lo que</i> here.</p>
      <p><i>The meeting ran two hours over<b>, which</b> meant I missed my train.</i> (= <i>lo cual / lo que</i>)</p>
      <p>✗ <i>…ran two hours over, <b>they</b> made me miss my train.</i> (comma splice — two sentences glued with a comma)<br>
         ✗ <i>…ran two hours over, <b>what</b> meant…</i><br>
         ✗ <i>…ran two hours over, <b>that</b> meant…</i></p>

      <h3>5. "what" = "the thing(s) that"</h3>
      <p><i>What</i> is not used after a noun — it already contains the noun.</p>
      <p><i><b>What</b> I need is a clear deadline.</i> = <i>The thing that I need…</i></p>
      <p>✗ <i>The thing what I need…</i> · ✗ <i>Everything what you said…</i> → ✓ <i>Everything <b>that</b> you said…</i></p>

      <h3>6. Prepositions</h3>
      <p><b>Informal/neutral</b> (spoken, emails to colleagues): preposition at the end.<br>
         <i>The team I work <b>with</b> is great.</i> · <i>That's the client I told you <b>about</b>.</i></p>
      <p><b>Formal</b> (reports, essays): preposition before <i>whom/which</i>. Never before <i>who</i> or <i>that</i>.<br>
         <i>The person <b>to whom</b> you should address the complaint…</i> · <i>The system <b>on which</b> we rely…</i></p>
      <p>After quantifiers: <i>some of whom, most of which, none of which, all of whom</i>.<br>
         <i>We tested three tools, <b>none of which</b> worked offline.</i></p>

      <h3>7. Spanish speaker traps</h3>
      <ul>
        <li><b>No extra pronoun</b> inside the clause: ✗ <i>The laptop which I bought <b>it</b>…</i> (Spanish "el portátil que <b>lo</b> compré" in colloquial speech). The relative pronoun already is the object.</li>
        <li><b>"que" is not always "that"</b>: after a comma it must be <i>who/which</i>.</li>
        <li><b>"cuyo/cuya" = whose</b>, and it does <b>not</b> agree with anything: <i>the company <b>whose</b> offices…</i> (never "whose's" or "who's").</li>
        <li><b>who's ≠ whose</b>: <i>who's</i> = who is / who has.</li>
        <li><b>"en el que / donde"</b>: <i>where</i> or <i>in which</i> — never <i>where in</i>.</li>
      </ul>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>That man's laptop was stolen. (WHOSE)</i> → That's the man <b>whose laptop was</b> stolen.</p>
      <p><i>I work in that building. (WHERE)</i> → That's the building <b>where I work</b>.</p>
    `
  }
];
