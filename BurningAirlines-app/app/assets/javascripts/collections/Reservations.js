var app = app || {};

app.Reservations = Backbone.Collection.extend({
  url: "/reservations", // always the same URL, no CRUD needed
  model: app.Reservation,
  initialize: function() {
    this.on("add", function( reservation ){
      if ( reservation.get("flight_id") === app.flight_id ) {

        var col = reservation.attributes.column;
        var row = reservation.attributes.row;

        var $seat = $('[data-col="'+col+'"][data-row="'+row+'"]');
        $seat.addClass('taken');

      }
      // IF we are currently showing that flight which a reservation has been added to

      // app.bookView.render();
    });
  }
});
