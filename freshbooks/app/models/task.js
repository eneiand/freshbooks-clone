var Task = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    ratePerHour: DS.attr('number'),
    billToClient: DS.attr('boolean', {
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
default Task;