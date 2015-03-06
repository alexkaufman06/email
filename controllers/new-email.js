Email.NewEmailController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var email = this.get('model');
      email.save();

      var controller = this;
      email.get('user').then(function(user) {
        user.save();
        controller.transitionToRoute('user', user);
      });
    }
  }
});
