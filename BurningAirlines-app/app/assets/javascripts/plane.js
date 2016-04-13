var renderPlane = function(rows,cols) {
  console.log('render plane called, rows:' + rows + ', cols: ' + cols);
  var $plane = $('#plane');
  for (var i=1; i<=rows; i++ ){
    var $row = $('<div class="row" data-row="' + i + '"></div>');
    $plane.append($row);
    // $row.prepend('<div class="row-label">'+i+'</div>');

    for (var j=1; j<=cols; j++) {
      $row.append('<div class="col" data-col="' +j+ '" data-row="'+ i +'"></div>');
    }
  }
  var $mapHeader = $('<div class="map-header"></div>');
  $plane.prepend($mapHeader);
  for (var k=1; k<=cols;k++){
    var columnLetter = String.fromCharCode(64 + k);
    $mapHeader.append('<div class="col-header">'+columnLetter+'</div>');
  }
  // $mapHeader.prepend('<div class="col-header"></div>');
  $plane.prepend('<h2>Seat Map:</h2>');
};

$(document).ready(function() {
  var rows = $('.plane-details').data('rows');
  var cols = $('.plane-details').data('columns');

  renderPlane(rows,cols);

});
