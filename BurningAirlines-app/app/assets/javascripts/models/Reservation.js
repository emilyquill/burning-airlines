var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: "/reservations", // Based around the REST url consistency (backbone expects this)
  defaults: {
    user_id: "",
    flight_id: "",
    column: "",
    row: ""
  }
});
