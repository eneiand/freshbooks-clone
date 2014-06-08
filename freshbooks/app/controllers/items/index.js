export
default Ember.ArrayController.extend({
    showHelp: true,

    actions: {
        clearShowHelp: function () {
            this.set('showHelp', false);
        }
    }

});