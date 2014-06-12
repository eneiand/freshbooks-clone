export
default Ember.ArrayController.extend({
    totalOutstanding: function () {
        var total = 0;

        this.forEach(function (item, index, enumerable) {
            total += item.get('balance');
        });

        return total;
    }.property('model.@each.balance')
});