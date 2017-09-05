cc.Class({

    properties: {
        id: 0,
        title: "Título da Pergunta",
        answer: "Resposta Correta",
        wrongAnswers: []
    },

    ctor: function() {
        
    },

    setValues: function(id, title, answer, wrongAnswers) {
        this.id = id;
        this.title = title;
        this.answer = answer;
        this.wrongAnswers = wrongAnswers;
    }
});
