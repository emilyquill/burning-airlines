var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '' : 'index',
    'flight/:id' : 'viewFlight'
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
  }
});
