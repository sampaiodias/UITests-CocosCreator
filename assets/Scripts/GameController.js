var QLibrary = require('QuestionLibrary');

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...

        library: {
            default: null,
            type: QLibrary
        },

        titleLabel: {
            default: null,
            type: cc.RichText
        },

        labelBA: {
            default: null,
            type: cc.Label
        },

        labelBB: {
            default: null,
            type: cc.Label
        },

        labelBC: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function () {
        this.library.loadTestQuestions();

        this.pickRandomQuestion();
        // this.labelBA.string = this.library.quests[1].answer;
        // this.labelBB.string = this.library.quests[1].wrongAnswers[0];
        // this.labelBC.string = this.library.quests[1].wrongAnswers[1];
    },

    pickRandomQuestion: function() {
        this.selectedQuestion = Math.floor((Math.random() * 4));
        console.log("Random: " + this.selectedQuestion);

        this.titleLabel.string = this.library.quests[this.selectedQuestion].title;

        var answers = [this.library.quests[this.selectedQuestion].answer, this.library.quests[this.selectedQuestion].wrongAnswers[0], this.library.quests[this.selectedQuestion].wrongAnswers[1]];
        this.shuffle(answers);

        this.labelBA.string = answers[0];
        this.labelBB.string = answers[1];
        this.labelBC.string = answers[2];
    },

    getCorrectAnswer: function(){
        return this.library.quests[this.selectedQuestion].answer;
    },

    shuffle: function(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
