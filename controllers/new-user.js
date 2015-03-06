Email.NewUserController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newUser = this.store.createRecord('user', {
        name: this.get('name'),
        email: this.get('email')
      });
      newUser.save();
      this.transitionToRoute('users');
    }
  }
});
