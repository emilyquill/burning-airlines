var app = app || {};

app.FlightResult = Backbone.View.extend({
  // use 'tagName' instead of 'el' when the element doesn't exist on the page - it creates it for you.
  el: '#results',
  events: {
    'click tr': 'showFlight'
  },
  // it creates and stores this as $el anyway
  showFlight: function(e) {
    var flightId = e.currentTarget.dataset.id;
    app.router.navigate('flight/' + flightId, true);

  }
});
