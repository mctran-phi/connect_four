const $ = require('jquery');

function reset() {
  $('.cell').removeClass('yellow red');
};

function dropPiece(element, color) {
  var col = element.classList[2];

  for (var row = 5; row >= 0; row--) {
    if (!($(loc).hasClass('red') ^ $(loc).hasClass('yellow'))) {
      $(loc).addClass(color);
      break;
    }
  }
};

module.exports = {
  reset: reset,
  dropPiece: dropPiece
};