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
    var columnLetter = String.fromCharCode(64 + seatCol);

    if (seatRow === undefined) {
      alert("Please choose an available seat and then click confirm.");
    } else {
      alert("CONFIRMED! You're sitting in seat " +seatRow+columnLetter+" on flight BA"+flightID);
      reservation.set({
        user_id: userID,
        flight_id: flightID,
        column: seatCol,
        row: seatRow
      });
      reservation.save();
      $('.col').removeClass('clicked');

    }




    // TODO: If we wanted to send to a 'confirmation' page..
    // app.router.navigate('flight/' + flightID+'/book/booking-complete', true);

  },
  render: function(){
    var flightNumber = this.model.get('id');
    var origin = this.model.get('origin');
    var destination = this.model.get('destination');
    var date = moment(this.model.get('date')).format('MMMM D, h:mm a');
    var plane = this.model.get('plane_id');

    var flightViewTemplate = $('#flightViewTemplate').html();
    var flightViewHTML = _.template( flightViewTemplate );

    var flightAttr = this.model.attributes;
    flightAttr.date = moment(flightAttr.date).format('MMMM D, h:mm a');
    this.$el.html( flightViewHTML(flightAttr ) );


    app.planes = new app.Planes();
    app.planes.fetch().done(function() {
      var matchingPlane = app.planes.where({
        id: plane
      });
      var planeColumns = matchingPlane[0].attributes.columns;
      var planeRows = matchingPlane[0].attributes.rows;
      $('#main').append('<div id="plane-center"><div id="plane"></div></div>');
      renderPlane(planeRows,planeColumns);
      $('#plane').append('<div id="confirm-seat-container"><button id="confirm-seat" class="btn btn-success"> Confirm Seat </button></div>');

      window.setInterval(function(){
        app.reservations.fetch();
      }, 200);

    });

  }
});
