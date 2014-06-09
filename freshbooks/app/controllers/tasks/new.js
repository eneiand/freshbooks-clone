export
default Ember.ObjectController.extend({
    name: '',
    description: '',
    ratePerHour: 0.00,
    billToClient: false,

    resetValues: function () {
        this.set('name', '');
        this.set('description', '');
        this.set('ratePerHour', 0.00);
        this.set('billToClient', false);
    },

    itemCreated: false,
    validationError: false,
    saveItem: function () {
        if (!this.get('name')) {
            this.set('validationError', true);
            return;
        }

        var task = this.store.createRecord('task', {
            name: this.name,
            description: this.description,
            ratePerHour: this.ratePerHour,
            billToClient: this.billToClient
        });
        task.save();
        this.set('validationError', false);
        this.set('itemCreated', true);
    },
    actions: {
        save: function () {
            this.saveItem();
            return false;
        },
        saveAndAdd: function () {
            this.saveItem();
            this.resetValues();
            return false;
        },
        clearItemCreated: function () {
            this.set('itemCreated', false);
            return false;
        },
        clearValidationError: function () {
            this.set('validationError', false);
            return false;
        }
    }
});