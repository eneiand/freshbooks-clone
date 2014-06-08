var Item = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    cost: DS.attr('number'),
    quantity: DS.attr('number', {
        defaultValue: 1
    }),
    tax1: DS.attr('string'),
    tax2: DS.attr('string'),
    trackInventory: DS.attr('boolean', {
        defaultValue: false
    })
});

Item.reopenClass({
    FIXTURES: [
/*        {
            id: 1,
            name: 'first item'
        }*/
    ]
});

export
default Item;