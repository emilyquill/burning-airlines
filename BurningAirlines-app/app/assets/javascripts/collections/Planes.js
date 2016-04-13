var app = app || {};

app.Planes = Backbone.Collection.extend({
  url: "/planes", // always the same URL, no CRUD needed
  model: app.Plane,
  initialize: function() {

  }
});
