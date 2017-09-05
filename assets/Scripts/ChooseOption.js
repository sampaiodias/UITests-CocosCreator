var gc = require('GameController');

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
        gameController: {
            default: null,
            type: gc
        },

        myString: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function () {
        
    },

    verifyAnswer: function(){
        console.log("Verify answer: " + this.myString.string);
        if (this.myString.string == this.gameController.getCorrectAnswer()) {
            console.log("ACERTOOOOOU");
            this.gameController.pickRandomQuestion();
        }
        else {
            console.log("ERROOOOOU");
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
