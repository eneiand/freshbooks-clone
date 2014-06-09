var Task = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    ratePerHour: DS.attr('number'),
    billToClient: DS.attr('boolean', {
        defaultValue: false
    })
});

Task.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'General',
            billToClient: true,
            ratePerHour: 0
        },
        {
            id: 2,
            name: 'Meetings',
            billToClient: true,
            ratePerHour: 0
        },
        {
            id: 3,
            name: 'Research',
            billToClient: true,
            ratePerHour: 0
        }
    ]
});

export
default Task;