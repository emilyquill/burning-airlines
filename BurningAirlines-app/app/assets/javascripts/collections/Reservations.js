var app = app || {};

app.Reservations = Backbone.Collection.extend({
  url: "/reservations", // always the same URL, no CRUD needed
  model: app.Reservation,
  initialize: function() {
    this.on("add", function( reservation ){

      // IF we are currently showing that flight which a reservation has been added to

      app.bookView.render();
    });
  }
});
