var app = app || {};

app.FlightSearchView = Backbone.View.extend({
  el: '#flightForm',
  events: {
    'click button': 'searchFlights',
  },
  searchFlights: function() {
    $('#results').toggleClass('hidden');
    var searchOrigin = this.$el.find('#origin').val();
    var searchDestination = this.$el.find('#destination').val();
    app.router.navigate('/' + searchOrigin +'/' + searchDestination, true);
  },
  render: function() {
    var flightSearchViewTemplate = $('#flightSearchViewTemplate').html();
    this.$el.html(flightSearchViewTemplate);
  }
});
