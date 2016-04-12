var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: "/flights", // always the same URL, no CRUD needed
  model: app.Flight,
  initialize: function() {

  }
});
