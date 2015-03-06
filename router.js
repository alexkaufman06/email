Email.Router.map(function() {
  this.resource('users', {path: '/'});
  this.resource('user', {path: ':user_id'}, function() {
    this.resource('new-email');
  });
  this.resource('new-user');
});
