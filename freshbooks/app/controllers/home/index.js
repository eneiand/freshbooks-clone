export
default Ember.ArrayController.extend({
    totalOutstanding: function () {
        var total = 0;

        this.forEach(function (item) {
            total += item.get('balance');
        });

        return total;
    }.property('model.@each.balance')
});