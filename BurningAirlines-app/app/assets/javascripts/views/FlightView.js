var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click button':'bookFlight'
  },
  bookFlight: function(){
    var flightId = this.model.get('id');
    app.router.navigate('flight/' + flightId + '/book', true);

  },
  render: function(){
    var flightNumber = this.model.get('id');
    var origin = this.model.get('origin');
    var destination = this.model.get('destination');
    var date = this.model.get('date');
    var plane = this.model.get('plane_id');

    var flightViewTemplate = $('#flightViewTemplate').html();
    var flightViewHTML = _.template( flightViewTemplate );
    this.$el.html( flightViewHTML(this.model.toJSON() ) );
    this.$el.append('<button id="book-flight" class="btn btn-primary"> Book Flight </button>');

    app.planes = new app.Planes();
    app.planes.fetch().done(function() {
      var matchingPlane = app.planes.where({
        id: plane
      });
      var capacity = matchingPlane[0].attributes.columns * matchingPlane[0].attributes.rows;
    });
  }
});
