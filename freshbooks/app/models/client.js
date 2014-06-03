export default DS.Model.extend({
  organization: DS.attr('string'),
  contact: DS.attr('string'),
  lastLogin: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string')
});