var Question = require('Question');

cc.Class({
    extends: cc.Component,

    properties: {
        quests: []
    },

    // use this for initialization
    onLoad: function () {
        //this.loadTestQuestions();

        // var obj = new Question();
        // console.log("aaa" + obj.id);
        // obj.setValues(110, "Teste", "aaa", ["bbb","ccc"]);
        // console.log("aaa" + obj.wrongAnswers[1]);
    },

    loadTestQuestions: function() {
        //var quests = [];
        for (i = 0; i < 4; i++) {
            this.quests[i] = new Question();
        }

        this.quests[0].setValues(0, "Quem acertou?", "Mizerávi", ["Ninguém","Todo mundo"]);
        this.quests[1].setValues(1, "Quem é o PC?", "Paullo Cesar", ["Personal Computer","PC Farias"]);
        this.quests[2].setValues(2, "Qual a resposta para tudo?", "42", ["Dinheiro","Amor"]);
        this.quests[3].setValues(3, "Quem fez um Quiz fantástico?", "Silvio Santos", ["Ninguém","Xuxa"]);
    },

    getTitle: function(arrayPos) {
        return this.quests[arrayPos].title;
    },

    getAnswer: function(arrayPos) {
        return this.quests[arrayPos].answer;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
