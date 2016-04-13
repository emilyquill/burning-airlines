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

    // var flightAttr = this.model.attributes;
    // console.log(attributes);
    // this.$el.html ( '<p>' + flightNumber + '</p><p>' + destination + '</p>' );
    // console.log(flightNumber);

  }
});
