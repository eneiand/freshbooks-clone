export
default Ember.ObjectController.extend({
    name: '',
    description: '',
    cost: '',
    quantity: 1,
    tax1: '',
    tax2: '',
    trackInventory: false,

    resetValues: function () {
        this.set('name', '');
        this.set('description', '');
        this.set('cost', '');
        this.set('quantity', 1);
        this.set('tax1', '');
        this.set('tax2', '');
        this.set('trackInventory', false);
    },

    itemCreated: false,
    validationError: false,
    saveItem: function () {
        if (!this.get('name')) {
            this.set('validationError', true);
            return;
        }

        var item = this.store.createRecord('item', {
            name: this.name,
            description: this.description,
            cost: this.cost,
            quantity: this.quantity,
            tax1: this.tax1,
            tax2: this.tax2,
            trackInventory: this.trackInventory
        });
        item.save();
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