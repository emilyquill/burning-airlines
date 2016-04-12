var app = app || {};

app.Reservations = Backbone.Collection.extend({
  url: "/reservations", // always the same URL, no CRUD needed
  model: app.Reservation,
  initialize: function() {
    this.on("add", function( reservation ){
      console.log( reservation );
      // TODO: repaint the flight view when a reservation is added
    });
  }
});
