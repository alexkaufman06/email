Email.Email = DS.Model.extend({
  to: DS.attr(),
  subject: DS.attr(),
  email: DS.attr(),
  user: DS.belongsTo('user', {async: true})
});
