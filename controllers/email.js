Email.EmailController = Ember.ObjectController.extend({
  isShowing: false,
  actions: {
    delete: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
      }
    },
    details: function() {
      this.set('isShowing', !this.isShowing);
    }
  }
});
