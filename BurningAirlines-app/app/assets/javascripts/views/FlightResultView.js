var app = app || {};

app.FlightResultView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #book-flight': 'bookFlight'
  },
  render: function() {

    _.each(this.collection, function (flight) {
        var flightObject = flight.attributes;
        var flightRowTemplate = $('#flightRowTemplate').html();
        var flightViewHTML = _.template( flightRowTemplate );
        $('#flight-results').append( flightViewHTML( flightObject ) );
    });
  },
  showFlight: function(e) {
    var flightId = e.currentTarget.dataset.id;
    app.router.navigate('flight/' + flightId, true);

  },
  bookFlight: function(){
    var flightId = $('#book-flight').data('id');
    app.router.navigate('flight/' + flightId + '/book', true);

  }
});
