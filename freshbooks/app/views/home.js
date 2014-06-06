export default Ember.View.extend({
  didInsertElement: function () {
    $(document).foundation();
  }
});