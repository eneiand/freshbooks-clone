var Invoice = DS.Model.extend({
    number: DS.attr('number'),
    dateOfIssue: DS.attr('date'),
    client: DS.belongsTo('client'),
    total: DS.attr('number'),
    paidToDate: DS.attr('number'),
    balance: DS.attr('number'),
    poNumber: DS.attr('number'),
    discountPercentage: DS.attr('number'),
    items: DS.hasMany('item'),
    tasks: DS.hasMany('task')
});

Invoice.reopenClass({
    FIXTURES: [
/*        {
            id: 1,
            name: 'first item'
        }*/
        {
            id: 1,
            number: 1,
            dateOfIssue: Date.now(),
            total: 100,
            paidToDate: 0,
            balance: 100,
            poNumber: 1
        }
    ]
});

export
default Invoice;