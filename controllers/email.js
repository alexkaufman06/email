Email.EmailController = Ember.ObjectController.extend({
  isShowing: false,
  actions: {
    delete: function() {
      if (confirm('Are you sure you want to delete this email?')) {
        this.get('model').destroyRecord();
      }
    },
    details: function() {
      this.set('isShowing', !this.isShowing);
    }
  }
});
