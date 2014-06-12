export
default Ember.ArrayController.extend({
    newExpense: false,
    actions: {
        toggleNew: function () {
            this.toggleProperty('newExpense');
        }
    }
});