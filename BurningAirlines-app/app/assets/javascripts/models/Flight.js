var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: "/flights" // Based around the REST url consistency (backbone expects this)

});
