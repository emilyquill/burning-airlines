var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '' : 'index',
    'flight/:id/book':'bookFlight',
    ':origin/:destination' : 'findFlight'
  },
  index: function() {
    console.log('Main page has loaded');
    app.appView = new app.AppView();
    app.appView.render();
  },
  bookFlight: function(id) {

    app.flight_id = parseInt( id );
    var flight = new app.Flight({id:id});
    flight.fetch().done(function(){
      app.bookView = new app.BookView({
        model:flight
      });
      app.bookView.render();
    });
  },
  findFlight: function(origin, destination){
    app.appView = app.appView || new app.AppView();
    app.appView.render();
    $(".hidden").removeClass("hidden");
      app.flights = new app.Flights();
      app.flights.fetch().done(function() {
        var matchingFlights = app.flights.where({
          origin: origin,
          destination: destination
        });
        app.planes = new app.Planes();
        app.planes.fetch().done(function() {
          var flightResultView = new app.FlightResultView({
            collection: matchingFlights
          });
          flightResultView.render();
        });
      });
}
});
