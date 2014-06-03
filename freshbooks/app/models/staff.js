export default DS.Model.extend({
  name: DS.attr('string'),
  lastLogin: DS.attr('string'),
  email: DS.attr('string'),
  type: DS.attr()
});