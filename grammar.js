// Ejercicios de gramática, por tema (mismo formato que ingles-ari: frase
// con hueco "___" + respuesta(s)). El id de cada item tiene que ser
// estable (se usa como clave del sistema Leitner) — no reordenar ni
// borrar ids ya usados, solo añadir nuevos al final.
// Formato tipo Use of English Part 2 (open cloze): una palabra por hueco.
// Contextos de trabajo/tecnología/espacio a propósito (sirven para el
// examen y para las clases de inglés de la empresa).
// Las respuestas se comparan SIN quitar "to"/"the" iniciales (ver norm()
// en index.html) — si una respuesta los lleva, escribirlos en answers.
const GRAMMAR = {
  "relative-clauses": {
    title: "Relative clauses",
    emoji: "🔗",
    topicId: "relative-clauses",
    items: [
      // who / which / that — defining
      { id: "rel1", text: "The engineer ___ fixed the outage works in our Madrid office.", answers: ["who", "that"] },
      { id: "rel2", text: "The server ___ crashed last night has already been replaced.", answers: ["which", "that"] },
      { id: "rel3", text: "The company ___ I work for has offices in five countries.", answers: ["that", "which"] },
      { id: "rel4", text: "The planet ___ they discovered last year might have liquid water.", answers: ["that", "which"] },
      // non-defining: never "that"
      { id: "rel5", text: "Our CTO, ___ joined the company in 2019, is giving the keynote.", answers: ["who"] },
      { id: "rel6", text: "The new VPN, ___ took months to configure, is finally working.", answers: ["which"] },
      { id: "rel7", text: "Mars, ___ is often called the Red Planet, is smaller than Earth.", answers: ["which"] },
      { id: "rel8", text: "The team leader, ___ I spoke to yesterday, agreed to extend the deadline.", answers: ["who", "whom"] },
      // "which" = the whole previous clause (error diagnosticado)
      { id: "rel9", text: "The meeting ran two hours over, ___ meant I missed my train.", answers: ["which"] },
      { id: "rel10", text: "The client approved the budget, ___ made the whole team very happy.", answers: ["which"] },
      { id: "rel11", text: "The deployment failed three times, ___ is why we rolled back.", answers: ["which"] },
      { id: "rel12", text: "He passed the B2 exam on his first attempt, ___ surprised nobody.", answers: ["which"] },
      { id: "rel13", text: "The ticket was closed without a fix, ___ really annoyed the users.", answers: ["which"] },
      // whose
      { id: "rel14", text: "That's the colleague ___ laptop was stolen at the conference.", answers: ["whose"] },
      { id: "rel15", text: "The astronaut, ___ mission lasted a whole year, wrote a book about it.", answers: ["whose"] },
      { id: "rel16", text: "We chose the API ___ documentation was the clearest.", answers: ["whose"] },
      // where / when / why
      { id: "rel17", text: "This is the data centre ___ all our backups are stored.", answers: ["where"] },
      { id: "rel18", text: "The office ___ I had my first job has been turned into flats.", answers: ["where"] },
      { id: "rel19", text: "2019 was the year ___ I started working in DevOps.", answers: ["when", "that"] },
      { id: "rel20", text: "Nobody explained the reason ___ the release was delayed.", answers: ["why", "that"] },
      // what = the thing that
      { id: "rel21", text: "___ I need right now is a clear deadline.", answers: ["what"] },
      { id: "rel22", text: "I don't understand ___ the client is asking for.", answers: ["what"] },
      // formal: preposition + whom/which, quantifier + of whom/which
      { id: "rel23", text: "The person to ___ you should send the report is Ms Patel.", answers: ["whom"] },
      { id: "rel24", text: "There were twelve candidates, most of ___ had cloud experience.", answers: ["whom"] },
      { id: "rel25", text: "We tested three tools, none of ___ worked offline.", answers: ["which"] },
      { id: "rel26", text: "This is the framework on ___ the whole platform is built.", answers: ["which"] },
      // alineado con la clase del trabajo: definiciones, relative adverbs, identificar, non-defining
      { id: "rel27", text: "A load balancer is a device ___ distributes traffic between servers.", answers: ["that", "which"] },
      { id: "rel28", text: "A stakeholder is a person ___ has an interest in a project.", answers: ["who", "that"] },
      { id: "rel29", text: "I clearly remember the day ___ our startup got its first client.", answers: ["when", "that"] },
      { id: "rel30", text: "This is the room ___ the daily stand-up takes place.", answers: ["where"] },
      { id: "rel31", text: "My manager is the woman ___ is sitting next to the window.", answers: ["who", "that"] },
      { id: "rel32", text: "Ms García, ___ I met at the kick-off, is head of Procurement.", answers: ["who", "whom"] },
      { id: "rel33", text: "The cloud budget, ___ is quite limited, will be reviewed in January.", answers: ["which"] },
      { id: "rel34", text: "Do you know the startup ___ founder used to work at NASA?", answers: ["whose"] }
    ]
  },
  "present-perfect": {
    title: "Present perfect vs past simple",
    emoji: "⏳",
    topicId: "present-perfect",
    items: [
      // tiempo terminado vs conectado con el presente
      { id: "pp1", text: "I ___ (work) here since 2020.", answers: ["have worked", "have been working"] },
      { id: "pp2", text: "We ___ (migrate) the database last weekend.", answers: ["migrated"] },
      { id: "pp3", text: "She ___ (be) our team lead for three years, and she's great.", answers: ["has been"] },
      { id: "pp4", text: "I ___ (start) this job two years ago.", answers: ["started"] },
      { id: "pp5", text: "The server ___ (crash) three times this week — and it's only Wednesday.", answers: ["has crashed"] },
      { id: "pp6", text: "The server ___ (crash) three times last week.", answers: ["crashed"] },
      { id: "pp7", text: "Humans first ___ (land) on the Moon in 1969.", answers: ["landed"] },
      { id: "pp8", text: "Have you ever ___ (use) Terraform in production?", answers: ["used"] },
      { id: "pp9", text: "This is the first time I ___ (give) a presentation in English.", answers: ["have given"] },
      { id: "pp10", text: "It's two years since I last ___ (see) her.", answers: ["saw"] },
      { id: "pp11", text: "I ___ (not see) her for two years.", answers: ["haven't seen", "have not seen"] },
      { id: "pp12", text: "The release is late because we ___ (not finish) the tests yet.", answers: ["haven't finished", "have not finished"] },
      { id: "pp13", text: "I'm exhausted — I ___ (debug) this code all morning.", answers: ["have been debugging"] },
      // for / since / ago
      { id: "pp14", text: "I've lived in Madrid ___ 2015.", answers: ["since"] },
      { id: "pp15", text: "I've lived in Madrid ___ eleven years.", answers: ["for"] },
      { id: "pp16", text: "She left the company three months ___.", answers: ["ago"] },
      { id: "pp17", text: "How long ___ you known your manager?", answers: ["have"] },
      // been / gone
      { id: "pp18", text: "Where's Ana? — She's ___ to the client's office. She'll be back at five.", answers: ["gone"] },
      { id: "pp19", text: "I've ___ to Houston twice, but I've never seen a rocket launch.", answers: ["been"] },
      // just / already / yet
      { id: "pp20", text: "Don't send the invoice — I've ___ sent it.", answers: ["already"] },
      { id: "pp21", text: "Has the client replied ___?", answers: ["yet"] },
      { id: "pp22", text: "I've ___ finished the report, literally two minutes ago.", answers: ["just"] }
    ]
  },
  "verb-patterns": {
    title: "Verb patterns: -ing vs to + infinitive",
    emoji: "🔀",
    topicId: "verb-patterns",
    items: [
      // recommend + -ing (error fosilizado: varias frases a propósito)
      { id: "vp1", text: "I'd recommend ___ (use) a password manager.", answers: ["using"] },
      { id: "vp2", text: "Our consultant recommended ___ (move) the servers to the cloud.", answers: ["moving"] },
      { id: "vp3", text: "I really recommend ___ (read) the documentation first.", answers: ["reading"] },
      // verb + -ing
      { id: "vp4", text: "She suggested ___ (postpone) the meeting until Monday.", answers: ["postponing"] },
      { id: "vp5", text: "You should avoid ___ (deploy) on Fridays.", answers: ["deploying"] },
      { id: "vp6", text: "Have you finished ___ (write) the report?", answers: ["writing"] },
      { id: "vp7", text: "Would you mind ___ (share) your screen?", answers: ["sharing"] },
      { id: "vp8", text: "We're considering ___ (hire) another DevOps engineer.", answers: ["hiring"] },
      { id: "vp9", text: "The engineers kept ___ (try) until the rocket engine finally fired.", answers: ["trying"] },
      // verb + to + infinitive
      { id: "vp10", text: "We decided ___ (migrate) to Kubernetes.", answers: ["to migrate"] },
      { id: "vp11", text: "They refused ___ (sign) the contract.", answers: ["to sign"] },
      { id: "vp12", text: "I can't afford ___ (lose) this client.", answers: ["to lose"] },
      { id: "vp13", text: "We managed ___ (fix) the bug before the demo.", answers: ["to fix"] },
      { id: "vp14", text: "The vendor promised ___ (deliver) the patch this week.", answers: ["to deliver"] },
      // remember / stop
      { id: "vp15", text: "Remember ___ (lock) your laptop before you leave your desk.", answers: ["to lock"] },
      { id: "vp16", text: "I remember ___ (install) this version, but now it's gone.", answers: ["installing"] },
      { id: "vp17", text: "He stopped ___ (smoke) last year and feels much better.", answers: ["smoking"] },
      { id: "vp18", text: "On the way to the office, I stopped ___ (buy) a coffee.", answers: ["to buy"] },
      // preposición + -ing (incluido "to" preposición)
      { id: "vp19", text: "I look forward to ___ (hear) from you.", answers: ["hearing"] },
      { id: "vp20", text: "I'm used to ___ (work) remotely — I've done it for years.", answers: ["working"] },
      { id: "vp21", text: "She's thinking about ___ (take) the B2 exam in December.", answers: ["taking"] },
      { id: "vp22", text: "Never push to production without ___ (test) first.", answers: ["testing"] },
      // ampliación Learnlight: forget / regret / try, verbo + objeto + to, get used to
      { id: "vp23", text: "I'll never forget ___ (see) my first rocket launch live.", answers: ["seeing"] },
      { id: "vp24", text: "I forgot ___ (send) the invoice — I'll do it right now.", answers: ["to send"] },
      { id: "vp25", text: "We regret ___ (inform) you that the event has been cancelled.", answers: ["to inform"] },
      { id: "vp26", text: "I regret ___ (not / learn) English when I was younger.", answers: ["not learning"] },
      { id: "vp27", text: "Try ___ (restart) the router — that usually fixes it.", answers: ["restarting"] },
      { id: "vp28", text: "I tried ___ (open) the file, but it was corrupted.", answers: ["to open"] },
      { id: "vp29", text: "Our manager encouraged us ___ (take) the B2 exam this year.", answers: ["to take"] },
      { id: "vp30", text: "IT warned us ___ (not / click) on suspicious links.", answers: ["not to click"] },
      { id: "vp31", text: "The consultant persuaded the CEO ___ (invest) more in security.", answers: ["to invest"] },
      { id: "vp32", text: "It took me months to get used to ___ (wake) up at 6 a.m.", answers: ["waking"] },
      { id: "vp33", text: "I prefer ___ (work) on hard problems in the morning.", answers: ["working", "to work"] }
    ]
  },
  "word-formation": {
    title: "Word formation (Part 3)",
    emoji: "🧩",
    topicId: "word-formation",
    items: [
      // verbo -> sustantivo (punto débil)
      { id: "wf1", text: "The ___ of the new CRM took three months. (IMPLEMENT)", answers: ["implementation"] },
      { id: "wf2", text: "The ___ of the new servers was delayed by customs. (ARRIVE)", answers: ["arrival"] },
      { id: "wf3", text: "She made the ___ to leave the project. (DECIDE)", answers: ["decision"] },
      { id: "wf4", text: "The launch was delayed, which was a big ___ for the team. (DISAPPOINT)", answers: ["disappointment"] },
      { id: "wf5", text: "The ___ of the space station was a huge international effort. (CONSTRUCT)", answers: ["construction"] },
      { id: "wf6", text: "Write a short ___ of the problem in the ticket. (DESCRIBE)", answers: ["description"] },
      { id: "wf7", text: "After months of ___, we finally signed the contract. (NEGOTIATE)", answers: ["negotiations", "negotiation"] },
      { id: "wf8", text: "Over two million ___ came to the space museum last year. (VISIT)", answers: ["visitors"] },
      // adjetivo -> sustantivo
      { id: "wf9", text: "Security is everyone's ___. (RESPONSIBLE)", answers: ["responsibility"] },
      { id: "wf10", text: "His ___ to learn new tools impressed the interviewers. (WILLING)", answers: ["willingness"] },
      { id: "wf11", text: "Debugging legacy code requires a lot of ___. (PATIENT)", answers: ["patience"] },
      // -> adjetivo
      { id: "wf12", text: "The update was completely ___ — nothing changed after installing it. (USE)", answers: ["useless"] },
      { id: "wf13", text: "Changing the config by hand is ___ — use Terraform instead. (RISK)", answers: ["risky"] },
      { id: "wf14", text: "The new process is much more ___ than the old one. (EFFECT)", answers: ["effective"] },
      // -> adverbio
      { id: "wf15", text: "Please read the instructions ___. (CARE)", answers: ["carefully"] },
      { id: "wf16", text: "Storing passwords in plain text is ___ dangerous. (EXTREME)", answers: ["extremely"] },
      { id: "wf17", text: "The dashboard ___ refreshes every five minutes. (AUTOMATIC)", answers: ["automatically"] },
      { id: "wf18", text: "The rocket travelled ___ fast. (INCREDIBLE)", answers: ["incredibly"] },
      { id: "wf19", text: "The job interview was ___ relaxed. (SURPRISE)", answers: ["surprisingly"] },
      { id: "wf20", text: "We back up the database ___. (REGULAR)", answers: ["regularly"] },
      // prefijos negativos (y dobles cambios)
      { id: "wf21", text: "It's ___ to access production without the VPN. (POSSIBLE)", answers: ["impossible"] },
      { id: "wf22", text: "Sharing credentials on Slack is totally ___. (RESPONSIBLE)", answers: ["irresponsible"] },
      { id: "wf23", text: "Installing pirated software on a work laptop is ___. (LEGAL)", answers: ["illegal"] },
      { id: "wf24", text: "The website will be ___ during the maintenance window. (AVAILABLE)", answers: ["unavailable"] },
      { id: "wf25", text: "The server went down ___, in the middle of the demo. (EXPECT)", answers: ["unexpectedly"] }
    ]
  },
  "unreal-past": {
    title: "Unreal past: wish, if only, would rather",
    emoji: "🌀",
    topicId: "unreal-past",
    items: [
      // wish + past perfect (arrepentimiento)
      { id: "up1", text: "I wish I ___ (study) harder for the exam.", answers: ["had studied"] },
      { id: "up2", text: "If only we ___ (not deploy) on Friday!", answers: ["hadn't deployed", "had not deployed"] },
      { id: "up3", text: "I wish I ___ (not accept) that job offer — the project was a disaster.", answers: ["hadn't accepted", "had not accepted"] },
      { id: "up4", text: "I wish you ___ (tell) me about the change yesterday.", answers: ["had told"] },
      // wish + past simple (presente)
      { id: "up5", text: "I wish I ___ (speak) better English in meetings.", answers: ["spoke", "could speak"] },
      { id: "up6", text: "I wish I ___ (be) on the first mission to Mars.", answers: ["were", "was"] },
      { id: "up7", text: "If only I ___ (have) more time to prepare.", answers: ["had"] },
      { id: "up8", text: "I wish I ___ (can) come to the launch, but I'm on call.", answers: ["could"] },
      // wish + would
      { id: "up9", text: "I wish my colleague ___ (stop) interrupting me.", answers: ["would stop"] },
      { id: "up10", text: "I wish it ___ (stop) raining.", answers: ["would stop"] },
      // it's time / would rather / as if
      { id: "up11", text: "It's time we ___ (update) this legacy system.", answers: ["updated"] },
      { id: "up12", text: "It's high time the company ___ (invest) in security.", answers: ["invested"] },
      { id: "up13", text: "I'd rather you ___ (not share) the password on Slack.", answers: ["didn't share", "did not share"] },
      { id: "up14", text: "I'd rather ___ (work) from home tomorrow.", answers: ["work"] },
      { id: "up15", text: "He talks as if he ___ (invent) the internet.", answers: ["had invented", "invented"] },
      { id: "up16", text: "She looked as if she ___ (see) a ghost.", answers: ["had seen"] },
      // conexión con el 3er condicional
      { id: "up17", text: "If I ___ (know) about the outage, I would have called you.", answers: ["had known"] }
    ]
  },
  "conditionals": {
    title: "Conditionals + unless, in case, if vs because",
    emoji: "🔮",
    topicId: "conditionals",
    items: [
      // zero / first (nunca will en la cláusula if)
      { id: "cd1", text: "If the build ___ (fail), the pipeline stops automatically.", answers: ["fails"] },
      { id: "cd2", text: "If the client ___ (approve) the budget tomorrow, we'll start on Monday.", answers: ["approves"] },
      { id: "cd3", text: "If we don't fix this bug, the users ___ (complain).", answers: ["will complain"] },
      { id: "cd4", text: "I'll call you as soon as the deployment ___ (finish).", answers: ["finishes"] },
      { id: "cd5", text: "If the rocket ___ (launch) on time tomorrow, it will reach the station on Friday.", answers: ["launches"] },
      // second
      { id: "cd6", text: "If I ___ (have) more time, I would learn Rust.", answers: ["had"] },
      { id: "cd7", text: "If I were you, I ___ (ask) for a pay rise.", answers: ["would ask"] },
      { id: "cd8", text: "If humans ___ (live) on Mars, they would need artificial gravity.", answers: ["lived"] },
      { id: "cd9", text: "If I ___ (be) the CTO, I'd ban deployments on Fridays.", answers: ["were", "was"] },
      { id: "cd10", text: "What ___ you do if you lost your job tomorrow?", answers: ["would"] },
      // third
      { id: "cd11", text: "If we ___ (test) the update, we wouldn't have lost the data.", answers: ["had tested"] },
      { id: "cd12", text: "If you had told me about the outage, I ___ (come) in earlier.", answers: ["would have come"] },
      { id: "cd13", text: "The mission ___ (not fail) if the engineers had checked the units.", answers: ["wouldn't have failed", "would not have failed"] },
      // mixed
      { id: "cd14", text: "If I had accepted that job in London, I ___ (live) there now.", answers: ["would be living", "would live"] },
      { id: "cd15", text: "If she ___ (study) harder last year, she would have her B2 certificate now.", answers: ["had studied"] },
      { id: "cd16", text: "If I ___ (not be) so bad at maths, I would have studied engineering.", answers: ["weren't", "were not", "wasn't", "was not"] },
      // unless / as long as / provided / in case
      { id: "cd17", text: "We won't meet the deadline ___ we get more people on the team.", answers: ["unless"] },
      { id: "cd18", text: "You can work from home as ___ as you attend the Monday meeting.", answers: ["long"] },
      { id: "cd19", text: "Take your laptop charger in ___ the meeting runs late.", answers: ["case"] },
      { id: "cd20", text: "You can use the test server, ___ that you don't change the config.", answers: ["provided", "providing"] },
      // if vs because (error diagnosticado)
      { id: "cd21", text: "I'm learning English ___ my company needs it for international clients.", answers: ["because"] },
      { id: "cd22", text: "I'll join the call ___ I finish my other meeting in time.", answers: ["if"] },
      { id: "cd23", text: "She got the job ___ she speaks three languages fluently.", answers: ["because"] },
      { id: "cd24", text: "We'll cancel the launch ___ the weather is bad on Thursday.", answers: ["if"] },
      // ampliación Learnlight: on condition that, so long as, whether
      { id: "cd25", text: "You can use the client data on ___ that it stays anonymous.", answers: ["condition"] },
      { id: "cd26", text: "So ___ as the tests pass, we can deploy tonight.", answers: ["long"] },
      { id: "cd27", text: "Please let me know ___ or not you can attend the workshop.", answers: ["whether"] }
    ]
  },
  "passive": {
    title: "Passive voice + causative",
    emoji: "🔄",
    topicId: "passive",
    items: [
      // pasiva en distintos tiempos
      { id: "ps1", text: "English ___ (speak) in all our international meetings.", answers: ["is spoken"] },
      { id: "ps2", text: "The server ___ (restart) at 3 a.m. last night.", answers: ["was restarted"] },
      { id: "ps3", text: "The new office ___ (build) at the moment, so we're working from home.", answers: ["is being built"] },
      { id: "ps4", text: "All the passwords ___ (change) since the security incident.", answers: ["have been changed"] },
      { id: "ps5", text: "The final report ___ (send) to the client tomorrow.", answers: ["will be sent"] },
      { id: "ps6", text: "By the time I logged in, the ticket ___ (close).", answers: ["had been closed"] },
      { id: "ps7", text: "The tests ___ (run) when the power went off.", answers: ["were being run"] },
      { id: "ps8", text: "The first human ___ (send) into space in 1961.", answers: ["was sent"] },
      { id: "ps9", text: "The meeting ___ (cancel) because the CEO was ill.", answers: ["was cancelled", "was canceled"] },
      { id: "ps10", text: "I ___ (give) access to the production cluster yesterday.", answers: ["was given"] },
      // modales
      { id: "ps11", text: "This bug should ___ (fix) before the release.", answers: ["be fixed"] },
      { id: "ps12", text: "The contract must ___ (sign) by Friday.", answers: ["be signed"] },
      { id: "ps13", text: "The release should ___ (test) more carefully — now we have a bug in production.", answers: ["have been tested"] },
      // by / intransitivos / -ing / need
      { id: "ps14", text: "The data centre was designed ___ a team of Danish engineers.", answers: ["by"] },
      { id: "ps15", text: "The accident ___ (happen) during the night shift.", answers: ["happened"] },
      { id: "ps16", text: "I hate ___ (interrupt) when I'm explaining something.", answers: ["being interrupted"] },
      { id: "ps17", text: "This documentation is out of date. It needs ___ (update).", answers: ["to be updated", "updating"] },
      // reporting passive (se dice que...)
      { id: "ps18", text: "It ___ (say) that the company is going to be sold.", answers: ["is said"] },
      { id: "ps19", text: "The CEO is believed ___ (resign) last week.", answers: ["to have resigned"] },
      { id: "ps20", text: "Mars is thought ___ (have) water under its surface.", answers: ["to have"] },
      { id: "ps21", text: "It ___ (claim) that the research was biased, but nobody has proved it.", answers: ["is claimed", "has been claimed"] },
      // causativa: have/get something done
      { id: "cs1", text: "I'm ___ my laptop repaired — it'll be ready on Monday.", answers: ["having", "getting"] },
      { id: "cs2", text: "We had the office ___ (paint) last month.", answers: ["painted"] },
      { id: "cs3", text: "I need to get my eyes ___ (test) — I can't read the screen.", answers: ["tested"] },
      { id: "cs4", text: "She had her phone ___ (steal) at the conference.", answers: ["stolen"] },
      { id: "cs5", text: "I had my hair ___ (cut) at the hairdresser's yesterday.", answers: ["cut"] },
      { id: "cs6", text: "We're going to ___ our website redesigned by an agency.", answers: ["have", "get"] },
      // causativa activa: have someone do / get someone to do
      { id: "cs7", text: "I'll get IT ___ (reset) my password.", answers: ["to reset"] },
      { id: "cs8", text: "The manager had the intern ___ (check) the logs.", answers: ["check"] }
    ]
  },
  "modals": {
    title: "Modals: obligation, permission, ability, advice",
    emoji: "🧭",
    topicId: "modals",
    items: [
      // obligación / mustn't vs don't have to
      { id: "mo1", text: "You ___ wear a suit — the dress code here is casual.", answers: ["don't have to", "do not have to", "don't need to", "do not need to", "needn't", "need not"] },
      { id: "mo2", text: "You ___ share your password with anyone. It's against company policy.", answers: ["mustn't", "must not", "can't", "cannot"] },
      { id: "mo3", text: "In my last job, I ___ (have to) work every other weekend.", answers: ["had to"] },
      { id: "mo4", text: "Do I ___ to sign this form now, or can I do it tomorrow?", answers: ["have", "need"] },
      { id: "mo5", text: "Astronauts ___ exercise for about two hours a day on the space station.", answers: ["have to", "must", "need to"] },
      { id: "mo6", text: "You ___ (not / bring) your laptop — we had spare ones in the room.", answers: ["needn't have brought", "need not have brought", "didn't need to bring", "did not need to bring"] },
      // permiso / prohibición
      { id: "mo7", text: "Employees ___ allowed to work from home on Fridays.", answers: ["are"] },
      { id: "mo8", text: "___ I use your charger? — Of course, go ahead.", answers: ["can", "could", "may"] },
      { id: "mo9", text: "Visitors ___ not use the lifts during a fire alarm.", answers: ["may", "must"] },
      { id: "mo10", text: "She was ___ to leave early yesterday because she had a doctor's appointment.", answers: ["allowed"] },
      // habilidad
      { id: "mo11", text: "I'm afraid I ___ attend the meeting tomorrow — I'm on a training course.", answers: ["won't be able to", "will not be able to"] },
      { id: "mo12", text: "By next year, I hope I ___ speak English fluently in meetings.", answers: ["will be able to"] },
      { id: "mo13", text: "When I was a teenager, I ___ code for hours without getting tired.", answers: ["could"] },
      { id: "mo14", text: "The server crashed, but we ___ to restore it from the backup.", answers: ["managed", "were able"] },
      { id: "mo15", text: "I ___ (explain) it to him, but I didn't have time.", answers: ["could have explained"] },
      // consejo / crítica
      { id: "mo16", text: "You'd ___ save your work now — the system will restart in two minutes.", answers: ["better"] },
      { id: "mo17", text: "You ___ to inform HR about any changes to your schedule.", answers: ["ought"] },
      { id: "mo18", text: "We ___ (test) the update before deploying it. Now production is broken.", answers: ["should have tested"] },
      { id: "mo19", text: "I ___ (send) that angry email. My manager was really upset.", answers: ["shouldn't have sent", "should not have sent"] },
      // ofrecimientos / sugerencias / peticiones
      { id: "mo20", text: "Would you mind ___ (check) these figures for me?", answers: ["checking"] },
      { id: "mo21", text: "___ I help you with those boxes? — Yes, that's really kind of you.", answers: ["shall", "can"] },
      { id: "mo22", text: "___ we discuss it over lunch? — Sounds great.", answers: ["shall"] },
      { id: "mo23", text: "Do you mind if I open the window? — Not at ___. Go ahead.", answers: ["all"] }
    ]
  },
  "modals-deduction": {
    title: "Modals of deduction: must, might, can't (have)",
    emoji: "🕵️",
    topicId: "modals-deduction",
    items: [
      // presente
      { id: "md1", text: "Her calendar says \"Client call 10–11\" and it's 10:30. She ___ be on the call.", answers: ["must"] },
      { id: "md2", text: "He ___ be the new CTO — he looks about nineteen!", answers: ["can't", "cannot", "couldn't"] },
      { id: "md3", text: "Take an umbrella. It ___ rain later, but the forecast isn't sure.", answers: ["might", "may", "could"] },
      { id: "md4", text: "It's Tuesday at ten and the alarm is ringing. They ___ be testing it again — they always do it at this time.", answers: ["must"] },
      { id: "md5", text: "We ___ have more bugs than we thought — let's run the full test suite to check.", answers: ["might", "may", "could"] },
      { id: "md6", text: "The client ___ be happy about the delay — they wanted it last week.", answers: ["can't", "cannot"] },
      // pasado
      { id: "md7", text: "The office is dark. Everyone ___ have gone home.", answers: ["must"] },
      { id: "md8", text: "She ___ have read my email — I only sent it a minute ago and she's on a plane.", answers: ["can't", "couldn't", "cannot"] },
      { id: "md9", text: "I can't find my badge. I ___ have left it at home, or maybe in the car.", answers: ["might", "may", "could"] },
      { id: "md10", text: "Paul's never late. He ___ have missed the train — it's the only explanation.", answers: ["must"] },
      { id: "md11", text: "The deployment ___ have failed — the logs show no errors at all.", answers: ["can't", "couldn't", "cannot"] },
      { id: "md12", text: "They're not online. They ___ not have seen the message yet.", answers: ["might", "may"] },
      { id: "md13", text: "The signal arrived an hour ago. The rover ___ (land) on Mars by now.", answers: ["must have landed"] },
      { id: "md14", text: "I'm not sure where Marta is. She ___ (go) to lunch.", answers: ["might have gone", "may have gone", "could have gone"] },
      { id: "md15", text: "You ___ (be) exhausted after last night's shift!", answers: ["must have been"] },
      { id: "md16", text: "He ___ (not / write) this code — he doesn't know Python at all.", answers: ["can't have written", "couldn't have written", "cannot have written"] },
      // predicción
      { id: "md17", text: "Look at those dark clouds. It's ___ to rain.", answers: ["going"] },
      { id: "md18", text: "Don't worry about the demo — it ___ go fine. You've practised a lot.", answers: ["will", "should"] }
    ]
  },
  "comparison": {
    title: "Comparison: comparatives, superlatives, as…as",
    emoji: "⚖️",
    topicId: "comparison",
    items: [
      // formación
      { id: "cp1", text: "The new laptop is much ___ (fast) than the old one.", answers: ["faster"] },
      { id: "cp2", text: "This year's budget is ___ (big) than last year's.", answers: ["bigger"] },
      { id: "cp3", text: "For me, debugging is ___ (easy) than writing documentation.", answers: ["easier"] },
      { id: "cp4", text: "The new dashboard is ___ (useful) than the old one.", answers: ["more useful"] },
      { id: "cp5", text: "Our support team is ___ (good) than it was two years ago.", answers: ["better"] },
      { id: "cp6", text: "The traffic was even ___ (bad) today than yesterday.", answers: ["worse"] },
      { id: "cp7", text: "This is the ___ (expensive) cloud provider we've ever used.", answers: ["most expensive"] },
      { id: "cp8", text: "Jupiter is the ___ (large) planet in the solar system.", answers: ["largest"] },
      { id: "cp9", text: "That was the ___ (bad) presentation I've ever given.", answers: ["worst"] },
      { id: "cp10", text: "Could you speak a bit more ___ (slow), please?", answers: ["slowly"] },
      { id: "cp11", text: "She works ___ (hard) than anyone else in the team.", answers: ["harder"] },
      { id: "cp12", text: "The probe travelled ___ (far) than any previous mission.", answers: ["further", "farther"] },
      { id: "cp13", text: "My colleague is two years older than ___ (I).", answers: ["me", "I am"] },
      // modificadores
      { id: "cp14", text: "She's by ___ the best engineer in the team.", answers: ["far"] },
      { id: "cp15", text: "The new version is only a ___ faster — the difference is tiny.", answers: ["bit", "little"] },
      { id: "cp16", text: "The migration was ___ more complicated than we expected — it took twice as long.", answers: ["much", "far", "even", "considerably", "way"] },
      // as...as (error diagnosticado)
      { id: "cp17", text: "I hope you enjoy the conference as much ___ I did.", answers: ["as"] },
      { id: "cp18", text: "The new office isn't ___ big as the old one.", answers: ["as", "so"] },
      { id: "cp19", text: "This server is twice ___ fast as the old one.", answers: ["as"] },
      { id: "cp20", text: "My laptop is the same ___ yours.", answers: ["as"] },
      { id: "cp21", text: "I don't earn ___ much as my manager.", answers: ["as", "so"] },
      { id: "cp22", text: "We received ___ many complaints as last month — no improvement at all.", answers: ["as"] },
      // dobles comparativos
      { id: "cp23", text: "The ___ you practise, the easier it gets.", answers: ["more"] },
      { id: "cp24", text: "The sooner we start, the ___ (early) we'll finish.", answers: ["earlier"] },
      { id: "cp25", text: "Cloud costs are getting higher and ___.", answers: ["higher"] },
      { id: "cp26", text: "English is becoming more and ___ important in my job.", answers: ["more"] },
      // superlativos: ever, one of + plural, in/of
      { id: "cp27", text: "It's the best talk I've ___ seen.", answers: ["ever"] },
      { id: "cp28", text: "She's one of the most talented ___ (developer) in the company.", answers: ["developers"] },
      { id: "cp29", text: "He's the most experienced engineer ___ the department.", answers: ["in"] },
      // less / fewer
      { id: "cp30", text: "We had ___ bugs this sprint than last sprint.", answers: ["fewer"] },
      { id: "cp31", text: "I spend ___ time in meetings now, thank goodness.", answers: ["less"] }
    ]
  }
};
