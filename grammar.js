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
  },
  "so-such": {
    title: "Linkers: so, so that, so…that, such (a)…that",
    emoji: "🎯",
    topicId: "so-such",
    items: [
      // so = resultado / because = causa
      { id: "ss1", text: "The server was down, ___ we worked offline all morning.", answers: ["so"] },
      { id: "ss2", text: "We worked offline all morning ___ the server was down.", answers: ["because", "as", "since"] },
      // so that = finalidad
      { id: "ss3", text: "I left the office early so ___ I could catch the last train.", answers: ["that"] },
      { id: "ss4", text: "Send me the logs so that I ___ check what went wrong.", answers: ["can", "could"] },
      { id: "ss5", text: "I wrote the password policy down so that I ___ forget it.", answers: ["wouldn't", "won't"] },
      // so + adjetivo / adverbio
      { id: "ss6", text: "The deployment was ___ slow that we cancelled it.", answers: ["so"] },
      { id: "ss7", text: "She types ___ fast that nobody can keep up with her.", answers: ["so"] },
      { id: "ss8", text: "The meeting was so long ___ half the team fell asleep.", answers: ["that"] },
      // so + much / many / few / little
      { id: "ss9", text: "There were so ___ bugs that we postponed the release.", answers: ["many"] },
      { id: "ss10", text: "We had so ___ time that we skipped the tests.", answers: ["little"] },
      { id: "ss11", text: "I've got so ___ work this week that I can't take a day off.", answers: ["much"] },
      // such + a/an + adjetivo + sustantivo
      { id: "ss12", text: "It was ___ a long meeting that I missed lunch.", answers: ["such"] },
      { id: "ss13", text: "It was such ___ long meeting that I missed lunch.", answers: ["a"] },
      { id: "ss14", text: "She's such ___ efficient manager that projects always finish on time.", answers: ["an"] },
      { id: "ss15", text: "They're ___ old computers that they can't run the new IDE.", answers: ["such"] },
      { id: "ss16", text: "She gave me ___ useful advice about the interview.", answers: ["such"] },
      { id: "ss17", text: "We had such a ___ of work that we stayed until nine.", answers: ["lot"] },
      // so vs such: el sustantivo decide
      { id: "ss18", text: "The weather was ___ bad that the launch was postponed.", answers: ["so"] },
      { id: "ss19", text: "It was ___ bad weather that the launch was postponed.", answers: ["such"] },
      { id: "ss20", text: "The new office is ___ modern! I love it.", answers: ["so"] },
      { id: "ss21", text: "It's ___ a modern office! I love it.", answers: ["such"] },
      { id: "ss22", text: "The demo went so well ___ the client signed the contract the same day.", answers: ["that"] }
    ]
  },
  "phrasal-verbs": {
    title: "Phrasal verbs & collocations (take up, have a go, turn up…)",
    emoji: "🧗",
    topicId: "phrasal-verbs",
    items: [
      // take up
      { id: "pv1", text: "I took ___ chess during lockdown and now I play every week.", answers: ["up"] },
      { id: "pv2", text: "My manager has ___ up running — she does a half marathon every year.", answers: ["taken"] },
      { id: "pv3", text: "Climbing looked fun, so I decided to take ___ up.", answers: ["it"] },
      { id: "pv4", text: "Meetings take ___ half of my working day.", answers: ["up"] },
      // have a go
      { id: "pv5", text: "I've never used Terraform, but I'll have ___ go.", answers: ["a"] },
      { id: "pv6", text: "Why don't you have a ___ at fixing the bug yourself?", answers: ["go"] },
      { id: "pv7", text: "She had a go ___ writing the deployment script.", answers: ["at"] },
      // turn up
      { id: "pv8", text: "Only five people turned ___ to the product demo.", answers: ["up"] },
      { id: "pv9", text: "The technician ___ up two hours late. (turn)", answers: ["turned"] },
      // get / be used to
      { id: "pv10", text: "I'm getting used to ___ (work) from home.", answers: ["working"] },
      { id: "pv11", text: "It took me months to get ___ to the new IDE.", answers: ["used"] },
      { id: "pv12", text: "I'm not used ___ getting up so early.", answers: ["to"] },
      { id: "pv13", text: "I ___ to work in a bank, but now I'm a developer.", answers: ["used"] },
      // take risks
      { id: "pv14", text: "Start-ups have to ___ risks to grow.", answers: ["take"] },
      { id: "pv15", text: "Don't take ___ risk — make a backup before you upgrade.", answers: ["a", "the"] },
      // take part in
      { id: "pv16", text: "Our team took ___ in a hackathon last weekend.", answers: ["part"] },
      { id: "pv17", text: "Twenty people took part ___ the workshop.", answers: ["in"] },
      // keep a promise
      { id: "pv18", text: "He promised to fix it by Friday, and he ___ his promise. (keep)", answers: ["kept"] },
      { id: "pv19", text: "Don't ___ a promise you can't keep.", answers: ["make"] },
      { id: "pv20", text: "She was angry because he had ___ his promise. (no la cumplió)", answers: ["broken"] }
    ]
  },
  "get": {
    title: "GET: one verb, many meanings",
    emoji: "🔑",
    topicId: "get",
    items: [
      // get + noun
      { id: "gt1", text: "She ___ a new job at a satellite company last month. (get)", answers: ["got"] },
      { id: "gt2", text: "Did you ___ my email about the release?", answers: ["get", "receive"] },
      { id: "gt3", text: "Are you ___ a new laptop, or are you keeping the old one? (get)", answers: ["getting"] },
      // get + adjective / comparative
      { id: "gt4", text: "It's ___ dark — let's go home. (get)", answers: ["getting"] },
      { id: "gt5", text: "Your English is getting ___ every week. (good)", answers: ["better"] },
      { id: "gt6", text: "Get ___ — the meeting starts in five minutes!", answers: ["ready"] },
      { id: "gt7", text: "They're getting ___ next summer. (casarse)", answers: ["married"] },
      // get + past participle
      { id: "gt8", text: "He got ___ for leaking client data. (fire)", answers: ["fired", "sacked"] },
      { id: "gt9", text: "She got ___ to team lead last year. (promote)", answers: ["promoted"] },
      { id: "gt10", text: "We got ___ on the way to the client's office. (lose)", answers: ["lost"] },
      // get + lugar
      { id: "gt11", text: "What time did you get ___ last night? (a casa)", answers: ["home"] },
      { id: "gt12", text: "How long does it take you to get ___ work?", answers: ["to"] },
      { id: "gt13", text: "Get ___ the bus at the third stop. (bajarse)", answers: ["off"] },
      // phrasal verbs con get
      { id: "gt14", text: "I get ___ well with my new colleagues.", answers: ["on", "along"] },
      { id: "gt15", text: "It took her weeks to get ___ the failed launch. (superar)", answers: ["over"] },
      { id: "gt16", text: "I'll get ___ to you with the figures tomorrow.", answers: ["back"] },
      // causativa y used to
      { id: "gt17", text: "I got the intern ___ check the logs.", answers: ["to"] },
      { id: "gt18", text: "We need to get the server ___ before Monday. (fix)", answers: ["fixed"] },
      { id: "gt19", text: "Are you getting used to ___ a headset all day? (wear)", answers: ["wearing"] },
      { id: "gt20", text: "I've ___ two monitors on my desk. (have got = have)", answers: ["got"] }
    ]
  },
  "nouns-articles": {
    title: "Nouns, quantifiers & articles",
    emoji: "📦",
    topicId: "nouns-articles",
    items: [
      // incontables
      { id: "na1", text: "Can I give you a piece of ___? Back up everything before the upgrade.", answers: ["advice"] },
      { id: "na2", text: "Thanks for all the ___ about the new contract. (information)", answers: ["information"] },
      { id: "na3", text: "The news ___ good: the launch was a success. (be)", answers: ["is"] },
      { id: "na4", text: "We bought some new ___ for the lab. (equipment)", answers: ["equipment"] },
      { id: "na5", text: "Thanks for your ___ on my presentation. (feedback)", answers: ["feedback"] },
      { id: "na6", text: "We've made a lot of ___ this sprint. (progress)", answers: ["progress"] },
      { id: "na7", text: "I've got a lot of ___ this week, so I can't help. (trabajo)", answers: ["work"] },
      { id: "na8", text: "She has a lot of ___ with Kubernetes. (experience)", answers: ["experience"] },
      // números + plural / adjetivos compuestos
      { id: "na9", text: "There are three hundred ___ on the platform. (user)", answers: ["users"] },
      { id: "na10", text: "Hundreds ___ users complained about the outage.", answers: ["of"] },
      { id: "na11", text: "There are three ___ users online right now. (hundred)", answers: ["hundred"] },
      { id: "na12", text: "I signed a two-___ contract. (year)", answers: ["year"] },
      { id: "na13", text: "We had a ten-___ break between sessions. (minute)", answers: ["minute"] },
      { id: "na14", text: "The project lasted two ___. (year)", answers: ["years"] },
      // cuantificadores
      { id: "na15", text: "How ___ bugs did you find in the code review?", answers: ["many"] },
      { id: "na16", text: "How ___ time do we have left before the demo?", answers: ["much"] },
      { id: "na17", text: "Don't worry, I've got a ___ minutes before my next meeting.", answers: ["few"] },
      { id: "na18", text: "Very ___ people came to the demo, which was disappointing.", answers: ["few"] },
      { id: "na19", text: "There's very ___ coffee left, so let's buy some more.", answers: ["little"] },
      { id: "na20", text: "We've got ___ of time — the deadline is next month.", answers: ["plenty", "lots"] },
      { id: "na21", text: "The meeting room isn't big ___ for the whole team.", answers: ["enough"] },
      { id: "na22", text: "There are too ___ meetings in my calendar.", answers: ["many"] },
      { id: "na23", text: "I spend too ___ time answering emails.", answers: ["much"] },
      { id: "na24", text: "___ of the tests passed — every single one failed.", answers: ["none"] },
      // artículos
      { id: "na25", text: "My sister is ___ engineer at a space agency.", answers: ["an"] },
      { id: "na26", text: "I bought a laptop and a monitor. ___ laptop was fine, but the monitor was broken.", answers: ["the"] },
      { id: "na27", text: "___ is too short to work every weekend. (life, en general)", answers: ["life"] },
      { id: "na28", text: "I'm going on ___ next month — two weeks in Portugal.", answers: ["holiday"] },
      { id: "na29", text: "I'll call you ___ week, when I'm back from the conference.", answers: ["next"] },
      { id: "na30", text: "___ who work remotely often feel isolated. (people, en general)", answers: ["people"] }
    ]
  },
  "reported-speech": {
    title: "Reported speech, say/tell, reporting verbs & indirect questions",
    emoji: "🗣️",
    topicId: "reported-speech",
    items: [
      // say / tell
      { id: "rs1", text: "She ___ me that the server was down. (say / tell)", answers: ["told"] },
      { id: "rs2", text: "He ___ that he would be late for the stand-up. (say / tell)", answers: ["said"] },
      { id: "rs3", text: "Please ___ me the truth — did you push to main? (say / tell)", answers: ["tell"] },
      { id: "rs4", text: "She said ___ me that the release was ready.", answers: ["to"] },
      // backshift
      { id: "rs5", text: "'I work in Madrid.' → She said she ___ in Madrid.", answers: ["worked", "works"] },
      { id: "rs6", text: "'I'm fixing the bug.' → He said he ___ fixing the bug.", answers: ["was"] },
      { id: "rs7", text: "'I've finished the report.' → She said she ___ finished the report.", answers: ["had"] },
      { id: "rs8", text: "'We'll deploy on Friday.' → They said they ___ deploy on Friday.", answers: ["would"] },
      { id: "rs9", text: "'I can't access the VPN.' → He said he ___ access the VPN.", answers: ["couldn't"] },
      { id: "rs10", text: "'I may be late.' → She said she ___ be late.", answers: ["might"] },
      // tiempo y lugar
      { id: "rs11", text: "'I saw your email yesterday.' → She said she had seen my email the day ___.", answers: ["before"] },
      { id: "rs12", text: "'I'll call you tomorrow.' → He said he would call me the ___ day.", answers: ["next", "following"] },
      { id: "rs13", text: "'We launched it two years ago.' → They said they had launched it two years ___.", answers: ["before", "earlier"] },
      // preguntas indirectas y reported questions
      { id: "rs14", text: "'Are you coming to the meeting?' → She asked me ___ I was coming to the meeting.", answers: ["if", "whether"] },
      { id: "rs15", text: "'Where do you work?' → He asked me where I ___. (work)", answers: ["worked"] },
      { id: "rs16", text: "'What time does the demo start?' → She asked what time the demo ___. (start)", answers: ["started"] },
      { id: "rs17", text: "Could you tell me where the meeting room ___? (be)", answers: ["is"] },
      { id: "rs18", text: "Do you know ___ the client has signed the contract?", answers: ["if", "whether"] },
      { id: "rs19", text: "Can you tell me how long the migration ___ take?", answers: ["will", "would"] },
      // órdenes y peticiones
      { id: "rs20", text: "'Restart the server.' → My boss told me ___ restart the server.", answers: ["to"] },
      { id: "rs21", text: "'Don't touch production.' → She told us ___ to touch production.", answers: ["not"] },
      { id: "rs22", text: "'Could you send me the logs?' → He asked me ___ send him the logs.", answers: ["to"] },
      // reporting verbs
      { id: "rs23", text: "'I'll help you with the migration.' → She ___ to help me with the migration.", answers: ["offered", "promised"] },
      { id: "rs24", text: "'No, I won't work this weekend.' → He ___ to work this weekend.", answers: ["refused"] },
      { id: "rs25", text: "'I didn't delete the database!' → He denied ___ the database. (delete)", answers: ["deleting"] },
      { id: "rs26", text: "'Yes, I broke the build.' → She admitted ___ the build. (break)", answers: ["breaking"] },
      { id: "rs27", text: "'Why don't we use Terraform?' → He suggested ___ Terraform. (use)", answers: ["using"] },
      { id: "rs28", text: "I'd recommend ___ the documentation first. (read)", answers: ["reading"] },
      { id: "rs29", text: "She recommended ___ we update the libraries.", answers: ["that"] },
      { id: "rs30", text: "'Remember to back up the data.' → He reminded me ___ back up the data.", answers: ["to"] },
      { id: "rs31", text: "'You should take a break.' → The doctor advised me ___ take a break.", answers: ["to"] },
      { id: "rs32", text: "'Sorry I'm late.' → She apologised ___ being late.", answers: ["for"] },
      { id: "rs33", text: "'You leaked the password!' → They accused him ___ leaking the password.", answers: ["of"] },
      { id: "rs34", text: "'Congratulations on your promotion!' → They congratulated her ___ her promotion.", answers: ["on"] },
      { id: "rs35", text: "'I'll pay — no arguments!' → He insisted ___ paying.", answers: ["on"] },
      { id: "rs36", text: "'If you're late again, I'll report you.' → She ___ to report him. (amenazar)", answers: ["threatened"] }
    ]
  },
  "narrative-tenses": {
    title: "Narrative tenses: past continuous, past perfect, used to / would",
    emoji: "📜",
    topicId: "narrative-tenses",
    items: [
      // past continuous
      { id: "nt1", text: "I ___ working on the release when the power went off.", answers: ["was"] },
      { id: "nt2", text: "While we were ___ the app, the server crashed. (test)", answers: ["testing"] },
      { id: "nt3", text: "The server crashed ___ we were testing the app.", answers: ["while", "as", "when"] },
      { id: "nt4", text: "What ___ you doing at ten o'clock last night?", answers: ["were"] },
      { id: "nt5", text: "As I ___ leaving the office, my phone rang. (be)", answers: ["was"] },
      { id: "nt6", text: "The sun was ___ and everyone was in a good mood when the launch began. (shine)", answers: ["shining"] },
      // past perfect
      { id: "nt7", text: "When I got to the office, the meeting had ___ started.", answers: ["already"] },
      { id: "nt8", text: "When I arrived, the meeting ___ already started.", answers: ["had"] },
      { id: "nt9", text: "By the time the fix was ready, the client ___ cancelled the contract.", answers: ["had"] },
      { id: "nt10", text: "I didn't recognise him because he ___ grown a beard.", answers: ["had"] },
      { id: "nt11", text: "It was the first time I had ___ used Linux.", answers: ["ever"] },
      { id: "nt12", text: "She had ___ seen a rocket launch before that day.", answers: ["never"] },
      { id: "nt13", text: "I realised I ___ left my laptop on the train.", answers: ["had"] },
      { id: "nt14", text: "He left the company ___ he had found a better job.", answers: ["after", "because", "once", "when", "as", "since"] },
      // past perfect continuous
      { id: "nt15", text: "I had been ___ for an hour when the bus finally arrived. (wait)", answers: ["waiting"] },
      { id: "nt16", text: "She was exhausted because she had ___ coding all night.", answers: ["been"] },
      { id: "nt17", text: "How long had you been ___ there before you got promoted? (work)", answers: ["working"] },
      { id: "nt18", text: "The roads were wet. It had been ___ all night. (rain)", answers: ["raining"] },
      { id: "nt19", text: "They ___ been working together for ten years when the company closed.", answers: ["had"] },
      // conectores
      { id: "nt20", text: "I waited ___ the server came back online.", answers: ["until", "till"] },
      { id: "nt21", text: "___ the time we arrived, the launch had already happened.", answers: ["by"] },
      // used to / would / past simple
      { id: "nt22", text: "I ___ to work in a bank before I became a developer.", answers: ["used"] },
      { id: "nt23", text: "Did you ___ to play video games when you were a kid?", answers: ["use"] },
      { id: "nt24", text: "I didn't ___ to like coffee, but now I can't live without it.", answers: ["use"] },
      { id: "nt25", text: "When I was a junior, I ___ stay late every Friday to fix bugs.", answers: ["would"] },
      { id: "nt26", text: "We ___ to have an office in Barcelona, but it closed.", answers: ["used"] },
      { id: "nt27", text: "Last year I ___ to Cape Canaveral three times. (go)", answers: ["went"] },
      { id: "nt28", text: "I'm ___ to working late — it doesn't bother me any more.", answers: ["used"] },
      // estados: no continuo
      { id: "nt29", text: "I ___ know the answer, so I asked a colleague. (no sabía)", answers: ["didn't"] },
      { id: "nt30", text: "I read your report yesterday — it ___ excellent. (be)", answers: ["was"] }
    ]
  },
  "futures": {
    title: "Futures: will, going to, present continuous, future continuous & perfect",
    emoji: "🚀",
    topicId: "futures",
    items: [
      // will / going to / presente continuo / presente simple
      { id: "fu1", text: "The build has failed? Don't worry, I ___ have a look at it now.", answers: ["will", "'ll"] },
      { id: "fu2", text: "We've already decided: we're ___ to migrate to Kubernetes next year.", answers: ["going"] },
      { id: "fu3", text: "Look at the error rate! The server is going ___ crash.", answers: ["to"] },
      { id: "fu4", text: "I'm ___ the client on Friday at ten — it's in the calendar. (meet)", answers: ["meeting", "seeing"] },
      { id: "fu5", text: "The launch window ___ at 06:14 tomorrow, according to the schedule. (open)", answers: ["opens"] },
      { id: "fu6", text: "I think AI ___ change the job market a lot in the next ten years.", answers: ["will"] },
      { id: "fu7", text: "___ I open the window? It's quite hot in here. (¿Abro…?)", answers: ["shall", "should"] },
      { id: "fu8", text: "___ we start the meeting? Everyone is here. (¿Empezamos?)", answers: ["shall"] },
      { id: "fu9", text: "It will ___ rain this afternoon, so take a coat. (probablemente)", answers: ["probably"] },
      { id: "fu10", text: "Don't worry, I ___ tell anyone about the new project. I promise. (negativa)", answers: ["won't"] },
      { id: "fu11", text: "My train ___ at 7:45, so I need to leave home at seven. (leave)", answers: ["leaves"] },
      { id: "fu12", text: "What are you ___ this weekend? Any plans? (do)", answers: ["doing"] },
      // oraciones temporales
      { id: "fu13", text: "I'll call you as soon as I ___ at the airport. (arrive)", answers: ["arrive", "land"] },
      { id: "fu14", text: "We won't deploy ___ all the tests pass. (hasta que)", answers: ["until", "till", "unless"] },
      { id: "fu15", text: "Take an umbrella in ___ it rains.", answers: ["case"] },
      { id: "fu16", text: "I'll send you the report as soon as I've ___ the review. (finish)", answers: ["finished"] },
      { id: "fu17", text: "When the new version ___ out, we'll update all the laptops. (come)", answers: ["comes"] },
      { id: "fu18", text: "I don't know when the release ___ be ready. Ask the project manager.", answers: ["will"] },
      // future continuous
      { id: "fu19", text: "This time tomorrow I'll be ___ to Houston. (fly)", answers: ["flying"] },
      { id: "fu20", text: "Don't call me at ten — I'll ___ presenting the results.", answers: ["be"] },
      { id: "fu21", text: "___ you be using the meeting room this afternoon? I'd like to book it.", answers: ["will"] },
      // future perfect
      { id: "fu22", text: "By June I'll have ___ the course. (finish)", answers: ["finished", "completed"] },
      { id: "fu23", text: "By the time you get here, we'll ___ fixed the bug.", answers: ["have"] },
      { id: "fu24", text: "In June I'll have ___ studying English for eight months.", answers: ["been"] },
      { id: "fu25", text: "Please send me the invoice ___ Friday at the latest. (no más tarde de)", answers: ["by"] },
      { id: "fu26", text: "I'm working from home ___ Friday, then I'm back in the office. (hasta)", answers: ["until", "till"] },
      // otras formas
      { id: "fu27", text: "Hurry up! The rocket is ___ to launch. (a punto de)", answers: ["about"] },
      { id: "fu28", text: "The new version is ___ to be released in May. (previsto)", answers: ["due"] },
      { id: "fu29", text: "Without any tests, the project is ___ to fail. (casi seguro)", answers: ["bound", "likely", "sure", "certain"] },
      { id: "fu30", text: "She was on the point ___ resigning when they offered her a promotion.", answers: ["of"] },
      // futuro en el pasado
      { id: "fu31", text: "I was ___ to call you, but I forgot. Sorry!", answers: ["going"] },
      { id: "fu32", text: "\"I'll fix it tomorrow.\" → He said he ___ fix it the next day.", answers: ["would"] }
    ]
  },
  "linkers": {
    title: "Linkers: contrast, purpose, reason, result & addition",
    emoji: "🌉",
    topicId: "linkers",
    items: [
      // contraste
      { id: "lk1", text: "___ the tests passed, the release failed in production. (aunque)", answers: ["although", "though", "even though"] },
      { id: "lk2", text: "___ the delay, we met the deadline. (a pesar de)", answers: ["despite"] },
      { id: "lk3", text: "In spite ___ working late, she didn't finish the report.", answers: ["of"] },
      { id: "lk4", text: "Despite ___ tired, she kept working. (be)", answers: ["being", "feeling"] },
      { id: "lk5", text: "Despite the ___ that it was late, we kept working.", answers: ["fact"] },
      { id: "lk6", text: "The plan was good. ___, nobody followed it. (sin embargo)", answers: ["however", "nevertheless", "nonetheless"] },
      { id: "lk7", text: "Ana prefers Python, ___ Luis uses Go. (mientras que)", answers: ["whereas", "while", "whilst"] },
      { id: "lk8", text: "The talk was long. It was interesting, ___. (al final de la frase = sin embargo)", answers: ["though"] },
      { id: "lk9", text: "I'll go to the conference even ___ it rains. (aunque llueva, hipótesis)", answers: ["if"] },
      { id: "lk10", text: "She went to work even ___ she had a temperature. (aunque tenía, hecho real)", answers: ["though"] },
      { id: "lk11", text: "The tool is powerful. On the ___ hand, it is hard to learn.", answers: ["other"] },
      // finalidad
      { id: "lk12", text: "I came early ___ set up the room. (para)", answers: ["to"] },
      { id: "lk13", text: "I left early so as not ___ miss the train.", answers: ["to"] },
      { id: "lk14", text: "I'll write it down in order ___ to forget it.", answers: ["not"] },
      { id: "lk15", text: "I'll share my screen so ___ everyone can see the code.", answers: ["that"] },
      { id: "lk16", text: "This tool is ___ monitoring servers. (sirve para)", answers: ["for"] },
      { id: "lk17", text: "Save a backup in ___ the disk fails.", answers: ["case"] },
      { id: "lk18", text: "We went out ___ lunch with the new team. (a comer)", answers: ["for"] },
      // causa
      { id: "lk19", text: "___ the server was down, we postponed the demo. (como)", answers: ["as", "since", "because"] },
      { id: "lk20", text: "The launch was cancelled due ___ bad weather.", answers: ["to"] },
      { id: "lk21", text: "The flight was delayed because ___ the storm.", answers: ["of"] },
      { id: "lk22", text: "The meeting was postponed ___ to the manager's illness. (debido a, formal)", answers: ["owing", "due"] },
      // resultado
      { id: "lk23", text: "The tests failed, ___ we rolled back the deployment. (así que)", answers: ["so"] },
      { id: "lk24", text: "Sales fell by 20%. ___ a result, the project was cancelled.", answers: ["as"] },
      { id: "lk25", text: "The interface is confusing. That's ___ users complain. (por eso)", answers: ["why"] },
      { id: "lk26", text: "The budget was cut. ___, the project was delayed. (por lo tanto, formal)", answers: ["therefore", "consequently", "thus", "hence"] },
      // adición
      { id: "lk27", text: "The tool is free. ___, it is open source. (además, formal)", answers: ["moreover", "furthermore", "besides", "additionally"] },
      { id: "lk28", text: "As well as ___ code, she manages the team. (write)", answers: ["writing"] },
      { id: "lk29", text: "In addition ___ the salary, they offer private health insurance.", answers: ["to"] },
      { id: "lk30", text: "What's ___, the new version is twice as fast. (además, informal)", answers: ["more"] }
    ]
  }
};
