const $ = require('jquery');

function reset() {
  $('.cell').removeClass('yellow red').val('0');
};

function dropPiece(element, color, value) {
  var col = element.classList[2];

  for (var row = 5; row >= 0; row--) {
    var current = $(`.row${row}.${col}`);
    if (!($(current).hasClass('red') ^ $(current).hasClass('yellow'))) {
      $(current).addClass(color).val(value);
      break;
    }
  }
};

function checkRows(element, value) {
  var row = element.classList[1];
  var count = 0;

  for (var col = 0; col < 7; col++) {
    if ($(`.${row}.col${col}`).val() === value) {
      count++;
      console.log(element, count);
    } else {
      count = 0;
    }
    if (count === 4) break;
  }
  // return false;
};

function checkColumns(element, value) {
  var col = element.classList[2];
  var count = 0;

  for (var row = 0; row < 6; row++) {
    if ($(`.row${row}.${col}`).val() === value) {
      count++;
    } else {
      count = 0;
    }
    if (count === 4) return true;
  }
  return false;
};

function checkDiagonals(element) {
  var row = element.classList[1];
  var col = element.classList[2];
};

module.exports = {
  reset: reset,
  dropPiece: dropPiece,
  checkRows: checkRows,
  checkColumns: checkColumns,
  checkDiagonals, checkDiagonals
};