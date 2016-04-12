var app = app || {};

app.FlightResultView = Backbone.View.extend({
  // use 'tagName' instead of 'el' when the element doesn't exist on the page - it creates it for you.
  tagName: "li",
  // it creates and stores this as $el anyway

  render: function(){
    var flightNumber = this.model.get('id');
    this.$el.text( flightNumber );
    this.$el.prependTo( '#results' );
  }
});
