var app = app || {};

app.Users = Backbone.Collection.extend({
  url: "/users", // always the same URL, no CRUD needed
  model: app.User,
  initialize: function() {

  }
});
