var app = app || {};

app.User = Backbone.Model.extend({
  urlRoot: "/users" // Based around the REST url consistency (backbone expects this)

});
