var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('home', function(){
    this.resource('overview');
    this.resource('refer');
    this.resource('pricing');
    this.resource('stamps');
  });
  this.resource('people');
  this.resource('invoices');
  this.resource('estimates');
  this.resource('expenses');
  this.resource('time');
  this.resource('reports');
});

export default Router;
