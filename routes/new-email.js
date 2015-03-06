Email.NewEmailRoute = Ember.Route.extend({
  model: function(params) {
    var user = this.modelFor('user');
    var email = this.store.createRecord('email');
    user.get('emails').then(function(emails) {
      emails.pushObject(email);
    });
    return email;
  }
});
