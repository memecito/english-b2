// Temas de teoría para la sección "Estudiar". Se edita a mano.
// Fuente: ~/claude/English/theory/*.md y ~/claude/English/plan-estudio.md,
// priorizando los errores ya diagnosticados (memoria del proyecto English).
// Teoría en inglés a propósito (misma regla que el proyecto English: parte
// del entrenamiento para el examen); las trampas de hispanohablante se
// señalan explícitamente. Ejemplos en contexto de trabajo/tecnología para
// que sirvan también para las clases de inglés de la empresa.
// relative-clauses: secciones 1-4 alineadas con la terminología de la clase
// de inglés del trabajo (ref.learnlight.com/grammarguide: relative pronouns
// and relative clauses introduction / relative pronouns and relative adverbs /
// defining and non-defining relative clauses) — parafraseado, ejemplos propios.
// Mismo formato que ingles-ari: cada tema {id, emoji, title, html}.
const TOPICS = [
  {
    id: "relative-clauses",
    emoji: "🔗",
    title: "Relative clauses",
    html: `
      <p class="hint">📎 <b>Work class (Learnlight, "Working with relative clauses")</b> covers sections 1–4. Sections 5–8 are the extra points that B2 First expects.</p>
      <p>A <b>relative clause</b> joins two ideas in one sentence. The sentence then has a <b>main clause</b> + a <b>relative clause</b>, linked by a relative pronoun or adverb that points back to a noun:</p>
      <p><i>I have a colleague. She has a PhD in physics.</i> → <i>I have a colleague <b>who has a PhD in physics</b>.</i></p>
      <p>⚠️ Once you join them, <b>don't repeat the subject</b>: ✗ <i>I have a colleague who <b>she</b> has a PhD…</i> — <i>who</i> is already the subject.</p>
      <p><b>Why it matters for B2 First:</b> relative pronouns are a classic gap in <b>Part 2 (open cloze)</b>, <i>whose</i> and <i>which</i> appear in <b>Part 4 (key word transformation)</b>, and non-defining clauses are one of the easiest ways to show a B2 range in <b>Writing</b>.</p>

      <h3>1. Relative pronouns and relative adverbs</h3>
      <table>
        <thead><tr><th>Relative pronoun</th><th>Refers to</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>who</td><td>people</td><td>The colleague <b>who</b> trained me has left.</td></tr>
          <tr><td>which</td><td>things, animals, ideas</td><td>The server <b>which</b> crashed is old.</td></tr>
          <tr><td>that</td><td>people or things — <b>defining clauses only</b></td><td>The tool <b>that</b> we use is free.</td></tr>
          <tr><td>whose</td><td>possession (people or things)</td><td>The client <b>whose</b> project failed…</td></tr>
          <tr><td>whom</td><td>people, as <b>object</b> — formal</td><td>The manager <b>to whom</b> I reported…</td></tr>
        </tbody>
      </table>
      <table>
        <thead><tr><th>Relative adverb</th><th>Refers to</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>where</td><td>places</td><td>This is the room <b>where</b> we have the stand-up.</td></tr>
          <tr><td>when</td><td>times</td><td>I remember the day <b>when</b> we went live.</td></tr>
          <tr><td>why</td><td>reasons (after <i>the reason</i>)</td><td>That's the reason <b>why</b> we lost the client.</td></tr>
        </tbody>
      </table>
      <p>Careful: in <i>I have no idea <b>why</b> we lost the client</i> there's no noun before <i>why</i> — that's an <b>indirect question</b>, not a relative clause. A relative clause always describes a noun that comes before it (<i>the reason why…</i>).</p>

      <h3>2. Defining relative clauses — identify or define</h3>
      <p>They tell you <b>which one</b> or <b>what something is</b>. Without them the sentence is incomplete. <b>No commas.</b> <i>That</i> can replace who/which.</p>
      <p><b>Definitions</b> — very useful at work to explain jargon:<br>
         <i>A load balancer is a device <b>that</b> distributes traffic between servers.</i><br>
         <i>A stakeholder is a person <b>who</b> has an interest in a project.</i></p>
      <p><b>Identifying</b>: <i>My manager is the woman <b>who</b> is sitting by the window.</i> (which woman? — that one)</p>

      <h3>3. Can I leave out the pronoun? — look at what comes next</h3>
      <p><b>Followed by a verb</b> → it's the <b>subject</b> of the clause → you <b>can't</b> omit it.<br>
         <i>The ticket <b>that</b> <u>is</u> open on my screen…</i> (✗ <i>The ticket is open on my screen…</i> — different meaning)</p>
      <p><b>Followed by a noun or pronoun</b> → it's the <b>object</b> → in a <b>defining</b> clause you <b>can</b> omit it.<br>
         <i>The laptop (<s>that</s>) <u>IT</u> ordered for me has finally arrived.</i> · <i>She's the consultant (<s>who</s>) <u>I</u> told you about.</i></p>

      <h3>4. Non-defining relative clauses — extra information</h3>
      <p>They add information about something <b>already identified</b>. <b>Commas</b> on both sides, <b>never <i>that</i></b>, and the pronoun <b>can never be omitted</b>.</p>
      <p><i>Ms García<b>, who</b> I met at the kick-off<b>,</b> is head of Procurement.</i></p>
      <p><b>Test:</b> remove the clause. If the sentence still makes complete sense (<i>Ms García is head of Procurement</i>), it's non-defining → commas.</p>
      <p>✗ <i>Our CTO, that joined in 2019, …</i> → ✓ <i>Our CTO, who joined in 2019, …</i></p>

      <h3>5. "which" for the whole previous idea ⚠️ your recurring error</h3>
      <p><i>Which</i> after a comma can refer to the <b>whole previous clause</b>, not just a noun. Spanish uses <i>lo que</i> here.</p>
      <p><i>The meeting ran two hours over<b>, which</b> meant I missed my train.</i> (= <i>lo cual / lo que</i>)</p>
      <p>✗ <i>…ran two hours over, <b>they</b> made me miss my train.</i> (comma splice — two sentences glued with a comma)<br>
         ✗ <i>…ran two hours over, <b>what</b> meant…</i><br>
         ✗ <i>…ran two hours over, <b>that</b> meant…</i></p>

      <h3>6. "what" = "the thing(s) that"</h3>
      <p><i>What</i> is not used after a noun — it already contains the noun.</p>
      <p><i><b>What</b> I need is a clear deadline.</i> = <i>The thing that I need…</i></p>
      <p>✗ <i>The thing what I need…</i> · ✗ <i>Everything what you said…</i> → ✓ <i>Everything <b>that</b> you said…</i></p>

      <h3>7. Prepositions</h3>
      <p><b>Informal/neutral</b> (spoken, emails to colleagues): preposition at the end.<br>
         <i>The team I work <b>with</b> is great.</i> · <i>That's the client I told you <b>about</b>.</i></p>
      <p><b>Formal</b> (reports, essays): preposition before <i>whom/which</i>. Never before <i>who</i> or <i>that</i>.<br>
         <i>The person <b>to whom</b> you should address the complaint…</i> · <i>The system <b>on which</b> we rely…</i></p>
      <p>After quantifiers: <i>some of whom, most of which, none of which, all of whom</i>.<br>
         <i>We tested three tools, <b>none of which</b> worked offline.</i></p>

      <h3>8. Spanish speaker traps</h3>
      <ul>
        <li><b>No extra pronoun</b> inside the clause — neither subject nor object: ✗ <i>a friend who <b>he</b> works in Purchasing</i>, ✗ <i>the laptop which I bought <b>it</b></i> (colloquial Spanish "el portátil que <b>lo</b> compré"). The relative pronoun already does that job.</li>
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
      <p><b>forget doing</b> = forget a past memory (mostly <i>I'll never forget…</i>): <i>I'll never forget <b>seeing</b> the launch.</i><br>
         <b>forget to do</b> = not do something you had to do: <i>I forgot <b>to send</b> the invoice.</i></p>
      <p><b>regret doing</b> = be sorry about something you did: <i>I regret <b>not learning</b> English earlier.</i><br>
         <b>regret to do</b> = formal bad news (<i>regret to inform / to say</i>): <i>We regret <b>to inform</b> you that…</i></p>
      <p><b>try doing</b> = experiment, to see if it works: <i>Try <b>restarting</b> the router.</i><br>
         <b>try to do</b> = make an effort (often difficult or failed): <i>I tried <b>to open</b> the file, but it was corrupted.</i></p>
      <p><b>Same meaning with both</b>: <i>begin, start, continue, love, hate, prefer, intend</i> — <i>I prefer <b>working</b> / <b>to work</b> in the morning.</i></p>

      <h3>3b. Verb + object + to-infinitive</h3>
      <p><i>advise, allow, ask, encourage, expect, force, invite, persuade, remind, teach, tell, want, warn</i> + <b>someone + to do</b>:</p>
      <p><i>Our manager encouraged <b>us to take</b> the exam.</i> · <i>IT warned <b>us not to click</b> suspicious links.</i> (negative: <b>not to</b>)</p>
      <p>⚠️ Spanish says <i>quiero <b>que</b> vengas</i>; English has no <i>that</i> clause here: ✗ <i>I want that you come</i> → ✓ <i>I want <b>you to come</b></i>.</p>

      <h3>4. After a preposition → always -ing</h3>
      <p><i>interested <b>in learning</b>, thinking <b>about taking</b>, good <b>at explaining</b>, <b>before leaving</b>, <b>without testing</b></i></p>
      <p><b>Trap: sometimes "to" is a preposition</b>, not part of an infinitive — then -ing follows:<br>
         <i>I look forward <b>to hearing</b> from you.</i> (✗ <i>to hear</i>) · <i>I'm used <b>to working</b> remotely.</i> (= I'm accustomed to it)</p>
      <p>Compare <i>I <b>used to work</b> in an office</i> (past habit, no longer true) with <i>I'm <b>used to working</b> remotely</i> (it's normal for me now).</p>
      <p><b>get used to + -ing / noun</b> = the <b>process</b> of becoming accustomed: <i>I'm <b>getting used to waking</b> up at 6.</i> · <i>It took me months to <b>get used to</b> the open-plan office.</i></p>

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
          <tr><td><b>as long as / so long as / provided (that) / providing</b></td><td>only if (a condition you insist on)</td><td>You can work from home <b>as long as</b> you attend the Monday meeting.</td></tr>
          <tr><td><b>on condition that</b></td><td>only if — more formal (contracts, agreements)</td><td>You can use the data <b>on condition that</b> it stays anonymous.</td></tr>
          <tr><td><b>whether (or not)</b></td><td>one of two possibilities; also in indirect yes/no questions</td><td>Let me know <b>whether</b> you can come <b>or not</b>.</td></tr>
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
  },
  {
    id: "passive",
    emoji: "🔄",
    title: "Passive voice + causative (have/get something done)",
    html: `
      <p>In a <b>passive</b> sentence the thing that <i>receives</i> the action becomes the subject: <i>Someone restarted the server</i> → <i><b>The server was restarted.</b></i></p>

      <h3>1. Form: be + past participle — in every tense</h3>
      <table>
        <thead><tr><th>Tense</th><th>Passive</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>Present simple</td><td>is/are done</td><td>English <b>is spoken</b> in all our meetings.</td></tr>
          <tr><td>Present continuous</td><td>is/are being done</td><td>The new office <b>is being built</b>.</td></tr>
          <tr><td>Past simple</td><td>was/were done</td><td>The server <b>was restarted</b> at 3 a.m.</td></tr>
          <tr><td>Past continuous</td><td>was/were being done</td><td>The tests <b>were being run</b> when the power went off.</td></tr>
          <tr><td>Present perfect</td><td>has/have been done</td><td>The passwords <b>have been changed</b>.</td></tr>
          <tr><td>Past perfect</td><td>had been done</td><td>The ticket <b>had been closed</b>.</td></tr>
          <tr><td>Future / modals</td><td>will / must / should / can <b>be done</b></td><td>The contract <b>must be signed</b> by Friday.</td></tr>
          <tr><td>Past modals</td><td>should / might / must <b>have been done</b></td><td>It <b>should have been tested</b> more carefully.</td></tr>
        </tbody>
      </table>
      <p>After verbs and prepositions that take -ing: <b>being done</b> — <i>I hate <b>being interrupted</b>.</i> After <i>need</i>: <i>It needs <b>to be updated</b></i> = <i>It needs <b>updating</b></i>.</p>

      <h3>2. When to use it</h3>
      <ul>
        <li>The <b>agent</b> (who does it) is unknown, obvious or unimportant: <i>My laptop <b>was stolen</b>.</i></li>
        <li>The <b>action or result</b> matters more than the person: <i>The bug <b>has been fixed</b>.</i></li>
        <li><b>Formal / technical register</b>: reports, incident post-mortems, documentation — and Writing Part 2 reports. <i>The service <b>was restored</b> at 04:15.</i></li>
      </ul>
      <p>Add <b>by + agent</b> only when it's new or important information: <i>The data centre was designed <b>by</b> a team of Danish engineers.</i></p>

      <h3>3. Verbs with two objects</h3>
      <p><i>They gave me access.</i> → <i><b>I was given</b> access.</i> (more natural) or <i>Access <b>was given to me</b>.</i></p>

      <h3>4. "It is said that…" / "He is said to…" — reporting passive</h3>
      <p>With <i>say, believe, think, know, expect, report, claim, consider</i> — it lets the writer <b>distance themselves</b> from the opinion (typical of news and reports):</p>
      <p><i><b>It is said that</b> the company is going to be sold.</i><br>
         <i>The company <b>is said to be</b> in trouble.</i> (present)<br>
         <i>The CEO <b>is believed to have resigned</b> last week.</i> (past → <b>to have + participle</b>)</p>
      <p>This is how English translates Spanish <b>"se dice que / se cree que"</b> — a Part 4 classic.</p>

      <h3>5. Causative: have / get something done</h3>
      <p>Someone else does a job <b>for you</b> (usually a service you pay for). Structure: <b>have/get + object + past participle</b>.</p>
      <p><i>I<b>'m having</b> my laptop <b>repaired</b>.</i> · <i>We <b>had</b> the office <b>painted</b>.</i> · <i>I need to <b>get</b> my eyes <b>tested</b>.</i> (<i>get</i> is more informal)</p>
      <p>Also for <b>bad experiences</b> that happen to you: <i>She <b>had</b> her phone <b>stolen</b> at the conference.</i></p>
      <p><b>Active causative</b> — you say <i>who</i> does it:<br>
         <b>have someone do</b> (no <i>to</i>): <i>The manager <b>had the intern check</b> the logs.</i><br>
         <b>get someone to do</b> (with <i>to</i>): <i>I'll <b>get IT to reset</b> my password.</i></p>

      <h3>6. Spanish speaker traps</h3>
      <ul>
        <li><b>"Me corté el pelo"</b> (at the hairdresser's) → <i>I <b>had</b> my hair <b>cut</b></i>. <i>I cut my hair</i> means you did it yourself!</li>
        <li><b>"Me robaron el portátil"</b> → <i>My laptop was stolen</i> / <i>I had my laptop stolen</i>. ✗ <i>I was stolen</i> (that means someone stole <b>you</b>).</li>
        <li><b>"Se habla inglés"</b> → <i>English <b>is spoken</b></i>. Spanish <i>se</i> is often an English passive.</li>
        <li><b>Intransitive verbs have no passive</b>: <i>happen, occur, arrive, die, appear, disappear</i>. ✗ <i>The accident was happened</i> → ✓ <i>The accident <b>happened</b></i>.</li>
        <li><b>was born</b> is always passive: ✗ <i>I born in 1985</i> → ✓ <i>I <b>was born</b> in 1985</i>.</li>
      </ul>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>People say that the new CEO is very strict. (SAID)</i> → The new CEO <b>is said to be</b> very strict.</p>
      <p><i>A mechanic is going to repair my car tomorrow. (HAVE)</i> → I'm going to <b>have my car repaired</b> tomorrow.</p>
      <p><i>They haven't told us about the changes yet. (BEEN)</i> → We <b>haven't been told about</b> the changes yet.</p>
    `
  },
  {
    id: "modals",
    emoji: "🧭",
    title: "Modals: obligation, permission, ability, advice, requests",
    html: `
      <p class="hint">📎 Matches the work class (Learnlight): modals for obligation, prohibition, permission, ability, advice, offers and requests, past modals.</p>
      <p><b>Modal verbs</b> (can, could, may, must, should, will, would, shall, might) are followed by the <b>bare infinitive</b> — no <i>to</i>, no <i>-s</i>, no <i>do</i> in questions.</p>
      <p>✗ <i>You must <b>to</b> sign</i> · ✗ <i>She can<b>s</b></i> · ✗ <i><b>Do</b> I must…?</i> → ✓ <i>You must sign · She can · Must I…?</i></p>
      <p><i>Have to, need to, be able to, be allowed to</i> are <b>not</b> true modals: they change form (<i>has to, had to, will be able to</i>) and use <i>do</i> in questions (<i>Do I have to…?</i>). That's why they're used for the tenses that modals don't have.</p>

      <h3>1. Obligation and necessity</h3>
      <p><b>must</b> — the speaker feels it's necessary, or written rules: <i>We must hire more staff.</i> · <i>Visitors must sign in.</i><br>
         <b>have to</b> — obligation from outside (rules, circumstances): <i>I have to submit the report by Friday — it's a department rule.</i><br>
         <b>need to</b> — it's necessary: <i>I need to renew my certificate.</i></p>
      <p>Past: <b>had to</b> (never "musted"): <i>I had to work weekends in my last job.</i> · Future: <b>will have to</b>.</p>

      <h3>2. mustn't ≠ don't have to ⚠️ Spanish speaker trap</h3>
      <table>
        <thead><tr><th>Form</th><th>Meaning</th><th>Spanish</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><b>mustn't / can't</b></td><td>it's prohibited</td><td>no debes / no puedes</td><td>You <b>mustn't</b> share your password.</td></tr>
          <tr><td><b>don't have to / don't need to / needn't</b></td><td>it isn't necessary (you can if you want)</td><td>no tienes que / no hace falta</td><td>You <b>don't have to</b> wear a suit.</td></tr>
        </tbody>
      </table>
      <p><b>needn't have done</b> = you did it, but it wasn't necessary: <i>You <b>needn't have brought</b> your laptop — we had spare ones.</i></p>

      <h3>3. Permission and prohibition</h3>
      <p><b>can</b> (neutral) · <b>could</b> (more polite, to ask) · <b>may</b> (formal) · <b>be allowed to</b> (rules; works in every tense).</p>
      <p><i><b>Could</b> I ask you a question?</i> · <i>Staff <b>may not</b> use the lifts during a fire alarm.</i> · <i>Employees <b>are allowed to</b> work from home on Fridays.</i></p>
      <p>Past: <b>could</b> for general permission (<i>In my last job I <b>could</b> wear jeans</i>), but <b>was allowed to</b> for one specific occasion: <i>She <b>was allowed to</b> leave early yesterday.</i></p>

      <h3>4. Ability</h3>
      <p>Present: <b>can</b> / <b>be able to</b> (more formal). Future: <b>will be able to</b> — ✗ <i>will can</i>.<br>
         Past general ability: <b>could</b> — <i>I <b>could</b> code when I was twelve.</i><br>
         Past success on one occasion: <b>was able to / managed to</b> — <i>The server crashed, but we <b>managed to</b> restore it.</i> (negative <i>couldn't</i> is fine in both cases)<br>
         Ability not used: <b>could have + participle</b> — <i>I <b>could have explained</b> it, but I didn't have time.</i></p>

      <h3>5. Advice and criticism</h3>
      <p><b>could</b> = a suggestion, one option: <i>You <b>could</b> ask Ana.</i><br>
         <b>should / ought to</b> = the right thing to do: <i>You <b>ought to</b> inform HR.</i> (<i>ought to</i> mostly in positive sentences)<br>
         <b>had better ('d better)</b> = strong advice + a warning of a bad result: <i>You<b>'d better</b> save your work — the system is restarting.</i> · <i>We<b>'d better not</b> tell John.</i></p>
      <p><b>should have / shouldn't have + participle</b> = regret or criticism about the past:<br>
         <i>We <b>should have tested</b> the update.</i> (we didn't) · <i>I <b>shouldn't have sent</b> that email.</i> (I did)</p>

      <h3>6. Offers, suggestions and requests — work phrases</h3>
      <p><b>Offers</b>: <i><b>Shall</b> I / <b>Can</b> I help you?</i> · <b>Suggestions</b>: <i><b>Shall</b> we discuss it over lunch?</i> = <i><b>Let's</b> discuss it…</i> (less formal)</p>
      <p><b>Requests</b>, from less to more polite: <i>Can you…? → Could you…? / Would you…? → Would you mind + <b>-ing</b>?</i></p>
      <p>⚠️ <b>Would you mind…? / Do you mind if…?</b> — the answer <b>"Not at all"</b> or <b>"No, go ahead"</b> means <b>yes, I'm happy to</b> (literally "I don't mind"). Saying "Yes" means you <i>do</i> mind!</p>
      <p>Polite refusal: <i>I'd rather not, if you don't mind.</i> · <i>Actually, I'd prefer not to.</i></p>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>It isn't necessary to bring your laptop. (HAVE)</i> → You <b>don't have to bring</b> your laptop.</p>
      <p><i>It was a mistake to change the date. (SHOULD)</i> → We <b>shouldn't have changed</b> the date.</p>
      <p><i>I strongly advise you to leave now. (BETTER)</i> → You <b>had better leave</b> now.</p>
      <p><i>Is it OK if I open the window? (MIND)</i> → <b>Do you mind if I open</b> the window?</p>
    `
  },
  {
    id: "modals-deduction",
    emoji: "🕵️",
    title: "Modals of deduction: must, might, can't (have)",
    html: `
      <p class="hint">📎 Matches the work class (Learnlight): modals for deduction and supposition (present and past), modals for prediction.</p>
      <p>We use modals to say <b>how sure we are</b> about something we don't know for certain, based on evidence.</p>

      <h3>1. The certainty scale</h3>
      <table>
        <thead><tr><th>How sure?</th><th>Present</th><th>Past</th></tr></thead>
        <tbody>
          <tr><td>~99% <b>yes</b></td><td><b>must</b> be / must be doing</td><td><b>must have</b> + participle</td></tr>
          <tr><td>possible</td><td><b>might / may / could</b> be</td><td><b>might / may / could have</b> + participle</td></tr>
          <tr><td>possible <b>not</b></td><td><b>might not / may not</b> be</td><td><b>might not / may not have</b> + participle</td></tr>
          <tr><td>~99% <b>no</b></td><td><b>can't / couldn't</b> be</td><td><b>can't / couldn't have</b> + participle</td></tr>
        </tbody>
      </table>
      <p><i>Her calendar says "Client call 10–11" and it's 10:30. She <b>must be</b> on the call.</i><br>
         <i>He <b>can't be</b> the new CTO — he looks about nineteen!</i><br>
         <i>The office is dark. Everyone <b>must have gone</b> home.</i><br>
         <i>I can't find my badge. I <b>might have left</b> it in the car.</i></p>

      <h3>2. The two big traps</h3>
      <ul>
        <li><b>The opposite of <i>must</i> (deduction) is <i>can't</i>, not <i>mustn't</i>.</b> ✗ <i>He mustn't be at home</i> → ✓ <i>He <b>can't</b> be at home.</i> (<i>mustn't</i> = prohibition)</li>
        <li><b>couldn't</b> = 99% no. For "maybe not" use <b>might not / may not</b>: <i>They <b>might not have seen</b> the message.</i> (✗ <i>could not have</i> with this meaning)</li>
      </ul>

      <h3>3. Spanish speaker trap: conjecture with future and conditional</h3>
      <p>Spanish often guesses with the <b>future</b> or <b>conditional</b> tense. English uses a modal:</p>
      <ul>
        <li><i>"Estará en una reunión"</i> → <i>She <b>must be / might be</b> in a meeting.</i> (✗ <i>She will be in a meeting</i>)</li>
        <li><i>"Habrá perdido el tren"</i> → <i>He <b>must have / might have missed</b> the train.</i></li>
        <li><i>"Serían las cinco"</i> → <i>It <b>must have been</b> about five.</i></li>
        <li><i>"Debe de estar en casa"</i> (deduction) → <i>He <b>must be</b> at home.</i> · <i>"No puede ser él"</i> → <i>It <b>can't be</b> him.</i></li>
      </ul>

      <h3>4. Deduction vs criticism — same shape, different meaning</h3>
      <p><i>He <b>must have</b> forgotten.</i> = I'm almost sure he forgot (deduction).<br>
         <i>He <b>should have</b> remembered.</i> = it was his duty, and he didn't (criticism) — see the <b>Modals</b> topic.</p>

      <h3>5. Predictions about the future</h3>
      <p><b>will / won't</b> = almost certain: <i>Don't worry, the demo <b>will</b> go fine.</i><br>
         <b>may / might / could</b> = possible: <i>It <b>might</b> rain later.</i><br>
         <b>going to</b> = there's evidence now: <i>Look at those clouds — it's <b>going to</b> rain.</i></p>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>I'm sure he forgot about the meeting. (MUST)</i> → He <b>must have forgotten</b> about the meeting.</p>
      <p><i>It's impossible that she read my email — she's on a plane. (CAN'T)</i> → She <b>can't have read</b> my email.</p>
      <p><i>Perhaps they missed the train. (MIGHT)</i> → They <b>might have missed</b> the train.</p>
    `
  },
  {
    id: "comparison",
    emoji: "⚖️",
    title: "Comparison: comparatives, superlatives, as…as",
    html: `
      <p class="hint">📎 Academy class (2026-10-07): comparisons. Also in the work class (Learnlight: comparatives, superlatives, comparative/superlative adverbs).</p>

      <h3>1. Forming comparatives and superlatives</h3>
      <table>
        <thead><tr><th>Adjective</th><th>Rule</th><th>Examples</th></tr></thead>
        <tbody>
          <tr><td>1 syllable</td><td>-er / the -est</td><td>fast → fast<b>er</b> → the fast<b>est</b></td></tr>
          <tr><td>… ending in -e</td><td>+ r / + st</td><td>late → late<b>r</b> → the late<b>st</b></td></tr>
          <tr><td>… consonant + vowel + consonant</td><td>double the consonant</td><td>big → bi<b>gg</b>er, hot → ho<b>tt</b>est</td></tr>
          <tr><td>2 syllables ending in -y</td><td>y → i + -er / -est</td><td>easy → eas<b>ier</b> → the eas<b>iest</b>, busy → busier</td></tr>
          <tr><td>other 2+ syllables</td><td>more / the most</td><td>useful → <b>more</b> useful → the <b>most</b> useful</td></tr>
          <tr><td>irregular</td><td>—</td><td>good → <b>better</b> → <b>best</b> · bad → <b>worse</b> → <b>worst</b> · far → <b>further/farther</b> → <b>furthest</b> · little → <b>less</b> → <b>least</b> · much/many → <b>more</b> → <b>most</b></td></tr>
        </tbody>
      </table>
      <p>✗ <i>more easier</i>, ✗ <i>more better</i>, ✗ <i>the most fast</i> — never use both forms at once.</p>
      <p><b>Adverbs</b> work the same way: <i>work <b>harder</b>, arrive <b>earlier</b>, speak <b>more slowly</b>, do it <b>better</b></i> (✗ <i>more fast</i>).</p>

      <h3>2. than + …</h3>
      <p><i>She's older <b>than me</b>.</i> (informal, normal in speech) = <i>She's older <b>than I am</b>.</i> (more formal) — ✗ <i>than I</i> on its own sounds odd.</p>

      <h3>3. How big is the difference? — modifiers</h3>
      <p><b>Big</b>: <i><b>much / far / a lot / considerably</b> more complicated</i> · <b>Small</b>: <i><b>slightly / a bit / a little</b> faster</i> · <b>Surprise</b>: <i><b>even</b> worse</i></p>
      <p>✗ <i><b>very</b> bigger</i> → ✓ <i><b>much</b> bigger</i>. With superlatives: <i><b>by far</b> the best</i>.</p>

      <h3>4. as … as ⚠️ your diagnosed error</h3>
      <p>For <b>equal</b> amounts or degrees, English uses <b>as + adjective/adverb + as</b> — never <i>than</i>:</p>
      <p><i>I hope you enjoy it <b>as much as</b> I did.</i> (✗ <i>than I did</i> — Spanish <i>tanto como</i>)<br>
         <i>The new office isn't <b>as / so</b> big <b>as</b> the old one.</i> (= it's smaller)<br>
         <i>This server is <b>twice as</b> fast <b>as</b> the old one.</i> · <i>We got <b>as many</b> complaints <b>as</b> last month.</i></p>
      <p><b>the same as</b> (✗ <i>the same than</i>, ✗ <i>the same that</i>): <i>My laptop is <b>the same as</b> yours.</i></p>

      <h3>5. Double comparatives</h3>
      <p><b>the + comparative…, the + comparative</b> — one change causes another:<br>
         <i><b>The more</b> you practise, <b>the easier</b> it gets.</i> · <i><b>The sooner</b> we start, <b>the earlier</b> we'll finish.</i></p>
      <p><b>comparative + and + comparative</b> — continuous change:<br>
         <i>Cloud costs are getting <b>higher and higher</b>.</i> · <i>English is <b>more and more</b> important in my job.</i></p>

      <h3>6. Superlatives — the details</h3>
      <ul>
        <li><b>the</b> is needed: <i>It's <b>the</b> fastest option.</i></li>
        <li><b>in</b> + place or group (<i>the best engineer <b>in</b> the team</i>), <b>of</b> + a period or number (<i>the best day <b>of</b> my life, the cheapest <b>of</b> the three</i>).</li>
        <li><b>+ present perfect + ever</b>: <i>It's the best talk I<b>'ve ever seen</b>.</i></li>
        <li><b>one of the + superlative + PLURAL noun</b> ⚠️ (your plural agreement error): <i>one of the best <b>developers</b></i> (✗ <i>developer</i>).</li>
      </ul>

      <h3>7. less / fewer</h3>
      <p><b>less</b> + uncountable (<i>less time, less money</i>) · <b>fewer</b> + plural countable (<i>fewer bugs, fewer meetings</i>). In speech <i>less bugs</i> is common, but in the exam use <b>fewer</b>.</p>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>The old office was bigger than this one. (AS)</i> → This office <b>isn't as big as</b> the old one.</p>
      <p><i>I've never seen such a good talk. (EVER)</i> → It's the <b>best talk I've ever</b> seen.</p>
      <p><i>If you practise more, it becomes easier. (THE)</i> → <b>The more you practise, the</b> easier it becomes.</p>
      <p><i>Prices keep going up. (MORE)</i> → Prices are getting <b>more and more</b> expensive.</p>
    `
  },
  {
    id: "so-such",
    emoji: "🎯",
    title: "Linkers: so, so that, so…that, such (a)…that",
    html: `
      <p class="hint">📎 Academy class (week of 2026-10-05): linkers so, so + that, so + adjective, such + a/an + adjective + noun.</p>

      <h3>1. so = result (por eso / así que)</h3>
      <p><i>The server was down, <b>so</b> we worked offline.</i> — cause first, then <b>so</b> + result (usually after a comma).</p>
      <p>Compare with <b>because</b>, which introduces the <b>cause</b> (your diagnosed <i>if / because</i> confusion lives here too):<br>
         <i>We worked offline <b>because</b> the server was down.</i> = <i>The server was down, <b>so</b> we worked offline.</i></p>

      <h3>2. so that = purpose (para que / para)</h3>
      <p><b>so that</b> + subject + <b>can / could / will / would</b>: <i>I left early <b>so that</b> I <b>could</b> catch the train.</i> · <i>Send me the logs <b>so that</b> I <b>can</b> check them.</i></p>
      <p>In informal English <i>that</i> is often dropped: <i>Send me the logs <b>so</b> I can check them.</i> The modal verb tells you it's purpose, not result.</p>
      <p>⚠️ Spanish trap: <i>para que + subjuntivo</i> → <b>so that + can/could</b>, never ✗ <i>for that I can</i>, ✗ <i>for I can</i>.</p>

      <h3>3. so + adjective / adverb (tan)</h3>
      <p><i>The meeting was <b>so long</b>.</i> · <i>He types <b>so fast</b>.</i> — no noun after the adjective.</p>
      <p><b>so + much / many / few / little + noun</b> (tanto/s): <i>There were <b>so many</b> bugs.</i> · <i>We had <b>so little</b> time.</i> (✗ <i>such many bugs</i>)</p>

      <h3>4. such + (a/an) + adjective + noun (tan… / un… tan…)</h3>
      <table>
        <thead><tr><th>Noun</th><th>Pattern</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>singular countable</td><td><b>such a/an</b> + adj + noun</td><td><i>It was <b>such a</b> long meeting.</i> · <i>She's <b>such an</b> efficient manager.</i></td></tr>
          <tr><td>plural</td><td><b>such</b> + adj + noun (no <i>a</i>)</td><td><i>They're <b>such</b> slow computers.</i></td></tr>
          <tr><td>uncountable</td><td><b>such</b> + adj + noun (no <i>a</i>)</td><td><i>She gave me <b>such</b> useful advice.</i> (✗ <i>such an advice</i> — <i>advice</i> is uncountable)</td></tr>
          <tr><td>quantity</td><td><b>such a lot of</b> + noun</td><td><i>We had <b>such a lot of</b> work.</i> (= <i>so much work</i>)</td></tr>
        </tbody>
      </table>
      <p>Word order ⚠️: <b>such a</b> long meeting (✗ <i>a such long meeting</i>, ✗ <i>so a long meeting</i>). The noun decides: <b>noun → such</b>, <b>no noun → so</b>.</p>

      <h3>5. so / such … that = result (tan… que)</h3>
      <p><i>The meeting was <b>so</b> long <b>that</b> I fell asleep.</i> · <i>It was <b>such a</b> long meeting <b>that</b> I fell asleep.</i></p>
      <p><i>that</i> can be dropped in speech (<i>It was so long I fell asleep</i>), but write it in the exam.</p>
      <p><b>so…that</b> (result) ≠ <b>so that</b> (purpose): <i>I was <b>so</b> tired <b>that</b> I went home</i> (consecuencia) vs <i>I went home <b>so that</b> I could rest</i> (finalidad).</p>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>The presentation was so boring that people left. (SUCH)</i> → It was <b>such a boring presentation</b> that people left.</p>
      <p><i>It was such bad weather that the launch was postponed. (SO)</i> → The weather was <b>so bad that</b> the launch was postponed.</p>
      <p><i>I'll write it down in order not to forget it. (THAT)</i> → I'll write it down <b>so that I won't</b> forget it.</p>
    `
  },
  {
    id: "phrasal-verbs",
    emoji: "🧗",
    title: "Phrasal verbs & collocations (take up, have a go, turn up…)",
    html: `
      <p class="hint">📎 Academy class (week of 2026-10-05): take up, have a go, turn up, get used to, take risks, take part in, keep a promise. Only some are phrasal verbs — the rest are <b>collocations</b> (fixed word partners). Both are tested in Part 1 and Part 2.</p>

      <h3>1. Meanings</h3>
      <table>
        <thead><tr><th>Expression</th><th>Meaning</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><b>take up</b> sth</td><td>start a hobby or activity (empezar a practicar)</td><td><i>I <b>took up</b> chess during lockdown.</i></td></tr>
          <tr><td><b>take up</b> time/space</td><td>occupy (ocupar)</td><td><i>Meetings <b>take up</b> half my day.</i></td></tr>
          <tr><td><b>have a go</b> (at sth / at doing)</td><td>try something, often for the first time (intentarlo, probar)</td><td><i>I've never used Terraform, but I'll <b>have a go</b>.</i> · also <i><b>give it a go</b></i></td></tr>
          <tr><td><b>turn up</b></td><td>arrive / appear, often late or unexpectedly (= <i>show up</i>; aparecer, presentarse)</td><td><i>Only five people <b>turned up</b> to the demo.</i></td></tr>
          <tr><td><b>get used to</b> + -ing / noun</td><td>become accustomed (acostumbrarse a)</td><td><i>I'm <b>getting used to working</b> from home.</i></td></tr>
          <tr><td><b>take a risk / take risks</b></td><td>arriesgarse, correr un riesgo</td><td><i>Start-ups have to <b>take risks</b>.</i></td></tr>
          <tr><td><b>take part in</b></td><td>participate in (participar en)</td><td><i>Our team <b>took part in</b> a hackathon.</i></td></tr>
          <tr><td><b>keep a promise</b></td><td>cumplir una promesa</td><td><i>He always <b>keeps his promises</b>.</i></td></tr>
        </tbody>
      </table>
      <p>⚠️ Spanish traps: <b>have <u>a</u> go</b> (the <i>a</i> is compulsory) · <b>take</b> a risk (✗ <i>make / do a risk</i>) · take part <b>in</b> (✗ <i>take part of</i>, ✗ <i>participate on</i>) · <b>make</b> a promise = prometer, <b>keep</b> a promise = cumplirla, <b>break</b> a promise = no cumplirla (✗ <i>do a promise</i>).</p>

      <h3>2. get used to vs be used to vs used to</h3>
      <table>
        <thead><tr><th>Form</th><th>Meaning</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><b>used to</b> + infinitive</td><td>past habit (solía)</td><td><i>I <b>used to work</b> in a bank.</i></td></tr>
          <tr><td><b>be used to</b> + -ing / noun</td><td>state: already accustomed (estar acostumbrado)</td><td><i>I'<b>m used to working</b> late.</i></td></tr>
          <tr><td><b>get used to</b> + -ing / noun</td><td>process: becoming accustomed (acostumbrarse)</td><td><i>It took me months to <b>get used to</b> the new IDE.</i></td></tr>
        </tbody>
      </table>
      <p>In <i>be/get used to</i> the <b>to</b> is a preposition, so it takes <b>-ing</b>: ✗ <i>I'm getting used to work from home</i> → ✓ <i>used to <b>working</b></i>. (Same pattern as <i>look forward to <b>hearing</b></i> — see Verb patterns.)</p>

      <h3>3. Grammar: where does the object go?</h3>
      <table>
        <thead><tr><th>Type</th><th>Rule</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>intransitive (no object)</td><td>nothing after the particle</td><td><i>He <b>turned up</b> late.</i></td></tr>
          <tr><td>separable</td><td>noun: either position · <b>pronoun: always in the middle</b></td><td><i>take up chess</i> = <i>take chess up</i> · <i>take <b>it</b> up</i> ✓ / ✗ <i>take up it</i></td></tr>
          <tr><td>inseparable / with preposition</td><td>object always after the whole verb</td><td><i>take part <b>in it</b></i> · <i>get used to <b>it</b></i></td></tr>
        </tbody>
      </table>
      <p>Note: <i>turn up</i> also has a separable meaning, "increase the volume": <i>Turn <b>it</b> up!</i></p>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>I started playing the guitar last year. (UP)</i> → I <b>took up the guitar</b> last year.</p>
      <p><i>Why don't you try it? (GO)</i> → Why don't you <b>have a go</b>?</p>
      <p><i>Twenty people participated in the workshop. (PART)</i> → Twenty people <b>took part in</b> the workshop.</p>
      <p><i>He did what he had promised. (KEPT)</i> → He <b>kept his promise</b>.</p>
      <p><i>Working nights is still strange for me. (USED)</i> → I'm still <b>not used to working</b> nights.</p>
    `
  },
  {
    id: "get",
    emoji: "🔑",
    title: "GET: one verb, many meanings",
    html: `
      <p class="hint">📎 Academy class (week of 2026-10-05): "Are you getting + noun?" and <i>get used to</i>. <b>get</b> is the most frequent "multi-meaning" verb in spoken English — what follows it decides the meaning.</p>

      <h3>1. The pattern decides the meaning</h3>
      <table>
        <thead><tr><th>get + …</th><th>Meaning</th><th>Examples</th></tr></thead>
        <tbody>
          <tr><td><b>noun</b></td><td>obtain, receive, buy, fetch (conseguir, recibir, comprar, traer)</td><td><i>She <b>got a new job</b>.</i> · <i>Did you <b>get my email</b>?</i> · <i>I'll <b>get you a coffee</b>.</i> · <i><b>Are you getting a new laptop</b>?</i></td></tr>
          <tr><td><b>adjective</b></td><td>become, change state (ponerse, volverse)</td><td><i>It's <b>getting dark</b>.</i> · <i>Get <b>ready</b>!</i> · <i>Don't get <b>angry</b>.</i> · <i>Are you <b>getting tired</b>?</i></td></tr>
          <tr><td><b>comparative</b></td><td>change gradually</td><td><i>Your English is <b>getting better</b>.</i> · <i>The servers are getting <b>slower and slower</b>.</i></td></tr>
          <tr><td><b>past participle</b></td><td>something happens to you (passive with get) / reflexive actions</td><td><i>He <b>got fired</b>.</i> · <i>She <b>got promoted</b>.</i> · <i>We <b>got lost</b>.</i> · <i>get <b>married</b> / <b>dressed</b> / <b>started</b></i></td></tr>
          <tr><td><b>place / preposition</b></td><td>move, arrive (llegar, subir, bajar)</td><td><i>get <b>to</b> work</i> · <i>get <b>home</b></i> · <i>get <b>there</b></i> · <i>get <b>on/off</b> the bus</i> · <i>get <b>in/out of</b> a car</i></td></tr>
          <tr><td><b>sb + to-infinitive</b></td><td>persuade / arrange (causative)</td><td><i>I <b>got the intern to check</b> the logs.</i></td></tr>
          <tr><td><b>sth + past participle</b></td><td>arrange for someone to do it (causative)</td><td><i>We need to <b>get the server fixed</b>.</i> (see Passive)</td></tr>
          <tr><td><b>used to + -ing</b></td><td>become accustomed (acostumbrarse)</td><td><i>Are you <b>getting used to working</b> nights?</i> (see Phrasal verbs)</td></tr>
        </tbody>
      </table>
      <p>So <b>"Are you getting + noun?"</b> normally = "Are you going to obtain/buy/receive…?": <i>Are you getting a new car?</i> · <i>Are you getting a bonus this year?</i> — the present continuous here talks about a <b>future plan</b>.</p>

      <h3>2. Spanish traps</h3>
      <ul>
        <li><b>get home / get there</b> — no <i>to</i> (✗ <i>get to home</i>), but <b>get to work / to the office</b>.</li>
        <li><b>get married</b> = casarse · <b>marry</b> sb (✗ <i>marry with</i>, ✗ <i>get married with</i> → ✓ <i>get married <b>to</b></i>).</li>
        <li><b>get on / off</b> buses, trains, planes · <b>get in / out of</b> cars and taxis.</li>
        <li><b>have got</b> (BrE) = have (possession): <i>I've <b>got</b> two monitors.</i> — present meaning, not past.</li>
      </ul>

      <h3>3. Common phrasal verbs with get (B2)</h3>
      <table>
        <thead><tr><th>Phrasal verb</th><th>Meaning</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><b>get on (well) with</b> sb</td><td>llevarse bien con</td><td><i>I <b>get on well with</b> my new team.</i></td></tr>
          <tr><td><b>get over</b> sth</td><td>superar, recuperarse de</td><td><i>It took her weeks to <b>get over</b> the failed launch.</i></td></tr>
          <tr><td><b>get back to</b> sb</td><td>volver a contactar, responder más tarde</td><td><i>I'll <b>get back to you</b> tomorrow.</i></td></tr>
          <tr><td><b>get through</b> sth</td><td>acabar / superar algo difícil; contactar por teléfono</td><td><i>We <b>got through</b> the audit.</i> · <i>I couldn't <b>get through</b> to support.</i></td></tr>
          <tr><td><b>get by</b></td><td>apañárselas</td><td><i>I <b>get by</b> in German.</i></td></tr>
        </tbody>
      </table>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>My English is improving. (GETTING)</i> → My English is <b>getting better</b>.</p>
      <p><i>I persuaded IT to reset my password. (GOT)</i> → I <b>got IT to reset</b> my password.</p>
      <p><i>We have a good relationship with the client. (ON)</i> → We <b>get on well with</b> the client.</p>
      <p><i>She's recovered from the shock. (GOT)</i> → She's <b>got over</b> the shock.</p>
    `
  },
  {
    id: "nouns-articles",
    emoji: "📦",
    title: "Nouns, quantifiers & articles",
    html: `
      <p class="hint">Learnlight (work class): countable and uncountable nouns, a few / a little, much / many, too much / too many, enough / plenty of, articles. Includes your diagnosed <b>plural agreement</b> error.</p>

      <h3>1. Uncountable nouns that are countable in Spanish ⚠️</h3>
      <p>No <i>a/an</i>, no plural, singular verb:</p>
      <p><b>advice, information, news, feedback, research, progress, knowledge, evidence, equipment, furniture, luggage, software, hardware, homework, work, accommodation, traffic, weather</b></p>
      <p>✗ <i>an advice</i>, ✗ <i>informations</i>, ✗ <i>the news are</i> → ✓ <i><b>some</b> advice / <b>a piece of</b> advice</i>, ✓ <i>information</i>, ✓ <i>The news <b>is</b> good.</i></p>
      <p>To count them: <b>a piece of</b> advice / information / equipment / software · <b>an item of</b> news.</p>
      <p><b>work</b> (uncountable) = trabajo en general; <b>a job</b> (countable) = un empleo: <i>I've got a lot of <b>work</b>.</i> · <i>She got a new <b>job</b>.</i> (✗ <i>a work</i>)</p>

      <h3>2. Nouns that can be both</h3>
      <table>
        <thead><tr><th>Uncountable</th><th>Countable</th></tr></thead>
        <tbody>
          <tr><td><i>She has a lot of <b>experience</b>.</i> (experiencia profesional)</td><td><i>The trip was an amazing <b>experience</b>.</i> (una vivencia)</td></tr>
          <tr><td><i>I don't have <b>time</b>.</i></td><td><i>I've told you three <b>times</b>.</i> (veces)</td></tr>
          <tr><td><i>The printer needs <b>paper</b>.</i></td><td><i>I read it in a <b>paper</b>.</i> (periódico) / a research paper</td></tr>
          <tr><td><i>There's no <b>room</b> for a desk.</i> (espacio)</td><td><i>a meeting <b>room</b></i></td></tr>
        </tbody>
      </table>
      <p>Always plural: <b>clothes, trousers, glasses, scissors, goods, belongings, earnings, premises</b>. <b>people</b> and <b>police</b> take a plural verb: <i>People <b>are</b>…</i>, <i>The police <b>are</b> investigating.</i></p>

      <h3>3. Numbers + plural ⚠️ your diagnosed error</h3>
      <ul>
        <li>After a number &gt; 1 the noun is <b>plural</b>: <i>two <b>years</b>, three hundred <b>users</b></i>.</li>
        <li>But <b>hundred / thousand / million</b> stay singular after a number: <i>three <b>hundred</b> users</i> (✗ <i>three hundreds</i>). Plural only without a number + <b>of</b>: <i><b>hundreds of</b> users</i>.</li>
        <li><b>Compound adjectives</b> (number + noun before another noun) have NO -s: <i>a <b>two-year</b> contract, a <b>ten-minute</b> break, a <b>five-star</b> hotel</i> (✗ <i>a two-years contract</i>). Compare: <i>The contract lasts two <b>years</b>.</i></li>
      </ul>

      <h3>4. Quantifiers</h3>
      <table>
        <thead><tr><th></th><th>+ countable plural</th><th>+ uncountable</th></tr></thead>
        <tbody>
          <tr><td>large amount</td><td><b>many</b> (questions, negatives) · a lot of · plenty of</td><td><b>much</b> (questions, negatives) · a lot of · plenty of</td></tr>
          <tr><td>small amount, <b>positive</b> (some)</td><td><b>a few</b> minutes</td><td><b>a little</b> time</td></tr>
          <tr><td>small amount, <b>negative</b> (not enough)</td><td><b>few</b> people came (casi nadie)</td><td><b>little</b> time (casi nada)</td></tr>
          <tr><td>more than you want</td><td><b>too many</b> meetings</td><td><b>too much</b> noise</td></tr>
          <tr><td>sufficient</td><td colspan="2"><b>enough</b> + noun (<i>enough laptops</i>) · adjective + <b>enough</b> (<i>big enough</i>) · <b>plenty of</b> = more than enough</td></tr>
          <tr><td>zero</td><td colspan="2"><b>no</b> + noun · <b>none of</b> + the/my… (<i><b>None of</b> the tests passed.</i>) · <b>not any</b></td></tr>
        </tbody>
      </table>
      <p>⚠️ <i>a few / a little</i> (positive) ≠ <i>few / little</i> (negative): <i>I've got <b>a few</b> minutes</i> — let's talk · <i><b>Few</b> people came</i> — disappointing.</p>
      <p>✗ <i>too much meetings</i> · ✗ <i>enough big</i> · ✗ <i>much people</i> → <i>a lot of people</i>.</p>

      <h3>5. Articles</h3>
      <table>
        <thead><tr><th>Article</th><th>Use</th><th>Examples</th></tr></thead>
        <tbody>
          <tr><td><b>a / an</b></td><td>one of many, first mention; <b>jobs</b> ⚠️</td><td><i>I bought <b>a</b> laptop.</i> · <i>She's <b>an</b> engineer.</i> (✗ <i>She's engineer</i> — Spanish <i>es ingeniera</i>)</td></tr>
          <tr><td><b>the</b></td><td>already known, the only one, superlatives</td><td><i><b>The</b> laptop was broken.</i> · <i><b>the</b> Moon, <b>the</b> internet</i> · <i><b>the</b> best option</i></td></tr>
          <tr><td><b>Ø</b> (no article)</td><td>things <b>in general</b> (plural or uncountable) ⚠️</td><td><i><b>Life</b> is short.</i> · <i><b>Software</b> is expensive.</i> · <i><b>People</b> hate change.</i> (✗ <i>The life</i>, ✗ <i>The people</i> — Spanish <i>la vida, la gente</i>)</td></tr>
        </tbody>
      </table>
      <p><b>No article</b> in fixed expressions: <i>go to <b>work</b> / <b>bed</b> / <b>school</b></i>, <i>at <b>home</b></i>, <i>at <b>work</b></i>, <i>on <b>holiday</b></i> (✗ <i>in holidays</i>), <i>have <b>lunch</b></i>, <i>by <b>bus</b></i>, <i><b>next</b> week</i> / <i><b>last</b> year</i> (✗ <i>the next week</i> to mean "la semana que viene"), languages (<i>I speak <b>English</b></i>).</p>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>She advised me on the contract. (ADVICE)</i> → She gave me <b>some advice on</b> the contract.</p>
      <p><i>The break lasts ten minutes. (TEN-MINUTE)</i> → There's <b>a ten-minute break</b>.</p>
      <p><i>There weren't many people at the demo. (FEW)</i> → <b>Few people came</b> to / <b>Very few people were</b> at the demo.</p>
      <p><i>The room is too small for all of us. (ENOUGH)</i> → The room <b>isn't big enough for</b> all of us.</p>
    `
  },
  {
    id: "reported-speech",
    emoji: "🗣️",
    title: "Reported speech, say/tell, reporting verbs & indirect questions",
    html: `
      <p class="hint">Learnlight (work class): reported speech, verbs of communication say and tell, reporting verbs, indirect questions. Plan week 8. Includes your diagnosed <b>recommend + -ing</b> error. Very frequent in Part 4.</p>

      <h3>1. say vs tell ⚠️</h3>
      <table>
        <thead><tr><th>Verb</th><th>Pattern</th><th>Examples</th></tr></thead>
        <tbody>
          <tr><td><b>say</b></td><td>say (that)… · say sth <b>to</b> sb</td><td><i>He <b>said</b> (that) he'd be late.</i> · <i>She <b>said to me</b> that…</i> (✗ <i>said me</i>)</td></tr>
          <tr><td><b>tell</b></td><td><b>tell + person</b> (that)… · tell sb <b>to do</b></td><td><i>She <b>told me</b> (that) the server was down.</i> (✗ <i>told that</i>, ✗ <i>told to me</i>)</td></tr>
        </tbody>
      </table>
      <p>Fixed expressions: <b>tell</b> the truth / a lie / a story / a joke / the difference · <b>say</b> hello / goodbye / sorry / yes / no / something.</p>

      <h3>2. Tense changes (backshift)</h3>
      <p>When the reporting verb is in the past (<i>said, told, asked</i>), the original tense usually moves <b>one step back</b>:</p>
      <table>
        <thead><tr><th>Direct speech</th><th>Reported speech</th></tr></thead>
        <tbody>
          <tr><td>present simple: <i>"I <b>work</b> in Madrid."</i></td><td>past simple: <i>She said she <b>worked</b> in Madrid.</i></td></tr>
          <tr><td>present continuous: <i>"I<b>'m fixing</b> it."</i></td><td>past continuous: <i>He said he <b>was fixing</b> it.</i></td></tr>
          <tr><td>present perfect: <i>"I<b>'ve finished</b>."</i></td><td>past perfect: <i>She said she <b>had finished</b>.</i></td></tr>
          <tr><td>past simple: <i>"I <b>saw</b> it."</i></td><td>past perfect: <i>She said she <b>had seen</b> it.</i> (or <i>saw</i>, in speech)</td></tr>
          <tr><td><b>will</b> / <b>can</b> / <b>may</b></td><td><b>would</b> / <b>could</b> / <b>might</b></td></tr>
          <tr><td><b>must</b> (obligation)</td><td><b>had to</b> (or <i>must</i>)</td></tr>
        </tbody>
      </table>
      <p><b>No change</b>: <i>would, could, should, might, had done</i> · when the reporting verb is present (<i>She <b>says</b> she <b>works</b>…</i>) · optionally when it's <b>still true</b> (<i>She said she <b>works</b> in Madrid</i> — she still does).</p>

      <h3>3. Other changes: people, time, place</h3>
      <p>Pronouns change to fit the new speaker: <i>"<b>I</b>'ll send <b>you</b> it" → He said <b>he</b>'d send <b>me</b> it.</i></p>
      <table>
        <thead><tr><th>Direct</th><th>Reported</th></tr></thead>
        <tbody>
          <tr><td>now · today · tonight</td><td>then · that day · that night</td></tr>
          <tr><td>yesterday · last week</td><td>the day <b>before</b> / the previous day · the week before / the previous week</td></tr>
          <tr><td>tomorrow · next week</td><td>the <b>next</b> day / the <b>following</b> day · the following week</td></tr>
          <tr><td>two years <b>ago</b></td><td>two years <b>before</b></td></tr>
          <tr><td>here · this</td><td>there · that</td></tr>
        </tbody>
      </table>

      <h3>4. Reported questions — statement word order ⚠️</h3>
      <ul>
        <li><b>yes/no questions → if / whether</b>: <i>"Are you coming?" → She asked me <b>if/whether I was</b> coming.</i></li>
        <li><b>wh- questions → wh- word + subject + verb</b>, no <i>do/does/did</i>, no question mark: <i>"Where do you work?" → He asked me <b>where I worked</b>.</i> (✗ <i>where did I work</i>, ✗ <i>where worked I</i>)</li>
      </ul>
      <p>Spanish keeps the same order in both (<i>¿Dónde trabajas? / Me preguntó dónde trabajaba</i>), so this is a typical calque.</p>

      <h3>5. Indirect questions — the polite way to ask</h3>
      <p>Same word order rule, but no backshift (you are asking now): <i>Could you tell me <b>where the meeting room is</b>?</i> (✗ <i>where is the meeting room</i>) · <i>Do you know <b>if the client has signed</b>?</i> · <i>I was wondering <b>whether you could</b> help me.</i> Very useful at work: it sounds much more polite than a direct question.</p>

      <h3>6. Reported orders and requests</h3>
      <p><b>tell / ask + person + (not) to + infinitive</b>: <i>"Restart the server." → My boss <b>told me to restart</b> it.</i> · <i>"Please don't touch production." → She <b>asked us not to touch</b> production.</i> (✗ <i>told me that I restart</i>, ✗ <i>told us don't touch</i>)</p>

      <h3>7. Reporting verbs — learn the pattern with the verb</h3>
      <table>
        <thead><tr><th>Pattern</th><th>Verbs</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>+ to-infinitive</td><td>agree, offer, promise, refuse, threaten, decide</td><td><i>She <b>offered to help</b> me.</i> · <i>He <b>refused to work</b> at the weekend.</i></td></tr>
          <tr><td>+ person + to-infinitive</td><td>advise, ask, encourage, invite, persuade, remind, tell, warn</td><td><i>He <b>reminded me to back up</b> the data.</i></td></tr>
          <tr><td>+ -ing</td><td>admit, deny, suggest, <b>recommend</b> ⚠️, mention</td><td><i>He <b>denied deleting</b> it.</i> · <i>I'd <b>recommend reading</b> the docs.</i> (✗ <i>recommend to read</i>)</td></tr>
          <tr><td>+ preposition + -ing</td><td>apologise <b>for</b>, insist <b>on</b> · accuse sb <b>of</b>, blame sb <b>for</b>, congratulate sb <b>on</b>, thank sb <b>for</b></td><td><i>She <b>apologised for being</b> late.</i> · <i>They <b>accused him of leaking</b> the password.</i></td></tr>
          <tr><td>+ that + clause</td><td>explain, complain, admit, suggest, recommend, insist</td><td><i>She <b>recommended that we update</b> the libraries.</i></td></tr>
        </tbody>
      </table>
      <p>⚠️ <b>suggest / recommend</b> never take <i>person + to</i>: ✗ <i>He suggested me to use</i> → ✓ <i>He suggested <b>using</b></i> / <i>He suggested <b>that I use</b> (or <b>should use</b>)</i>.</p>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>"I didn't break the build," said Tom. (DENIED)</i> → Tom <b>denied breaking</b> the build.</p>
      <p><i>"Why don't we use Terraform?" she said. (SUGGESTED)</i> → She <b>suggested using</b> Terraform.</p>
      <p><i>"You leaked the password!" they said to him. (ACCUSED)</i> → They <b>accused him of leaking</b> the password.</p>
      <p><i>"Don't forget to sign the contract," he said to me. (REMINDED)</i> → He <b>reminded me to sign</b> the contract.</p>
      <p><i>"Where is the server room?" she asked. (WHERE)</i> → She asked <b>where the server room was</b>.</p>
    `
  },
  {
    id: "narrative-tenses",
    emoji: "📜",
    title: "Narrative tenses: past continuous, past perfect, used to / would",
    html: `
      <p class="hint">Learnlight (work class): used to, used to vs would, past continuous, past perfect simple and continuous. Plan week 3. These are the tenses for telling stories — Writing (story, email), Speaking and Part 2 texts.</p>

      <h3>1. The four narrative tenses on one timeline</h3>
      <table>
        <thead><tr><th>Tense</th><th>Use</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><b>past simple</b></td><td>the main events, in order</td><td><i>I <b>opened</b> the logs, <b>found</b> the bug and <b>fixed</b> it.</i></td></tr>
          <tr><td><b>past continuous</b><br>was/were + -ing</td><td>background, or an action <b>in progress</b> when something else happened</td><td><i>I <b>was working</b> on the release when the power <b>went</b> off.</i></td></tr>
          <tr><td><b>past perfect</b><br>had + participle</td><td>an action <b>earlier</b> than another past action ("the past of the past")</td><td><i>When I arrived, the meeting <b>had</b> already <b>started</b>.</i></td></tr>
          <tr><td><b>past perfect continuous</b><br>had been + -ing</td><td>the <b>duration</b> of an activity up to a past moment, or the cause of a past result</td><td><i>I <b>had been waiting</b> for an hour when the bus came.</i> · <i>She was exhausted: she <b>had been coding</b> all night.</i></td></tr>
        </tbody>
      </table>
      <p>Compare: <i>When I arrived, the meeting <b>started</b>.</i> (I arrived → then it started) vs <i>When I arrived, the meeting <b>had started</b>.</i> (it started before I arrived) vs <i>When I arrived, they <b>were having</b> the meeting.</i> (it was in progress).</p>

      <h3>2. Spanish traps ⚠️</h3>
      <ul>
        <li><b>The imperfecto has no single translation.</b> <i>Trabajaba en un banco</i> (state/habit) → <i>I <b>worked</b> / <b>used to work</b> in a bank</i>; <i>Estaba trabajando cuando…</i> (in progress) → <i>I <b>was working</b> when…</i>. ✗ <i>I was working in a bank for five years</i> for a long finished period.</li>
        <li><b>State verbs</b> (know, believe, want, belong, seem…) are not normally continuous: <i>I <b>didn't know</b> the answer</i> (✗ <i>wasn't knowing</i>).</li>
        <li><i>Llevaba dos horas esperando</i> → <i>I <b>had been waiting for</b> two hours</i> (✗ <i>I was waiting since two hours</i>).</li>
        <li><i>Era la primera vez que…</i> → <i>It was the first time I <b>had ever</b> used Linux</i> (past perfect, not ✗ <i>I used</i>).</li>
      </ul>

      <h3>3. Time words that go with each tense</h3>
      <p><b>while / as</b> + past continuous: <i><b>While</b> we were testing, the server crashed.</i> · <b>when</b> + past simple (the interruption): <i>…<b>when</b> the server crashed.</i></p>
      <p><b>already, just, never… before, by the time, after, as soon as</b> + past perfect: <i><b>By the time</b> the fix was ready, the client <b>had</b> cancelled.</i></p>
      <p>With <b>after / before / as soon as</b> the order is already clear, so the past simple is also fine: <i>After she <b>(had) finished</b> the review, she merged the branch.</i></p>
      <p><b>until</b>: <i>I waited <b>until</b> the server came back online.</i> · <b>then / afterwards / eventually / in the end</b> to move the story on.</p>

      <h3>4. used to / would / past simple — past habits and states</h3>
      <table>
        <thead><tr><th>Form</th><th>Habits (repeated actions)</th><th>States</th><th>One action / exact number of times</th></tr></thead>
        <tbody>
          <tr><td><b>used to</b> + infinitive</td><td>✓ <i>I <b>used to stay</b> late on Fridays.</i></td><td>✓ <i>We <b>used to have</b> an office in Barcelona.</i></td><td>✗</td></tr>
          <tr><td><b>would</b> + infinitive</td><td>✓ (once the past context is set) <i>When I was a junior, I <b>would stay</b> late.</i></td><td>✗ <i>We would have an office</i></td><td>✗</td></tr>
          <tr><td><b>past simple</b></td><td>✓</td><td>✓</td><td>✓ <i>I <b>went</b> to Cape Canaveral three times.</i> (✗ <i>used to go three times</i>)</td></tr>
        </tbody>
      </table>
      <p>Negative and question: <i>I <b>didn't use to</b> like coffee.</i> · <i><b>Did</b> you <b>use to</b> play video games?</i> (no <i>-d</i> after <i>did</i>).</p>
      <p>⚠️ Do not confuse with <b>be / get used to + -ing</b> (estar acostumbrado / acostumbrarse — see Phrasal verbs): <i>I <b>used to work</b> late</i> (solía) vs <i>I'<b>m used to working</b> late</i> (estoy acostumbrado).</p>
      <p>Note: some materials mark <i>I would smoke when I was a teenager</i> as wrong. It is fine — <i>when I was a teenager</i> sets the past context. The safe exam rule: <b>used to</b> to introduce the habit and for states, <b>would</b> only for repeated actions after that.</p>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>I've never used Linux before. (FIRST)</i> → It's <b>the first time I've</b> used Linux. (past version: <i>It was the first time I <b>had ever</b> used…</i>)</p>
      <p><i>We had an office in Barcelona, but not any more. (USED)</i> → We <b>used to have</b> an office in Barcelona.</p>
      <p><i>The client cancelled before the fix was ready. (TIME)</i> → <b>By the time</b> the fix was ready, the client <b>had cancelled</b>.</p>
      <p><i>I started waiting at 9 and the bus came at 10. (BEEN)</i> → I <b>had been waiting for</b> an hour when the bus came.</p>
    `
  },
  {
    id: "futures",
    emoji: "🚀",
    title: "Futures: will, going to, present continuous, future continuous & perfect",
    html: `
      <p class="hint">Learnlight (work class): will vs going to (plans, spontaneous decisions, predictions), present continuous for arrangements, future continuous, future perfect simple and continuous. Spanish often uses the present for the future (<i>mañana te llamo</i>); English almost never does — that is the main source of errors.</p>

      <h3>1. Choosing a future form</h3>
      <table>
        <thead><tr><th>Form</th><th>Use</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><b>will</b> + infinitive</td><td>a decision made <b>now</b>, at the moment of speaking</td><td><i>The build has failed? I<b>'ll</b> have a look.</i></td></tr>
          <tr><td></td><td>offers, promises, requests</td><td><i>I<b>'ll</b> send you the slides tonight.</i> · <i><b>Will</b> you help me with the demo?</i></td></tr>
          <tr><td></td><td>predictions based on opinion (<i>I think, probably, I'm sure</i>)</td><td><i>I think AI <b>will</b> change the job market.</i></td></tr>
          <tr><td><b>be going to</b> + infinitive</td><td>a plan or intention decided <b>before</b> speaking</td><td><i>We<b>'re going to</b> migrate to Kubernetes next year.</i></td></tr>
          <tr><td></td><td>predictions based on <b>present evidence</b></td><td><i>Look at the error rate — the server<b>'s going to</b> crash.</i></td></tr>
          <tr><td><b>present continuous</b></td><td>fixed <b>arrangements</b> with other people (time, place agreed — it is in the calendar)</td><td><i>I<b>'m meeting</b> the client on Friday at ten.</i></td></tr>
          <tr><td><b>present simple</b></td><td><b>timetables</b> and schedules (trains, launches, courses)</td><td><i>The launch window <b>opens</b> at 06:14. · The course <b>starts</b> on Monday.</i></td></tr>
        </tbody>
      </table>
      <p>Plan vs arrangement: <i>I'<b>m going to</b> ask for a raise</i> (my intention) · <i>I'<b>m seeing</b> my manager at 4</i> (we have agreed a meeting). Often both are correct; going to is the safe choice for a plan.</p>

      <h3>2. Spanish traps ⚠️</h3>
      <ul>
        <li><b>Present for decisions and offers:</b> <i>Te llamo luego</i> → <i>I<b>'ll</b> call you later</i> (✗ <i>I call you later</i>). <i>¿Te ayudo?</i> → <i><b>Shall</b> I help you?</i> / <i>I'<b>ll</b> help you</i> (✗ <i>Do I help you?</i>).</li>
        <li><b>Arrangements:</b> <i>Mañana ceno con mi jefe</i> → <i>I<b>'m having</b> dinner with my boss tomorrow</i> (✗ <i>I have dinner</i>).</li>
        <li><b>Offers and suggestions with shall</b> (only with I / we, in questions): <i><b>Shall</b> I open the window?</i> (¿Abro la ventana?) · <i><b>Shall</b> we start?</i> (¿Empezamos?).</li>
        <li><b>Probably / definitely</b> go <b>after</b> will and <b>before</b> won't: <i>It <b>will probably</b> rain.</i> · <i>It <b>probably won't</b> rain.</i></li>
      </ul>

      <h3>3. Time clauses: no "will" after when, as soon as, until… ⚠️</h3>
      <p>After <b>when, as soon as, before, after, until / till, once, by the time, in case, as long as, unless</b> we use the <b>present</b> for the future — like the first conditional. Spanish uses the subjunctive here (<i>cuando llegue</i>), which pushes learners to write <i>will</i>.</p>
      <p><i>I'll call you <b>when</b> I <b>arrive</b>.</i> (✗ <i>when I will arrive</i>) · <i>We won't deploy <b>until</b> the tests <b>pass</b>.</i> · <i>Take an umbrella <b>in case</b> it <b>rains</b>.</i></p>
      <p>To stress that something will be <b>finished</b> first, use the <b>present perfect</b>: <i>I'll send it <b>as soon as</b> I<b>'ve finished</b> the review.</i></p>
      <p>⚠️ <b>when</b> in a question or as an object is not a time clause, so <i>will</i> is fine: <i>I don't know <b>when</b> the release <b>will</b> be ready.</i> (no sé cuándo estará listo).</p>

      <h3>4. Future continuous: will be + -ing</h3>
      <p>An action <b>in progress</b> at a moment in the future: <i>This time tomorrow I<b>'ll be flying</b> to Houston.</i> · <i>Don't call at 10 — I<b>'ll be presenting</b> the results.</i></p>
      <p>Polite questions about plans (not asking a favour): <i><b>Will</b> you <b>be using</b> the meeting room this afternoon?</i></p>

      <h3>5. Future perfect: will have + past participle</h3>
      <p>An action <b>completed before</b> a point in the future, usually with <b>by</b> (+ time) or <b>by the time</b> (+ present): <i><b>By</b> June I<b>'ll have finished</b> the course.</i> · <i><b>By the time</b> you <b>get</b> here, we<b>'ll have fixed</b> the bug.</i></p>
      <p><b>Future perfect continuous</b> (will have been + -ing) for the <b>duration</b> up to that point: <i>In June I<b>'ll have been studying</b> for eight months.</i></p>
      <p><b>by</b> (no más tarde de) ≠ <b>until</b> (hasta, durante todo el tiempo): <i>Send it <b>by</b> Friday</i> vs <i>I'm working from home <b>until</b> Friday</i>.</p>

      <h3>6. Other ways to talk about the future</h3>
      <table>
        <thead><tr><th>Form</th><th>Meaning</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><b>be about to</b> + infinitive</td><td>very soon (a punto de)</td><td><i>Hurry up — the rocket <b>is about to</b> launch.</i></td></tr>
          <tr><td><b>be due to</b> + infinitive</td><td>scheduled, expected (previsto para)</td><td><i>The new version <b>is due to</b> be released in May.</i></td></tr>
          <tr><td><b>be likely to</b> / <b>be bound to</b></td><td>probably / almost certainly</td><td><i>Prices <b>are likely to</b> rise.</i> · <i>It<b>'s bound to</b> fail without tests.</i></td></tr>
          <tr><td><b>be on the point of</b> + -ing</td><td>a punto de (more formal)</td><td><i>She <b>was on the point of</b> resigning when they offered her a promotion.</i></td></tr>
        </tbody>
      </table>

      <h3>7. The future in the past: was going to / would</h3>
      <p>A plan or prediction seen from the past — often a plan that did <b>not</b> happen: <i>I <b>was going to</b> call you, but I forgot.</i> · <i>I knew the demo <b>would</b> go well.</i> · <i>We <b>were about to</b> leave when the alarm went off.</i></p>
      <p>This is also what <i>will</i> becomes in reported speech: <i>"I'll fix it" → He said he <b>would</b> fix it.</i></p>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>The plan is to release the new version next Monday. (DUE)</i> → The new version <b>is due to be</b> released next Monday.</p>
      <p><i>The launch will start in a few seconds. (ABOUT)</i> → The launch <b>is about to start</b>.</p>
      <p><i>I'll finish the report before you come back. (HAVE)</i> → I <b>will have finished</b> the report by the time you come back.</p>
      <p><i>I intended to email you, but I didn't have time. (GOING)</i> → I <b>was going to email</b> you, but I didn't have time.</p>
      <p><i>It's very likely that the price will go up. (BOUND)</i> → The price <b>is bound to go</b> up.</p>
    `
  },
  {
    id: "linkers",
    emoji: "🌉",
    title: "Linkers: contrast, purpose, reason, result & addition",
    html: `
      <p class="hint">Part 2 (open cloze) tests the small words: <i>although, despite, whereas, so, as, in case</i>. Part 4 loves turning one into another (<i>although → despite</i>). In the Writing, the <b>Organisation</b> scale is largely about linkers used correctly — not about using many. See also So / such (<i>so, so that</i>) and Conditionals (<i>unless, in case</i>).</p>

      <h3>1. The key: what comes after the linker?</h3>
      <p>Most errors are not about meaning but about <b>grammar</b>: some linkers take a <b>clause</b> (subject + verb), others a <b>noun or -ing</b>, others start a <b>new sentence</b>.</p>
      <table>
        <thead><tr><th>Meaning</th><th>+ clause (subject + verb)</th><th>+ noun / -ing</th><th>New sentence, with a comma</th></tr></thead>
        <tbody>
          <tr><td><b>Contrast</b> (aunque, a pesar de, sin embargo)</td><td><i>although, though, even though, while, whereas</i></td><td><i>despite, in spite of</i></td><td><i>However, Nevertheless, Even so, On the other hand</i></td></tr>
          <tr><td><b>Reason</b> (porque, debido a)</td><td><i>because, as, since</i></td><td><i>because of, due to, owing to</i></td><td>—</td></tr>
          <tr><td><b>Result</b> (así que, por lo tanto)</td><td><i>so</i></td><td>—</td><td><i>Therefore, As a result, Consequently, That's why</i></td></tr>
          <tr><td><b>Purpose</b> (para, para que)</td><td><i>so that</i> (+ can / could / will / would)</td><td><i>to, in order to, so as to</i> + infinitive</td><td>—</td></tr>
          <tr><td><b>Addition</b> (además)</td><td>—</td><td><i>as well as, in addition to, besides</i> (+ -ing)</td><td><i>Moreover, Furthermore, In addition, What's more</i></td></tr>
        </tbody>
      </table>

      <h3>2. Contrast</h3>
      <p><b>although / even though</b> + clause: <i><b>Although</b> the tests passed, the release failed.</i> · <i>even though</i> is stronger (a pesar de que, aun sabiendo que).</p>
      <p><b>despite / in spite of</b> + noun or -ing: <i><b>Despite</b> the delay, we met the deadline.</i> · <i><b>In spite of</b> working late, she didn't finish.</i></p>
      <p>To use a clause after despite: <b>despite the fact that</b> + clause: <i>Despite <b>the fact that</b> it was late, we kept working.</i></p>
      <p><b>However</b> starts a new sentence and needs a comma: <i>The plan was good. <b>However,</b> nobody followed it.</i> It can also go in the middle: <i>Nobody, <b>however,</b> followed it.</i></p>
      <p><b>whereas / while</b> compare two different facts (mientras que, en cambio): <i>Ana prefers Python, <b>whereas</b> Luis uses Go.</i></p>
      <p><b>though</b> at the end of a sentence = however (informal): <i>The talk was long. It was interesting, <b>though</b>.</i></p>
      <p><b>even if</b> (aunque + hipótesis) ≠ <b>even though</b> (aunque + hecho real): <i>I'll go <b>even if</b> it rains</i> (puede que llueva) · <i>I went <b>even though</b> it was raining</i> (llovía de verdad).</p>

      <h3>3. Purpose</h3>
      <p><b>to / in order to / so as to</b> + infinitive, when the subject is the same: <i>I came early <b>to</b> set up the room.</i> · Negative: <b>in order not to / so as not to</b>: <i>I left early <b>so as not to</b> miss the train.</i></p>
      <p><b>so that</b> + clause, usually with <b>can / could / will / would</b>, especially when the subject changes: <i>I'll share my screen <b>so that</b> everyone <b>can</b> see the code.</i></p>
      <p><b>for</b> + noun (the purpose of an action) or + -ing (the purpose of a thing): <i>We went out <b>for</b> lunch.</i> · <i>This tool is <b>for</b> monitoring servers.</i> (✗ <i>I came for to set up</i> / ✗ <i>for set up</i>)</p>
      <p><b>in case</b> = as a precaution (por si acaso), not a condition: <i>Save a backup <b>in case</b> the disk fails.</i></p>

      <h3>4. Reason and result</h3>
      <p><b>because / as / since</b> + clause: <i><b>As</b> the server was down, we postponed the demo.</i> (as / since often go at the start; because gives new, important information).</p>
      <p><b>because of / due to / owing to</b> + noun: <i>The launch was cancelled <b>due to</b> bad weather.</i> (✗ <i>because the bad weather</i>).</p>
      <p><b>so</b> + clause, after a comma: <i>The tests failed, <b>so</b> we rolled back.</i> · Formal, new sentence: <i><b>Therefore,</b> / <b>As a result,</b> / <b>Consequently,</b> the project was delayed.</i></p>
      <p><b>That's why</b> = por eso: <i>The interface is confusing. <b>That's why</b> users complain.</i></p>

      <h3>5. Addition</h3>
      <p><b>Moreover / Furthermore / In addition / What's more</b> + comma, new sentence: <i>The tool is free. <b>Moreover,</b> it is open source.</i></p>
      <p><b>as well as / in addition to / besides</b> + noun or <b>-ing</b>: <i><b>As well as</b> writing code, she manages the team.</i> (✗ <i>as well as write</i>)</p>

      <h3>6. Spanish speaker traps ⚠️</h3>
      <ul>
        <li>✗ <i><b>Despite of</b> the rain</i> → <i><b>Despite</b> the rain</i> / <i><b>In spite of</b> the rain</i>. Never <i>despite of</i>.</li>
        <li><i>A pesar de que…</i> → ✗ <i>Despite it was late</i> → <i><b>Although</b> it was late</i> / <i>Despite <b>the fact that</b> it was late</i> / <i>Despite <b>being</b> late</i>.</li>
        <li><i>Sin embargo</i> in the middle of a sentence with commas only: ✗ <i>It was cheap, however it broke.</i> → <i>It was cheap. <b>However,</b> it broke.</i> / <i>It was cheap, <b>but</b> it broke.</i></li>
        <li><i>Para + infinitivo</i> → <b>to</b> + infinitive, not ✗ <i>for to</i> / ✗ <i>for + infinitive</i>.</li>
        <li><i>Aunque</i> + subjunctive has two translations: <i>even if</i> (hypothesis) or <i>although / even though</i> (fact).</li>
        <li><i>Además</i> at the start → <i>Moreover / In addition / Besides</i>, not ✗ <i>Also,</i> at the beginning of a formal sentence (it is fine in informal emails).</li>
        <li>Don't double the linker: ✗ <i><b>Although</b> it was expensive, <b>but</b> we bought it.</i> → one or the other.</li>
      </ul>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>Although it rained, the launch went ahead. (DESPITE)</i> → <b>Despite the rain</b>, the launch went ahead. (<i>Despite the fact that it rained</i> is correct English but 6 words: too long for Part 4, max. 5.)</p>
      <p><i>She was tired, but she kept working. (SPITE)</i> → <b>In spite of being</b> tired, she kept working.</p>
      <p><i>I'll write it down so I don't forget it. (ORDER)</i> → I'll write it down <b>in order not to</b> forget it.</p>
      <p><i>The flight was delayed because of the storm. (DUE)</i> → The flight was delayed <b>due to the</b> storm.</p>
      <p><i>Take your charger because the meeting may run late. (CASE)</i> → Take your charger <b>in case the meeting runs</b> late.</p>
    `
  },
  {
    id: "prepositions",
    emoji: "📍",
    title: "Dependent prepositions & prepositional phrases",
    html: `
      <p class="hint">Part 1 (multiple-choice cloze) and Part 2 (open cloze) test these all the time, and Spanish gives the wrong preposition in many of them (<i>depender <b>de</b></i> → <i>depend <b>on</b></i>). There is no rule that predicts them: learn each word <b>with</b> its preposition, as one unit. Remember: after any preposition, the verb goes in <b>-ing</b> (see Verb patterns).</p>

      <h3>1. Adjective + preposition</h3>
      <table>
        <thead><tr><th>Preposition</th><th>Adjectives</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><b>in</b></td><td>interested, involved, experienced</td><td><i>She's <b>interested in</b> cloud security.</i></td></tr>
          <tr><td><b>at</b></td><td>good, bad, brilliant, terrible, surprised (also <i>by</i>)</td><td><i>He's <b>good at</b> explaining things.</i></td></tr>
          <tr><td><b>of</b></td><td>afraid, aware, capable, fond, full, proud, tired, typical, jealous</td><td><i>Are you <b>aware of</b> the risks?</i> · <i>I'm <b>tired of</b> waiting.</i></td></tr>
          <tr><td><b>for</b></td><td>responsible, famous, suitable, ready, late, grateful (for something)</td><td><i>Who is <b>responsible for</b> the backups?</i></td></tr>
          <tr><td><b>about</b></td><td>worried, excited, sorry (about something), anxious, curious</td><td><i>I'm <b>worried about</b> the deadline.</i></td></tr>
          <tr><td><b>with</b></td><td>happy / satisfied / pleased, bored, familiar, angry / annoyed (with someone), busy</td><td><i>Are you <b>familiar with</b> Terraform?</i></td></tr>
          <tr><td><b>to</b></td><td>similar, married, kind, polite, used (= acostumbrado), addicted, related</td><td><i>The new version is <b>similar to</b> the old one.</i></td></tr>
          <tr><td><b>from</b></td><td>different (also <i>to</i> in British English), absent, safe</td><td><i>This job is very <b>different from</b> my last one.</i></td></tr>
        </tbody>
      </table>
      <p><b>angry / annoyed <u>with</u> someone <u>about</u> something</b> · <b>sorry <u>about</u> something / sorry <u>for</u> doing something</b> · <b>good <u>at</u> maths</b> but <b>good <u>for</u> your health</b> and <b>good <u>to</u> / <u>with</u> people</b>.</p>

      <h3>2. Verb + preposition</h3>
      <table>
        <thead><tr><th>Preposition</th><th>Verbs</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><b>on</b></td><td>depend, rely, concentrate, focus, insist, comment, spend (money on)</td><td><i>It <b>depends on</b> the budget.</i></td></tr>
          <tr><td><b>in</b></td><td>believe, succeed, specialise, invest, result (= cause), participate</td><td><i>She <b>succeeded in</b> fixing it.</i></td></tr>
          <tr><td><b>for</b></td><td>apply, ask, wait, pay, look, apologise (for something), blame (someone for)</td><td><i>I <b>applied for</b> the job.</i> · <i>Who's <b>paying for</b> dinner?</i></td></tr>
          <tr><td><b>of</b></td><td>consist, think (opinion), approve, dream, accuse (someone of), remind (someone of)</td><td><i>The team <b>consists of</b> six people.</i></td></tr>
          <tr><td><b>about</b></td><td>talk, think (consider), complain, worry, care, hear (news)</td><td><i>Users <b>complained about</b> the update.</i></td></tr>
          <tr><td><b>to</b></td><td>listen, belong, reply, apologise (to someone), explain (something to someone), happen, object</td><td><i>Can you <b>explain</b> it <b>to</b> me?</i> (✗ <i>explain me</i>)</td></tr>
          <tr><td><b>with</b></td><td>deal, cope, agree (with someone), provide (someone with), share</td><td><i>I <b>agree with</b> you.</i></td></tr>
          <tr><td><b>from</b></td><td>suffer, recover, protect, prevent (someone from -ing), differ</td><td><i>The firewall <b>protects</b> us <b>from</b> attacks.</i></td></tr>
        </tbody>
      </table>
      <p>⚠️ <b>No preposition</b> in English (but yes in Spanish): <b>discuss</b> the plan (✗ <i>discuss about</i>), <b>enter</b> the room (✗ <i>enter in</i>), <b>attend</b> a meeting (✗ <i>attend to</i>), <b>approach</b> the problem (✗ <i>approach to</i>), <b>reach</b> an agreement, <b>marry</b> someone (✗ <i>marry with</i>), <b>call / phone</b> someone, <b>answer</b> the email, <b>lack</b> experience.</p>
      <p><b>arrive <u>in</u></b> a city / country · <b>arrive <u>at</u></b> a building, airport, station (✗ <i>arrive to</i>). <b>get <u>to</u></b> is the exception: <i>I got <b>to</b> the office at nine.</i></p>

      <h3>3. Noun + preposition</h3>
      <ul>
        <li><b>in</b>: an increase / rise / fall / drop / change <b>in</b> prices · interest <b>in</b> · experience <b>in</b></li>
        <li><b>of</b>: an increase <b>of</b> 10% (the amount) · a lack <b>of</b> · the cause <b>of</b> · advantage / disadvantage <b>of</b></li>
        <li><b>for</b>: the reason <b>for</b> · demand <b>for</b> · a need <b>for</b> · respect <b>for</b> · an application <b>for</b></li>
        <li><b>to</b>: a solution <b>to</b> · an answer <b>to</b> · a key <b>to</b> · access <b>to</b> · an invitation <b>to</b> · damage <b>to</b></li>
        <li><b>with</b>: a problem <b>with</b> · a relationship <b>with</b> · contact <b>with</b></li>
        <li><b>on</b>: an effect / impact / influence <b>on</b> · advice <b>on</b> · a tax <b>on</b></li>
        <li><b>between</b>: the difference <b>between</b> A and B</li>
      </ul>

      <h3>4. Prepositional phrases (fixed — learn them whole)</h3>
      <table>
        <thead><tr><th>Preposition</th><th>Phrases</th></tr></thead>
        <tbody>
          <tr><td><b>on</b></td><td>on purpose (a propósito) · on time (puntual) · on holiday · on business · on average · on behalf of · on the phone · on the whole · on fire · on sale</td></tr>
          <tr><td><b>in</b></td><td>in time (a tiempo, con margen) · in advance · in charge of · in danger · in general · in public · in a hurry · in my opinion · in the end (al final, finalmente) · in fact · in common · in other words</td></tr>
          <tr><td><b>at</b></td><td>at risk · at the moment · at first · at least · at last · at the end of (al final de) · at once · at work · at short notice · at a loss</td></tr>
          <tr><td><b>by</b></td><td>by mistake · by accident / by chance · by email / by car · by hand · by heart (de memoria) · by far · by the way</td></tr>
          <tr><td><b>out of</b></td><td>out of date · out of order (averiado) · out of work · out of stock · out of control · out of reach</td></tr>
          <tr><td><b>under</b></td><td>under pressure · under control · under construction · under review</td></tr>
        </tbody>
      </table>
      <p><b>on time</b> (at the planned time) ≠ <b>in time</b> (early enough, before it's too late) · <b>in the end</b> (finally, after a long process) ≠ <b>at the end of</b> (the last part of something).</p>

      <h3>5. Time and place: in / on / at — the points that still fail at B2</h3>
      <p><b>at</b> + clock time, night, the weekend (BrE), Christmas · <b>on</b> + days and dates (<i>on Monday, on 3 May, on Monday morning</i>) · <b>in</b> + months, years, seasons, parts of the day (<i>in the morning</i>).</p>
      <p>No preposition before <b>this / next / last / every</b>: <i>I'll see you <b>next Monday</b></i> (✗ <i>on next Monday</i>).</p>
      <p>Place: <b>at</b> a point or event (<i>at the station, at a conference, at home, at work</i>) · <b>in</b> a space or city (<i>in the office, in Madrid</i>) · <b>on</b> a surface or line (<i>on the screen, on the second floor, on the website</i>).</p>

      <h3>6. Spanish speaker traps ⚠️</h3>
      <ul>
        <li><i>depender <b>de</b></i> → depend <b>on</b> · <i>consistir <b>en</b></i> → consist <b>of</b> · <i>casarse <b>con</b></i> → marry / get married <b>to</b> · <i>soñar <b>con</b></i> → dream <b>of / about</b> · <i>pensar <b>en</b></i> → think <b>about / of</b>.</li>
        <li><i>enfadado <b>con</b></i> → angry <b>with</b> (person) / <b>about</b> (thing) · <i>bueno <b>en</b></i> → good <b>at</b> · <i>interesado <b>en</b></i> → interested <b>in</b> ✓ (same!).</li>
        <li><i>Me explicó…</i> → He explained <b>to me</b> (✗ <i>explained me</i>). Also <i>describe / suggest / say something <b>to</b> someone</i>.</li>
        <li><i>pagar la cena</i> → pay <b>for</b> dinner · <i>esperar el autobús</i> → wait <b>for</b> the bus · <i>pedir ayuda</i> → ask <b>for</b> help · <i>buscar</i> → look <b>for</b>.</li>
        <li><i>Discutir / entrar en / asistir a</i> → <b>discuss / enter / attend</b> + object, no preposition.</li>
        <li>Preposition + verb → <b>-ing</b>: <i>I'm interested <b>in learning</b></i> (✗ <i>in learn</i> / ✗ <i>to learn</i>).</li>
      </ul>

      <h3>Useful in Part 4 transformations</h3>
      <p><i>I didn't break it intentionally. (PURPOSE)</i> → I didn't break it <b>on purpose</b>.</p>
      <p><i>Ana manages the support team. (CHARGE)</i> → Ana <b>is in charge of</b> the support team.</p>
      <p><i>We'll launch if the weather is good, but not if it's bad. (DEPENDS)</i> → Whether we launch or not <b>depends on</b> the weather.</p>
      <p><i>The team has six members. (CONSISTS)</i> → The team <b>consists of</b> six members.</p>
      <p><i>I'm sorry I sent you the wrong file. (APOLOGISE)</i> → I <b>apologise for sending</b> you the wrong file.</p>
    `
  },
  {
    id: "writing-overview",
    group: "writing",
    emoji: "✍️",
    title: "Writing paper: how it works and how to plan",
    html: `
      <p class="hint">B2 First, Paper 2 (Writing). Read this first, then the guide for each text type. Practise in the ✍️ Writing tab: the AI marks your text with the same four scales.</p>

      <h3>1. The paper</h3>
      <table>
        <thead><tr><th></th><th>Part 1</th><th>Part 2</th></tr></thead>
        <tbody>
          <tr><td>Task</td><td><b>Essay</b> — compulsory</td><td><b>Choose one</b> of three: article, email/letter, report, review</td></tr>
          <tr><td>Length</td><td colspan="2"><b>140–190 words</b> each · 80 minutes for both</td></tr>
          <tr><td>Input</td><td>A question + <b>two notes</b> + "your own idea"</td><td>A short situation: who reads it, why, what to include</td></tr>
        </tbody>
      </table>

      <h3>2. How it is marked — four scales, 0–5 each (20 per task)</h3>
      <table>
        <thead><tr><th>Scale</th><th>The examiner asks…</th><th>How to get a 5</th></tr></thead>
        <tbody>
          <tr><td><b>Content</b></td><td>Did you answer <b>everything</b> the task asked?</td><td>Tick off every point of the task in your plan. One missing point = lower Content.</td></tr>
          <tr><td><b>Communicative Achievement</b></td><td>Is it the right <b>type of text</b> and <b>register</b> for the reader?</td><td>An article sounds like an article, a report like a report. Formal for a manager, friendly for a friend — and consistent.</td></tr>
          <tr><td><b>Organisation</b></td><td>Is it easy to follow?</td><td>Clear paragraphs, one idea each, and a <b>variety</b> of linkers (not <i>and… but… so…</i> only).</td></tr>
          <tr><td><b>Language</b></td><td>Range and accuracy of grammar and vocabulary</td><td>Some less common words and complex structures (relative clauses, conditionals, passives), with few errors.</td></tr>
        </tbody>
      </table>

      <h3>3. A method for every task (≈ 40 min each)</h3>
      <ol>
        <li><b>Read (3 min)</b>: underline <b>who</b> the reader is, <b>why</b> you are writing and <b>every point</b> you must cover.</li>
        <li><b>Plan (7 min)</b>: one line per paragraph. Decide your opinion <b>before</b> you start.</li>
        <li><b>Write (25 min)</b>: follow the plan. Aim for about 170 words — enough to develop ideas, short enough to check.</li>
        <li><b>Check (5 min)</b>: use the checklist in section 6. Spelling and your typical errors first.</li>
      </ol>

      <h3>4. Register: formal vs informal</h3>
      <table>
        <thead><tr><th></th><th>Formal / neutral (essay, report, formal letter)</th><th>Informal (email to a friend, many articles)</th></tr></thead>
        <tbody>
          <tr><td>Contractions</td><td><i>it is, I would, do not</i></td><td><i>it's, I'd, don't</i></td></tr>
          <tr><td>Verbs</td><td><i>receive, discover, postpone, tolerate</i></td><td><i>get, find out, put off, put up with</i></td></tr>
          <tr><td>Linkers</td><td><i>However, Moreover, Therefore, In addition</i></td><td><i>But, Also, So, Anyway, By the way</i></td></tr>
          <tr><td>Tone</td><td>impersonal: <i>It is often said that…, There are several reasons…</i></td><td>direct: <i>You know what? Guess what!</i>, exclamations, questions</td></tr>
        </tbody>
      </table>
      <p>⚠️ <b>Mixing registers</b> is a typical B2 mistake: <i>Dear Sir or Madam, … Anyway, see you!</i> Choose one and keep it.</p>

      <h3>5. Linkers by function — use a variety</h3>
      <table>
        <thead><tr><th>Function</th><th>Linkers</th></tr></thead>
        <tbody>
          <tr><td>Adding</td><td><i>In addition, Moreover, What is more, Not only… but also…, as well as</i></td></tr>
          <tr><td>Contrast</td><td><i>However, Although / Even though + clause, Despite / In spite of + -ing or noun, On the other hand, whereas</i></td></tr>
          <tr><td>Cause / result</td><td><i>because, as, since · so, therefore, as a result, which is why</i></td></tr>
          <tr><td>Purpose</td><td><i>to, in order to, so that + can/could</i></td></tr>
          <tr><td>Examples</td><td><i>for example, for instance, such as, in particular</i></td></tr>
          <tr><td>Opinion</td><td><i>In my opinion, I believe that, It seems to me that, As far as I'm concerned</i></td></tr>
          <tr><td>Conclusion</td><td><i>In conclusion, To sum up, All in all, Overall</i></td></tr>
        </tbody>
      </table>
      <p>⚠️ <i>Despite <b>of</b></i> ✗ → <i>Despite</i> / <i>In spite <b>of</b></i> ✓ · <i>Despite <b>it was</b> late</i> ✗ → <i>Despite <b>being</b> late</i> / <i><b>Although</b> it was late</i> ✓ · <i>On the other hand</i> introduces the <b>opposite side</b>, not just another point.</p>

      <h3>6. Checklist before you finish ⚠️ (your diagnosed errors first)</h3>
      <ul>
        <li><b>recommend / suggest + -ing</b> (or <i>that + clause</i>) — never <i>recommend to do</i>.</li>
        <li><b>Plurals after numbers</b> and <i>one of the + plural</i>; <i>three <b>hundred</b></i>, <i>a <b>two-year</b> course</i>.</li>
        <li><b>as … as</b> for equality, <b>than</b> only with comparatives.</li>
        <li><b>because</b> for reasons, <b>if</b> for conditions.</li>
        <li><b>, which</b> to refer to the whole previous clause (<i>…, which is why…</i>).</li>
        <li>Uncountables: <i>advice, information, news, equipment</i> (no <i>a</i>, no <i>-s</i>).</li>
        <li>Spelling of Latin-root words: <i>recommend, necessary, possibility, responsibility</i>.</li>
        <li>Every point of the task covered? Right register all the way through? 140–190 words?</li>
      </ul>

      <h3>7. Spanish-speaker habits to avoid</h3>
      <ul>
        <li><b>Very long sentences</b> joined with commas. In English, use a full stop or a linker: ✗ <i>The office is big, it has a canteen, we like it</i>.</li>
        <li><b>Subject missing</b>: ✗ <i>Is important to…</i> → ✓ <i><b>It</b> is important to…</i></li>
        <li><b>Articles for general ideas</b>: ✗ <i>The technology is changing the society</i> → ✓ <i>Technology is changing society</i>.</li>
        <li><b>Repeating the question word for word</b>: paraphrase it in the introduction.</li>
        <li><b>Literal translations</b>: <i>make a photo</i> ✗ → <i>take</i>; <i>assist to a meeting</i> ✗ → <i>attend</i>; <i>actually</i> ≠ actualmente.</li>
      </ul>
    `
  },
  {
    id: "writing-essay",
    group: "writing",
    emoji: "📝",
    title: "Essay (Part 1)",
    html: `
      <p class="hint">Part 1, compulsory. You discuss a question using the <b>two notes</b> given plus <b>your own idea</b>, and give your opinion. Reader: your teacher. Register: neutral / formal.</p>

      <h3>1. Structure (4–5 paragraphs)</h3>
      <table>
        <thead><tr><th>Paragraph</th><th>What to do</th></tr></thead>
        <tbody>
          <tr><td>1. Introduction</td><td>Introduce the topic in your own words (do <b>not</b> copy the question). Optional: say what you will discuss. 2–3 sentences.</td></tr>
          <tr><td>2. Note 1</td><td>Topic sentence + reason + example.</td></tr>
          <tr><td>3. Note 2</td><td>Same pattern. Often the <b>other side</b> of the argument (<i>On the other hand…</i>).</td></tr>
          <tr><td>4. Your own idea</td><td>A <b>different</b> point, not a repetition of the notes. ⚠️ Forgetting it lowers Content.</td></tr>
          <tr><td>5. Conclusion</td><td>Summarise and give a <b>clear opinion</b> that answers the question. No new arguments.</td></tr>
        </tbody>
      </table>
      <p>You can give your opinion in the introduction and confirm it at the end, or stay balanced until the conclusion. Both are fine — but the conclusion must answer the question.</p>

      <h3>2. Useful language</h3>
      <ul>
        <li><b>Introducing</b>: <i>In recent years, … · Nowadays it is common for… · Many people believe that…, while others…</i></li>
        <li><b>Arguments</b>: <i>The main argument in favour of… is… · One advantage / drawback of… is that… · Another point to consider is…</i></li>
        <li><b>Supporting</b>: <i>For instance, … · This is because… · As a result, …</i></li>
        <li><b>Contrasting</b>: <i>On the other hand, … · However, … · Although…, …</i></li>
        <li><b>Concluding</b>: <i>In conclusion, I believe that… · All things considered, … · Overall, the advantages outweigh the disadvantages.</i></li>
      </ul>
      <p>⚠️ <i>In my opinion, I think…</i> is redundant — choose one. Avoid <i>I'm going to talk about…</i>: it sounds like a presentation, not an essay.</p>

      <h3>3. Model answer (172 words)</h3>
      <p class="hint"><b>Task</b>: <i>In many companies employees can now work from home. Is this a positive development?</i> Notes: 1. productivity 2. relationships with colleagues 3. (your own idea)</p>
      <div class="model">
        <p>In recent years, more and more companies have allowed their staff to work from home. While this has clear advantages, it also raises some important questions.</p>
        <p>The main argument in favour of remote work is productivity. Without long commutes or constant interruptions, many employees find it easier to concentrate and get their work done. In fact, several studies suggest that people working from home are at least as efficient as those in the office.</p>
        <p>On the other hand, relationships with colleagues may suffer. Video calls are useful, but they cannot completely replace a quick chat by the coffee machine, which is often where problems are solved and new ideas appear. New employees, in particular, may feel isolated.</p>
        <p>Another point to consider is the environment. Fewer people travelling to work every day means less traffic and lower emissions, which benefits everyone.</p>
        <p>In conclusion, I believe that working from home is a positive development, provided that companies find ways to keep their teams connected. A hybrid model, combining both options, seems the best solution.</p>
      </div>
      <p><b>Why it works</b>: the introduction paraphrases the question · one note per paragraph, each with a reason and an example · own idea (the environment) is genuinely new · a clear opinion with a condition (<i>provided that</i>) · varied linkers (<i>While, In fact, On the other hand, in particular, Another point, In conclusion</i>) · B2 structures: present perfect, relative clause with <i>which</i>, <i>as … as</i>, reduced relative clause (<i>people working from home</i> = <i>people who work…</i>).</p>
    `
  },
  {
    id: "writing-email",
    group: "writing",
    emoji: "✉️",
    title: "Email / letter (Part 2)",
    html: `
      <p class="hint">Part 2. You reply to an email or letter, or write to an organisation. <b>The reader decides the register</b>: a friend (informal) or a manager, company or editor (formal).</p>

      <h3>1. Opening and closing ⚠️</h3>
      <table>
        <thead><tr><th>Reader</th><th>Opening</th><th>Closing</th></tr></thead>
        <tbody>
          <tr><td>Name unknown (formal)</td><td><i>Dear Sir or Madam,</i></td><td><i>Yours faithfully,</i> + full name</td></tr>
          <tr><td>Name known (formal)</td><td><i>Dear Ms Smith, / Dear Mr Jones,</i></td><td><i>Yours sincerely,</i> / <i>Kind regards,</i></td></tr>
          <tr><td>Friend (informal)</td><td><i>Hi Sam, / Dear Sam,</i></td><td><i>Best wishes, / Take care, / Love,</i> + first name</td></tr>
        </tbody>
      </table>
      <p>⚠️ Title + <b>surname</b>, never first name: ✗ <i>Dear Mr John</i> → ✓ <i>Dear Mr Smith</i> or <i>Dear John</i>. <i>Ms</i> for any woman unless you know she prefers <i>Mrs/Miss</i>.</p>

      <h3>2. Structure</h3>
      <table>
        <thead><tr><th>Paragraph</th><th>Informal</th><th>Formal</th></tr></thead>
        <tbody>
          <tr><td>1. Reason for writing</td><td><i>Thanks for your email – great to hear from you!</i></td><td><i>I am writing to enquire about / apply for / complain about…</i></td></tr>
          <tr><td>2–3. Main points</td><td colspan="2">Answer <b>every question</b> in the input, one paragraph per point. Add detail and examples.</td></tr>
          <tr><td>4. Closing line</td><td><i>Let me know… · Can't wait to see you! · Write soon.</i></td><td><i>I look forward to hearing from you. · Please do not hesitate to contact me if…</i></td></tr>
        </tbody>
      </table>

      <h3>3. Useful language</h3>
      <ul>
        <li><b>Giving advice</b> (very common in the task): <i>If I were you, I'd… · You should / You'd better… · Why don't you…? · I'd recommend <b>doing</b>…</i> (✗ <i>recommend to do</i>)</li>
        <li><b>Asking politely</b> (formal): <i>I would be grateful if you could… · Could you tell me whether…?</i> (indirect question order — see Reported speech)</li>
        <li><b>Informal fillers</b>: <i>to be honest, anyway, by the way, guess what</i> — natural in an email to a friend, wrong in a formal letter.</li>
      </ul>

      <h3>4. Model answer — informal (158 words)</h3>
      <p class="hint"><b>Task</b>: your English friend Sam writes: <i>"I'm thinking of doing a coding bootcamp next summer. You did one, didn't you? Was it worth it? What advice would you give me?"</i> Write your email.</p>
      <div class="model">
        <p>Hi Sam,</p>
        <p>Thanks for your email – it&#x27;s great to hear you&#x27;re thinking about a bootcamp!</p>
        <p>Yes, I did one two years ago and, to be honest, it was one of the best decisions I&#x27;ve ever made. It was really intense: we had classes from nine to six every day and quite a lot of homework at the weekends. However, I learnt more in those twelve weeks than in a whole year of studying on my own, and I found a job as a junior developer soon after finishing.</p>
        <p>If I were you, I&#x27;d choose a course that includes a real project, because that&#x27;s what employers want to see. I&#x27;d also recommend doing some free online tutorials before you start, so that the first weeks aren&#x27;t such a shock. Oh, and make sure you get enough sleep – you&#x27;ll need it!</p>
        <p>Let me know which course you choose. I&#x27;d be happy to help if you get stuck.</p>
        <p>Best wishes,<br>Alex</p>
      </div>
      <p><b>Why it works</b>: answers all three questions (did you do one? was it worth it? advice?) · consistently friendly register (contractions, <i>to be honest</i>, <i>Oh, and…</i>) · advice with variety (<i>If I were you, I'd recommend doing, make sure</i>) · <i>so that</i> for purpose, <i>such a shock</i>, superlative + present perfect.</p>
    `
  },
  {
    id: "writing-article",
    group: "writing",
    emoji: "📰",
    title: "Article (Part 2)",
    html: `
      <p class="hint">Part 2. For a magazine, website or blog. The goal is to <b>interest and entertain</b> the reader while answering the questions in the task. Register: neutral or informal, lively.</p>

      <h3>1. What makes it an article</h3>
      <ul>
        <li>A <b>title</b> that catches attention (short, can be a question or a play on words).</li>
        <li>An <b>opening that hooks</b> the reader: a question, a surprising fact, a short anecdote.</li>
        <li><b>Talk to the reader</b>: <i>you</i>, direct and rhetorical questions (<i>Have you ever…? Who doesn't love…?</i>).</li>
        <li><b>Personal experience and opinion</b>, with examples.</li>
        <li>An <b>ending</b> that leaves the reader thinking: a question, a recommendation, a final twist.</li>
      </ul>

      <h3>2. Structure</h3>
      <table>
        <thead><tr><th>Part</th><th>Content</th></tr></thead>
        <tbody>
          <tr><td>Title</td><td><i>My pocket-sized assistant · Is your phone running your life?</i></td></tr>
          <tr><td>1. Hook</td><td>Question / anecdote that introduces the topic.</td></tr>
          <tr><td>2–3. Body</td><td>One paragraph for each question in the task.</td></tr>
          <tr><td>4. Ending</td><td>Your final thought, often addressed to the reader.</td></tr>
        </tbody>
      </table>

      <h3>3. Useful language</h3>
      <ul>
        <li><b>Hooks</b>: <i>Can you remember the last time…? · Imagine a world where… · Believe it or not, …</i></li>
        <li><b>Engaging the reader</b>: <i>I'm sure you'll agree that… · Let's face it, … · You might be surprised to learn that…</i></li>
        <li><b>Balancing</b>: <i>Having said that, … · That's not to say that… · Still, …</i></li>
        <li><b>Endings</b>: <i>So, next time you…, why not…? · Give it a go — you won't regret it!</i></li>
        <li><b>Vivid vocabulary</b> instead of <i>good/bad/nice</i>: <i>breathtaking, gripping, exhausting, invaluable, pointless</i>.</li>
      </ul>
      <p>⚠️ An article is not an essay: no <i>In conclusion</i>, no <i>Firstly / Secondly</i> lists, and you <b>can</b> use contractions and humour.</p>

      <h3>4. Model answer (153 words)</h3>
      <p class="hint"><b>Task</b>: <i>We're looking for articles for our website: "The piece of technology I couldn't live without". Tell us what it is, why it's so important to you, and whether people depend on technology too much.</i></p>
      <div class="model">
        <p><b>My pocket-sized assistant</b></p>
        <p>Can you remember the last time you left home without your phone? I certainly can&#x27;t. For me, my smartphone isn&#x27;t just a gadget – it&#x27;s my alarm clock, my map, my bank and my music player, all in one.</p>
        <p>What I value most, though, is how it keeps me connected. My closest friends live in different countries, but thanks to a simple messaging app, we chat every day as if we lived next door. When I moved to Madrid for work, those messages made me feel much less lonely.</p>
        <p>Having said that, I sometimes wonder whether we&#x27;ve gone too far. How many times have you seen a group of friends in a restaurant, all staring at their screens? I&#x27;m as guilty as anyone, which is why I&#x27;ve started leaving my phone in a drawer after dinner.</p>
        <p>So, could I live without it? Probably – but I&#x27;d rather not have to find out!</p>
      </div>
      <p><b>Why it works</b>: catchy title and a question as a hook · each paragraph answers one question of the task · personal anecdote (moving to Madrid) · talks to the reader (<i>How many times have you seen…?</i>) · <i>Having said that</i> to balance · witty ending · range: <i>as if we lived</i>, <i>I'd rather</i>, <i>which is why</i>, <i>as guilty as</i>.</p>
    `
  },
  {
    id: "writing-review",
    group: "writing",
    emoji: "⭐",
    title: "Review (Part 2)",
    html: `
      <p class="hint">Part 2. About a film, series, book, app, restaurant, course, place… The reader wants to know <b>whether it is worth it</b>. Register: neutral / informal. You must <b>describe</b>, <b>evaluate</b> and <b>recommend</b>.</p>

      <h3>1. Structure</h3>
      <table>
        <thead><tr><th>Paragraph</th><th>Content</th></tr></thead>
        <tbody>
          <tr><td>Title (optional)</td><td>Name + short opinion: <i>Signal from Europa – a slow-burning space thriller</i></td></tr>
          <tr><td>1. Introduction</td><td>What it is, where/when, who it is for. Hint at your opinion.</td></tr>
          <tr><td>2. Description + positives</td><td>Brief summary (<b>no spoilers</b>, present simple) and what you liked, with reasons.</td></tr>
          <tr><td>3. Negatives</td><td>What could be better. A balanced review is more convincing.</td></tr>
          <tr><td>4. Recommendation</td><td>Would you recommend it? <b>To whom</b>? Final verdict.</td></tr>
        </tbody>
      </table>

      <h3>2. Useful language</h3>
      <ul>
        <li><b>Describing</b> (present simple): <i>It tells the story of… · It is set in… · The series follows… · It stars…</i></li>
        <li><b>Positive</b>: <i>What struck me most was… · It is well worth watching / reading / visiting · The highlight is… · gripping, moving, hilarious, stunning, user-friendly</i></li>
        <li><b>Negative</b>: <i>It is not without its faults · The only drawback is… · It is rather slow / predictable / overpriced · I was disappointed by…</i></li>
        <li><b>Recommending</b>: <i>I would highly recommend it to anyone who… · It is a must-see for… · If you like…, you'll love… · Give it a miss if…</i></li>
      </ul>
      <p>⚠️ Avoid <i>very good / very bad</i> — use <b>gradable</b> and <b>extreme</b> adjectives correctly: <i>very interesting</i> but <i>absolutely gripping</i> (✗ <i>very gripping</i>, ✗ <i>absolutely interesting</i>). ⚠️ <i>The film <b>is about</b>…</i>, not ✗ <i>The film talks about…</i>.</p>

      <h3>3. Model answer (150 words)</h3>
      <p class="hint"><b>Task</b>: <i>Write a review of a science fiction film or series you have watched recently for an English-language website. Say what it is about, what you liked or disliked, and whether you would recommend it.</i> (The series is invented.)</p>
      <div class="model">
        <p><b>Signal from Europa – a slow-burning space thriller</b></p>
        <p>If you enjoy science fiction that makes you think, Signal from Europa is definitely worth watching. Released last year, this eight-episode series follows a small team of scientists who receive a mysterious message from one of Jupiter&#x27;s moons.</p>
        <p>The first thing that struck me was how realistic it looks. Instead of epic battles, we see cramped spaceships, endless data and exhausted engineers trying to fix broken equipment. The cast is excellent too, especially the actress who plays the mission commander, a tough but surprisingly sensitive character.</p>
        <p>However, the series is not without its faults. The middle episodes are rather slow, and some viewers may find the scientific dialogue hard to follow.</p>
        <p>Overall, I would highly recommend it to anyone who prefers ideas to explosions. Just be patient: the final two episodes are absolutely gripping, and the ending will stay with you for days.</p>
      </div>
      <p><b>Why it works</b>: title with an opinion · intro says what, when and for whom · description in the present without spoilers · balanced (<i>However, the series is not without its faults</i>) · clear recommendation to a specific audience · vocabulary: <i>struck me, cramped, gripping, slow-burning, worth watching</i>; <i>absolutely</i> with an extreme adjective.</p>
    `
  },
  {
    id: "writing-report",
    group: "writing",
    emoji: "📊",
    title: "Report (Part 2)",
    html: `
      <p class="hint">Part 2. For a manager, teacher or committee. Its purpose is to <b>present information clearly</b> and make <b>recommendations</b>. Register: formal and impersonal. Very close to the reports you may write at work.</p>

      <h3>1. Structure — with headings</h3>
      <table>
        <thead><tr><th>Heading</th><th>Content</th></tr></thead>
        <tbody>
          <tr><td>Title</td><td><i>Report on…</i></td></tr>
          <tr><td>Introduction</td><td>Purpose: <i>The aim / purpose of this report is to…</i></td></tr>
          <tr><td>2–3 sections</td><td>One heading for each point in the task (<i>Course content, Usefulness, Problems…</i>). Facts first, then evaluation.</td></tr>
          <tr><td>Recommendations / Conclusion</td><td>What should be done, based on what you have reported.</td></tr>
        </tbody>
      </table>
      <p>Headings and short bullet points are allowed — and expected. Use the <b>task's own words</b> for the headings: it shows the examiner you covered every point.</p>

      <h3>2. Useful language</h3>
      <ul>
        <li><b>Purpose</b>: <i>The aim of this report is to evaluate / describe / suggest… · This report is based on a survey of…</i></li>
        <li><b>Presenting facts</b> (impersonal, often passive): <i>According to the survey, … · Most participants said / felt that… · It was found that… · A significant number of…</i></li>
        <li><b>Problems</b>: <i>A number of employees complained that… · The main issue appears to be… · As a result, …</i></li>
        <li><b>Recommendations</b> ⚠️: <i>I would recommend <b>moving</b>… · I would recommend <b>that</b> the sessions <b>(should) be</b> moved… · It would be a good idea to… · The company should consider <b>-ing</b>…</i> (✗ <i>I recommend to move</i>)</li>
      </ul>
      <p>⚠️ No <i>Dear…</i> and no informal language. Numbers: <i>80% of participants</i>, <i>most of the employees</i> (✗ <i>the most of</i>).</p>

      <h3>3. Model answer (164 words)</h3>
      <p class="hint"><b>Task</b>: <i>Your manager has asked you to write a report on the English course the company offered last term. Describe what the course included, say how useful it was for employees and recommend improvements.</i></p>
      <div class="model">
        <p><b>Report on the company English course</b></p>
        <p><b>Introduction</b><br>The aim of this report is to evaluate the English course offered to employees last term and to suggest how it could be improved.</p>
        <p><b>Course content</b><br>The course consisted of two weekly online sessions focusing on meetings, emails and presentations. Participants also had access to a digital platform with grammar and vocabulary exercises.</p>
        <p><b>Usefulness</b><br>Most participants found the course very practical. According to a survey, 80% felt more confident when speaking in meetings, and several said that writing emails now takes them less time. However, some employees complained that the sessions were held at the end of the working day, when they were tired, and attendance dropped as a result.</p>
        <p><b>Recommendations</b><br>Based on these findings, I would recommend moving the sessions to the morning. It would also be a good idea to divide participants into smaller groups according to their level, so that everyone can take part more actively. Finally, the course should include more speaking practice.</p>
      </div>
      <p><b>Why it works</b>: headings match the three points of the task · purpose stated in the first sentence · facts with data (<i>According to a survey, 80%…</i>) · impersonal and formal throughout · recommendations follow from the problems found · <i>recommend + -ing</i>, passive (<i>were held</i>), <i>so that</i>, <i>as a result</i>.</p>
    `
  }
];
