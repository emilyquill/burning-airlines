var app = app || {};

$(document).ready(function() {
  app.reservations = new app.Reservations();

  // window.setInterval(function(){
  //   app.reservations.fetch();
  // }, 2000);
  app.router = new app.AppRouter();
  Backbone.history.start();
  var rows = $('.plane-details').data('rows');
  var cols = $('.plane-details').data('columns');

  renderPlane(rows,cols);
});
