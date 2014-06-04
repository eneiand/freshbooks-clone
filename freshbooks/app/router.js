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
  
  this.resource('people', function(){
    this.resource('clients', function(){
      this.resource('client', {path : '/client/:client_id'});
    });
    this.resource('staff', function(){
      this.route('new');
    });
    this.resource('assign_clients');
    this.resource('sent_emails');
  });
  
  this.resource('invoices', function(){
    this.route('invoices');
    this.route('recurring');
    this.route('received');
    this.route('payments');
    this.route('credits');
    this.route('items');
  });
  
  this.resource('estimates');
  this.resource('expenses');
  this.resource('time');
  this.resource('reports');
  this.resource('addons');
  
  this.resource('account', function(){
    this.resource('billing');
    this.resource('administrator');
    this.resource('invite');
    this.resource('import_export');
    this.resource('basecamp');
    this.resource('api');
  });
  
  this.resource('settings', function(){
    this.resource('company');
    this.resource('taxes');
    this.resource('colors');
    this.resource('template');
    this.resource('permissions');
    this.resource('payment');
    this.resource('emails');
    this.resource('misc');
  } );
  
  this.resource('help');
  this.resource('logout');
});

export default Router;
