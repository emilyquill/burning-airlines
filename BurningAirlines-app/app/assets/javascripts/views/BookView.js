var app = app || {};

app.BookView = Backbone.View.extend({
  el: '#main',
  events: {
    'click .col': 'selectSeat',
    'click #confirm-seat':'createReservation'
  },

   initialize: function () {
     this.listenTo(app.Reservations, 'change', this.render);

    },
  selectSeat: function(e){
    $('.col').removeClass('clicked');
    var seatRow = e.currentTarget.dataset.row;
    var seatLetter = e.currentTarget.dataset.col;
    // IF THE SEAT HAS A CLASS OF TAKEN, DO NOT ADD CLASS CLICKED
    var classes = e.currentTarget.classList;
    if ($.inArray('taken',classes) === 1) {
      alert('That seat is already taken');
    } else {
      $(e.currentTarget).addClass('clicked');
    }

  },
  createReservation: function(e){
    var reservation = new app.Reservation();
    var userID = $('.user-details').data('id');
    var userName = $('.user-details').data('name');
    var flightID = this.model.get('id');
    var seatRow = $('.clicked').data('row');
    var seatCol = $('.clicked').data('col');

    reservation.set({
      user_id: userID,
      flight_id: flightID,
      column: seatCol,
      row: seatRow
    });
    reservation.save();


    // TODO: If we wanted to send to a 'confirmation' page..
    // app.router.navigate('flight/' + flightID+'/book/booking-complete', true);

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

    app.planes = new app.Planes();
    app.planes.fetch().done(function() {
      var matchingPlane = app.planes.where({
        id: plane
      });
      var planeColumns = matchingPlane[0].attributes.columns;
      var planeRows = matchingPlane[0].attributes.rows;
      $('#main').append('<div id="plane"></div>');
      renderPlane(planeRows,planeColumns);
      $('#main').append('<button id="confirm-seat"> Confirm Seat </button>');

      window.setInterval(function(){
        app.reservations.fetch();
      }, 2000);

    });

  }
});
