var app = app || {};

app.FlightResultView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #book-flight': 'bookFlight'
  },
  render: function() {
    if (this.collection.length > 0) {
      _.each(this.collection, function (flight) {

          var flightObject = flight.attributes;
          flight.attributes.date = moment(flight.attributes.date).format('MMMM D, h:mm a');
          var flightRowTemplate = $('#flightRowTemplate').html();
          var flightViewHTML = _.template( flightRowTemplate );
          $('#flight-results').append( flightViewHTML( flightObject ) );
      });
    } else {
      $('#flight-results').append('<td colspan="6">No flights found.</td>' );

    }


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
