var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',

  render: function(){
    var flightNumber = this.model.get('id');
    var origin = this.model.get('origin');
    var destination = this.model.get('destination');
    var date = this.model.get('date');
    var plane = this.model.get('plane_id');

    var flightViewTemplate = $('#flightViewTemplate').html();
    var flightViewHTML = _.template( flightViewTemplate );
    this.$el.html( flightViewHTML(this.model.toJSON() ) );

    app.planes = new app.Planes();
    app.planes.fetch().done(function() {
      var matchingPlane = app.planes.where({
        id: plane
      });
      var planeColumns = matchingPlane[0].attributes.columns;
      var planeRows = matchingPlane[0].attributes.rows;
      $('#main').append('<div id="plane"></div>');
      renderPlane(planeRows,planeColumns);

    });


  }
});
