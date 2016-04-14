var renderPlane = function(rows,cols) {
  var $plane = $('#plane');
  for (var i=1; i<=rows; i++ ){
    var $row = $('<div class="row" data-row="' + i + '"></div>');
    $plane.append($row);
    $row.prepend('<div class="row-label">'+i+'</div>');

    for (var j=1; j<=cols; j++) {
      if (cols < 4) {
        if (j === 2) {
          $row.append('<div class="spacer"></div>');
          $row.append('<div class="col" data-col="' +j+ '" data-row="'+ i +'"></div>');
        } else {
          $row.append('<div class="col" data-col="' +j+ '" data-row="'+ i +'"></div>');
        }
      } else if (cols === 4) {
        if (j === 3) {
          $row.append('<div class="spacer"></div>');
          $row.append('<div class="col" data-col="' +j+ '" data-row="'+ i +'"></div>');
        } else {
          $row.append('<div class="col" data-col="' +j+ '" data-row="'+ i +'"></div>');
        }
      } else if (j%4 === 0) {
        $row.append('<div class="spacer"></div>');
        $row.append('<div class="col" data-col="' +j+ '" data-row="'+ i +'"></div>');
      } else {
        $row.append('<div class="col" data-col="' +j+ '" data-row="'+ i +'"></div>');

      }
    }
  }
  var $mapHeader = $('<div class="map-header"></div>');
  $plane.prepend($mapHeader);
  for (var k=1; k<=cols;k++){
    var columnLetter = String.fromCharCode(64 + k);
    if (cols < 4) {
      if (k === 2) {
        $mapHeader.append('<div class="col-header"> </div>');
        $mapHeader.append('<div class="col-header">'+columnLetter+'</div>');
      } else {
        $mapHeader.append('<div class="col-header">'+columnLetter+'</div>');
      }
    } else if (cols === 4) {
      if (k === 3) {
        $mapHeader.append('<div class="col-header"> </div>');
        $mapHeader.append('<div class="col-header">'+columnLetter+'</div>');
      } else {
        $mapHeader.append('<div class="col-header">'+columnLetter+'</div>');
      }

    } else if (k % 4 === 0) {
      $mapHeader.append('<div class="col-header"> </div>');
      $mapHeader.append('<div class="col-header">'+columnLetter+'</div>');
    } else {
      $mapHeader.append('<div class="col-header">'+columnLetter+'</div>');

    }
  }
  $mapHeader.prepend('<div class="col-header"></div>');
  $plane.prepend('<h2 class="spacer"></h2>');
};
