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
  ,
  {
    id: "present-perfect",
    emoji: "⏳",
    title: "Present perfect vs past simple",
    html: `
      <p>Both tenses talk about the past. The difference is <b>whether the time is finished or still connected to now</b> — not how long ago it happened.</p>

      <h3>1. Past simple — finished time</h3>
      <p>The time is over, and it's stated or clear from context: <i>yesterday, last week, in 2019, three months ago, when I was at university</i>.</p>
      <p><i>We <b>migrated</b> the database last weekend.</i> · <i>Humans first <b>landed</b> on the Moon in 1969.</i></p>

      <h3>2. Present perfect — connected to now</h3>
      <table>
        <thead><tr><th>Use</th><th>Typical words</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>Unfinished period / situation that continues</td><td>for, since, today, this week, so far</td><td>I<b>'ve worked</b> here since 2020. The server <b>has crashed</b> three times this week.</td></tr>
          <tr><td>Life experience (when doesn't matter)</td><td>ever, never, before, twice</td><td><b>Have</b> you ever <b>used</b> Terraform?</td></tr>
          <tr><td>Recent action with a result now</td><td>just, already, yet</td><td>I<b>'ve just sent</b> it. We <b>haven't finished</b> the tests yet.</td></tr>
        </tbody>
      </table>
      <p>Test: can you add a finished time expression (<i>yesterday, in 2019</i>)? Then it's past simple. ✗ <i>I have seen him yesterday.</i> → ✓ <i>I <b>saw</b> him yesterday.</i></p>

      <h3>3. for vs since</h3>
      <p><b>for</b> + a <b>period</b> (for three years, for ages, for a long time) · <b>since</b> + a <b>starting point</b> (since 2020, since Monday, since I joined).</p>

      <h3>4. been vs gone</h3>
      <p><i>She<b>'s gone</b> to the client's office.</i> = she's there now, not back yet.<br>
         <i>She<b>'s been</b> to the client's office.</i> = she went and came back (experience).</p>

      <h3>5. just / already / yet — and ago</h3>
      <p><b>just</b> and <b>already</b> go between <i>have</i> and the participle: <i>I've <b>already</b> sent it.</i><br>
         <b>yet</b> goes at the end, in questions and negatives: <i>Has the client replied <b>yet</b>?</i><br>
         <b>ago</b> always takes past simple: <i>She left three months <b>ago</b>.</i> (✗ <i>has left … ago</i>)</p>

      <h3>6. Present perfect continuous — duration of an activity</h3>
      <p>For an activity that has been going on until now (often with visible effects): <i>I'm tired because I<b>'ve been debugging</b> this all morning.</i></p>

      <h3>7. Spanish speaker traps</h3>
      <ul>
        <li><b>"Trabajo aquí desde 2020" / "Llevo tres años aquí"</b> → ✗ <i>I work here since 2020</i> / ✗ <i>I am here for three years</i> → ✓ <i>I<b>'ve worked</b> / I<b>'ve been working</b> here since 2020</i>, <i>I<b>'ve been</b> here for three years</i>.</li>
        <li>Spain Spanish uses <i>he hecho</i> for things that happened today ("esta mañana he tenido una reunión"). English only uses present perfect if the period (this morning) isn't finished. At 5 p.m.: <i>I <b>had</b> a meeting this morning.</i></li>
        <li><b>desde hace</b> = <b>for</b>, not <i>since</i>: <i>desde hace dos años</i> → <i>for two years</i>.</li>
      </ul>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>I haven't seen her for two years. (SINCE)</i> → It's two years <b>since I last saw</b> her.</p>
      <p><i>I started working here in 2020. (WORKED)</i> → I <b>have worked here since</b> 2020.</p>
      <p><i>I've never given a presentation in English. (FIRST)</i> → This is the <b>first time I have given</b> a presentation in English.</p>
    `
  },
  {
    id: "verb-patterns",
    emoji: "🔀",
    title: "Verb patterns: -ing vs to + infinitive",
    html: `
      <p>Spanish uses the infinitive after almost every verb (<i>recomiendo <b>hacer</b>, sugiero <b>ir</b>, evito <b>comer</b></i>). English doesn't: <b>each verb demands its own pattern</b>, and translation won't tell you which one.</p>

      <h3>1. Verb + -ing</h3>
      <p>enjoy, suggest, <b>recommend</b>, avoid, admit, deny, finish, mind, practise, imagine, risk, consider, keep (on), give up, put off</p>
      <p><i>I'd recommend <b>using</b> a password manager.</i> · <i>You should avoid <b>deploying</b> on Fridays.</i> · <i>Would you mind <b>sharing</b> your screen?</i></p>
      <p>⚠️ <b>Your fossilised error:</b> ✗ <i>I recommend to use…</i> → ✓ <i>I recommend <b>using</b>…</i> (or <i>I recommend <b>that you use</b>…</i>). Recommend works like <i>suggest</i> — never with <i>to</i>.</p>

      <h3>2. Verb + to + infinitive</h3>
      <p>want, need, decide, hope, plan, promise, agree, refuse, manage, afford, offer, seem, expect, learn</p>
      <p><i>We decided <b>to migrate</b> to Kubernetes.</i> · <i>I can't afford <b>to lose</b> this client.</i></p>

      <h3>3. Same verb, different meaning</h3>
      <p><b>remember to do</b> = don't forget (the action comes after): <i>Remember <b>to lock</b> your laptop.</i><br>
         <b>remember doing</b> = have a memory of it (the action came before): <i>I remember <b>installing</b> it.</i></p>
      <p><b>stop doing</b> = quit: <i>He stopped <b>smoking</b>.</i><br>
         <b>stop to do</b> = pause in order to do something else: <i>I stopped <b>to buy</b> a coffee.</i></p>

      <h3>4. After a preposition → always -ing</h3>
      <p><i>interested <b>in learning</b>, thinking <b>about taking</b>, good <b>at explaining</b>, <b>before leaving</b>, <b>without testing</b></i></p>
      <p><b>Trap: sometimes "to" is a preposition</b>, not part of an infinitive — then -ing follows:<br>
         <i>I look forward <b>to hearing</b> from you.</i> (✗ <i>to hear</i>) · <i>I'm used <b>to working</b> remotely.</i> (= I'm accustomed to it)</p>
      <p>Compare <i>I <b>used to work</b> in an office</i> (past habit, no longer true) with <i>I'm <b>used to working</b> remotely</i> (it's normal for me now).</p>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>"Why don't we postpone the meeting?" she said. (SUGGESTED)</i> → She <b>suggested postponing</b> the meeting.</p>
      <p><i>I'm sorry I didn't reply sooner. (REGRET)</i> → I <b>regret not replying</b> sooner.</p>
    `
  },
  {
    id: "word-formation",
    emoji: "🧩",
    title: "Word formation (Part 3)",
    html: `
      <p><b>Use of English Part 3</b>: a text with 8 gaps, and a word in CAPITALS for each one. You must change its form (noun, adjective, adverb, negative…) to fit the gap. <b>The word almost always has to change</b> — if it fits unchanged, reread the sentence.</p>
      <p>Method: 1) what <b>class of word</b> does the gap need? (after <i>the/a/his</i> → noun; before a noun → adjective; modifying a verb or adjective → adverb) 2) <b>positive or negative</b> meaning? 3) <b>singular or plural</b>? 4) check the <b>spelling</b>.</p>

      <h3>1. Verb → noun ⚠️ your weak point</h3>
      <table>
        <thead><tr><th>Suffix</th><th>Examples</th></tr></thead>
        <tbody>
          <tr><td>-tion / -sion</td><td>implement → implement<b>ation</b>, construct → construc<b>tion</b>, decide → deci<b>sion</b>, describe → descrip<b>tion</b></td></tr>
          <tr><td>-ment</td><td>develop → develop<b>ment</b>, disappoint → disappoint<b>ment</b>, argue → argu<b>ment</b> (drops the e)</td></tr>
          <tr><td>-al</td><td>arrive → arriv<b>al</b> (✗ arrivement), approve → approv<b>al</b>, refuse → refus<b>al</b></td></tr>
          <tr><td>-ance / -ence</td><td>perform → perform<b>ance</b>, exist → exist<b>ence</b></td></tr>
          <tr><td>-er / -or / -ant</td><td>the <b>person</b>: develop<b>er</b>, operat<b>or</b>, assist<b>ant</b> (✗ visitants → <b>visitors</b>)</td></tr>
        </tbody>
      </table>

      <h3>2. Adjective → noun</h3>
      <p><b>-ness</b> willing → willing<b>ness</b>, happy → happi<b>ness</b> · <b>-ity</b> possible → possib<b>ility</b>, responsible → respons<b>ibility</b> · <b>-ce</b> patient → patien<b>ce</b>, important → importan<b>ce</b></p>
      <p>⚠️ <b>-ibility, not -ability</b> when the adjective ends in -ible: respons<b>i</b>bility (✗ responsability, from Spanish <i>responsabilidad</i>).</p>

      <h3>3. Noun/verb → adjective</h3>
      <p><b>-ful</b> (has it) / <b>-less</b> (without it): care<b>ful</b>/care<b>less</b>, use<b>ful</b>/use<b>less</b> · <b>-ous</b> danger<b>ous</b> · <b>-ive</b> effect<b>ive</b> · <b>-y</b> risk<b>y</b> · <b>-able/-ible</b> accept<b>able</b></p>

      <h3>4. Adjective → adverb</h3>
      <p>Add <b>-ly</b>, with spelling changes: <b>y → ily</b> (easy → eas<b>ily</b>) · <b>-le → -ly</b> (incredible → incredib<b>ly</b>) · <b>-ic → -ically</b> (automatic → automat<b>ically</b>) · <b>-l → -lly</b> (careful → careful<b>ly</b>) · <b>-e</b> stays (extreme → extreme<b>ly</b>, complete → complete<b>ly</b>)</p>
      <p>✗ Never make an adverb with -ing (✗ <i>regularing</i> → <i>regular<b>ly</b></i>), and don't add -ly to an adjective before a noun (✗ <i>a localy restaurant</i>).</p>

      <h3>5. Negative prefixes</h3>
      <p><b>im-</b> before m, p, b (<b>im</b>possible) · <b>il-</b> before l (<b>il</b>legal) · <b>ir-</b> before r (<b>ir</b>responsible) · <b>in-</b> elsewhere (<b>in</b>correct) · <b>un-</b> very common (<b>un</b>available) · <b>dis-</b> (<b>dis</b>agree, <b>dis</b>honest)</p>
      <p>Part 3 often needs <b>two changes</b> at once: responsible → <b>ir</b>responsib<b>ility</b>, expect → <b>un</b>expected<b>ly</b>.</p>
    `
  },
  {
    id: "unreal-past",
    emoji: "🌀",
    title: "Unreal past: wish, if only, would rather, it's time",
    html: `
      <p>In these structures a <b>past form doesn't mean past time</b> — it means <b>distance from reality</b> (something imagined, wanted or untrue). It's the same logic as the 2nd and 3rd conditionals, without <i>if</i>.</p>

      <h3>1. wish / if only + past simple — present situation you'd like to change</h3>
      <p><i>I wish I <b>spoke</b> better English in meetings.</i> (I don't) · <i>If only I <b>had</b> more time.</i> · <i>I wish I <b>could</b> come.</i></p>
      <p>With <i>be</i>, <b>were</b> for all persons is more formal and more "exam-safe": <i>I wish I <b>were</b> on the mission.</i> (<i>was</i> is common in speech)</p>

      <h3>2. wish / if only + past perfect — regret about the past</h3>
      <p><i>I wish I <b>had studied</b> harder.</i> · <i>If only we <b>hadn't deployed</b> on Friday!</i></p>
      <p>⚠️ <b>Typical Spanish-speaker error:</b> ✗ <i>I wish I would have studied</i> → ✓ <i>I wish I <b>had studied</b></i>.</p>

      <h3>3. wish + would — annoyance at someone else / something you can't control</h3>
      <p><i>I wish my colleague <b>would stop</b> interrupting me.</i> · <i>I wish it <b>would stop</b> raining.</i><br>
         Not with <i>I</i> as subject: ✗ <i>I wish I would…</i></p>

      <h3>4. would rather</h3>
      <p><b>Same subject</b> → bare infinitive: <i>I'd rather <b>work</b> from home tomorrow.</i><br>
         <b>Different subject</b> → past simple: <i>I'd rather you <b>didn't share</b> the password on Slack.</i></p>

      <h3>5. It's (high / about) time + past simple</h3>
      <p><i>It's time we <b>updated</b> this legacy system.</i> (it should already be happening) · also <i>It's time <b>to update</b>…</i> (neutral)</p>

      <h3>6. as if / as though</h3>
      <p><i>He talks as if he <b>invented</b> the internet.</i> · <i>She looked as if she <b>had seen</b> a ghost.</i> (further back → past perfect)</p>

      <h3>Connection to conditionals</h3>
      <p>2nd: <i>If I <b>had</b> more time, I <b>would</b> learn Rust.</i> (unreal present) · 3rd: <i>If I <b>had known</b> about the outage, I <b>would have called</b> you.</i> (unreal past)</p>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>I regret not studying harder. (WISH)</i> → I <b>wish I had studied</b> harder.</p>
      <p><i>We should really update this system now. (TIME)</i> → It's <b>time we updated</b> this system.</p>
    `
  },
  {
    id: "conditionals",
    emoji: "🔮",
    title: "Conditionals (0, 1, 2, 3, mixed) + unless, in case, if vs because",
    html: `
      <p>A conditional has two parts: the <b>condition</b> (<i>if</i> clause) and the <b>result</b>. The tense you choose shows <b>how real</b> the situation is — not only when it happens. The <i>if</i> clause can go first (then use a comma) or second (no comma).</p>

      <h3>1. The four basic types</h3>
      <table>
        <thead><tr><th>Type</th><th>Meaning</th><th>If clause</th><th>Result</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><b>Zero</b></td><td>always true, rules, facts</td><td>present simple</td><td>present simple</td><td>If the build <b>fails</b>, the pipeline <b>stops</b>.</td></tr>
          <tr><td><b>First</b></td><td>real, possible future</td><td>present simple</td><td>will + infinitive</td><td>If the client <b>approves</b> the budget, we<b>'ll start</b> on Monday.</td></tr>
          <tr><td><b>Second</b></td><td>unreal / unlikely present or future</td><td>past simple</td><td>would + infinitive</td><td>If I <b>had</b> more time, I <b>would learn</b> Rust.</td></tr>
          <tr><td><b>Third</b></td><td>unreal past (didn't happen)</td><td>past perfect</td><td>would have + participle</td><td>If we <b>had tested</b> it, we <b>wouldn't have lost</b> the data.</td></tr>
        </tbody>
      </table>
      <p>In the result you can use other modals instead of <i>will/would</i>: <i>If you finish early, you <b>can</b> leave.</i> · <i>If I'd known, I <b>could have</b> helped.</i></p>

      <h3>2. Never "will" or "would" in the if clause ⚠️</h3>
      <p>Spanish uses the subjunctive here (<i>si <b>aprueba</b>, cuando <b>termine</b></i>). English uses a <b>present tense</b> for the future after <i>if, when, as soon as, unless, before, after, until</i>:</p>
      <p>✗ <i>If the client <b>will approve</b>…</i> → ✓ <i>If the client <b>approves</b>…</i><br>
         ✗ <i>I'll call you when the deployment <b>will finish</b>.</i> → ✓ <i>…when the deployment <b>finishes</b>.</i><br>
         ✗ <i>If we <b>would have tested</b> it…</i> → ✓ <i>If we <b>had tested</b> it…</i></p>

      <h3>3. "If I were you" — advice</h3>
      <p><i>If I <b>were</b> you, I<b>'d ask</b> for a pay rise.</i> <i>Were</i> for every person is the safe exam choice (<i>was</i> is common in speech).</p>

      <h3>4. Mixed conditionals — past and present crossed</h3>
      <p><b>Past condition → present result</b>: if + past perfect, would + infinitive<br>
         <i>If I <b>had accepted</b> the job in London, I <b>would be living</b> there now.</i></p>
      <p><b>Present (permanent) condition → past result</b>: if + past simple, would have + participle<br>
         <i>If I <b>weren't</b> so bad at maths, I <b>would have studied</b> engineering.</i> (I'm still bad at maths)</p>

      <h3>5. Alternatives to "if"</h3>
      <table>
        <thead><tr><th>Word</th><th>Meaning</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><b>unless</b></td><td>if … not</td><td>We won't finish <b>unless</b> we get more people. (= if we don't get)</td></tr>
          <tr><td><b>as long as / provided (that) / providing</b></td><td>only if (a condition you insist on)</td><td>You can work from home <b>as long as</b> you attend the Monday meeting.</td></tr>
          <tr><td><b>in case</b></td><td>as a precaution — <b>not</b> a condition</td><td>Take your charger <b>in case</b> the meeting runs late.</td></tr>
          <tr><td><b>otherwise</b></td><td>if not (starts a new clause)</td><td>Save your work, <b>otherwise</b> you'll lose it.</td></tr>
        </tbody>
      </table>
      <p><b>in case vs if</b>: <i>I'll take an umbrella <b>in case</b> it rains</i> (I take it anyway, just in case) ≠ <i>I'll take an umbrella <b>if</b> it rains</i> (only if it's raining).</p>

      <h3>6. if vs because ⚠️ your diagnosed error</h3>
      <p><b>if</b> = condition — we don't know if it's true or it hasn't happened yet.<br>
         <b>because</b> = reason — it <b>is</b> true, and it explains why.</p>
      <p><i>I'm learning English <b>because</b> my company needs it.</i> (a fact → reason)<br>
         <i>I'll join the call <b>if</b> I finish my meeting in time.</i> (not known yet → condition)</p>
      <p>Test: can you say "and it's true that…"? Then it's <b>because</b>. Spanish "<i>si</i>" and "<i>como</i>" (= since/because: <i>como está abierto a conocer gente…</i>) are easy to mix up here.</p>

      <h3>Link with unreal past</h3>
      <p><i>wish / if only</i> use the same logic as the 2nd and 3rd conditionals — see the <b>Unreal past</b> topic.</p>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>We won't go if it doesn't stop raining. (UNLESS)</i> → We won't go <b>unless it stops</b> raining.</p>
      <p><i>I didn't know you were ill, so I didn't visit you. (HAD)</i> → If I <b>had known you were</b> ill, I would have visited you.</p>
      <p><i>We only failed because of the bad weather. (BEEN)</i> → If it <b>hadn't been for</b> the bad weather, we wouldn't have failed.</p>
    `
  }
];
