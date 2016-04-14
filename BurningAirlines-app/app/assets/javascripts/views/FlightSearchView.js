var app = app || {};

app.FlightSearchView = Backbone.View.extend({
  el: '#flightForm',
  events: {
    'click button': 'searchFlights',
  },

  findFlights: function(o, d) {
    app.flights = new app.Flights();
    app.flights.fetch().done(function() {
      var matchingFlights = app.flights.where({
        origin: o,
        destination: d
      });
      app.planes = new app.Planes();
      app.planes.fetch().done(function() {
        for (var i = 0; i < matchingFlights.length; i++) {
          var flightNumber = matchingFlights[i].attributes.id;
          var origin = matchingFlights[i].attributes.origin;
          var destination = matchingFlights[i].attributes.destination;
          var date = matchingFlights[i].attributes.date;
          var plane = matchingFlights[i].attributes.plane_id;
          var $row = $('<tr class="result-row" data-id="' + flightNumber + '"></tr>');
          $('#results').append($row);
          $row.append('<td>' + flightNumber + '</td>');
          $row.append('<td>' + origin + '</td>');
          $row.append('<td>' + destination + '</td>');
          $row.append('<td>' + date + '</td>');
          $row.append('<td>' + plane + '</td>');
          var matchingPlane = app.planes.where({
            id: plane
          });
          var capacity = matchingPlane[0].attributes.columns * matchingPlane[0].attributes.rows;
          $row.append('<td> Unknown / ' + capacity + '</td>');
        }
      });


      var FlightResult = new app.FlightResult();
      FlightResult.render();


    });
  },
  searchFlights: function() {
    var searchOrigin = this.$el.find('#origin').val();
    var searchDestination = this.$el.find('#destination').val();
    var results = this.findFlights(searchOrigin, searchDestination);

  },
  showFlight: function(e) {
    console.log(e);

  },
  render: function() {
    var flightSearchViewTemplate = $('#flightSearchViewTemplate').html();
    this.$el.html(flightSearchViewTemplate);
  }
});
