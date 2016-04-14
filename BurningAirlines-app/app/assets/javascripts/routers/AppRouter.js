var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '' : 'index',
    'flight/:id' : 'viewFlight',
    'flight/:id/book':'bookFlight',
    ':origin/:destination' : 'findFlight'
  },
  index: function() {
    console.log('Main page has loaded');
    var appView = new app.AppView();
    appView.render();
  },
  viewFlight: function(id) {
    var flight = new app.Flight({id:id});
    flight.fetch().done(function(){
      var flightView = new app.FlightView({
        model:flight
      });
      flightView.render();
    });
  },
  bookFlight: function(id) {
    console.log('book flight function reached!');
    var flight = new app.Flight({id:id});
    flight.fetch().done(function(){


      app.bookView = new app.BookView({
        model:flight
      });
      app.bookView.render();
    });
  },
  findFlight: function(origin, destination){
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
