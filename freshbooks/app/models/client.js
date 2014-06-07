export default DS.Model.extend({
  organization: DS.attr('string'),
  currency: DS.attr('string', 'GBP'),
  language: DS.attr('string', 'English'),
  sendInvoicesByEmail: DS.attr('boolean', true),
  sendInvoicesByPost: DS.attr('boolean', false),
  contacts: DS.hasMany('contact'),
  country: DS.attr('string'),
  addresses: DS.hasMany('address'),
  industry: DS.attr('string'),
  companySize: DS.attr('string'),
  businessPhone: DS.attr('string'),
  fax: DS.attr('string'),
  notes: DS.attr('string')
});