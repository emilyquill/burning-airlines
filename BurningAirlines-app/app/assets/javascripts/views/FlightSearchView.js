var app = app || {};

app.FlightSearchView = Backbone.View.extend({
  el: '#flightForm',
  events: {
  'click button' : 'searchFlight'
  // TODO: add keypress listener
  },
  searchFlight: function() {
    var searchOrigin = this.$el.find('#origin').val();
    var searchDestination = this.$el.find('#destination').val();
    console.log("Searching for flight from: " + searchOrigin + ", to: " + searchDestination);
    var results = this.findFlights(searchOrigin, searchDestination);
    // TODO: findFlights function to return an array of objects with flight information
    console.log("searchFlight results = " + results);

  },
  findFlights: function(o,d) {
    // TODO: fetch all flights from DB
    var results =  "I was hoping to use the method below, but it doesn't work..";
    // app.Flights.findWhere({'origin':o});
    return results;
  },
  render: function() {
    var flightSearchViewTemplate = $('#flightSearchViewTemplate').html();
    this.$el.html( flightSearchViewTemplate );
  }
});
