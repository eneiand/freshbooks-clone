export
default Ember.ObjectController.extend({
    showHelp: true,

    actions: {
        clearShowHelp: function () {
            this.set('showHelp', false);
        }
    }

});