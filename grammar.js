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
      { id: "rel26", text: "This is the framework on ___ the whole platform is built.", answers: ["which"] }
    ]
  }
};
