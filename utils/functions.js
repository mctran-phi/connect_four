const $ = require('jquery');

function reset() {
  $('.cell').removeClass('yellow red').val('0').css({animation: ''});
};

function dropPiece(element, color, value) {
  var col = element.classList[2];

  for (var row = 5; row >= 0; row--) {
    var current = $(`.row${row}.${col}`);
    if (!($(current).hasClass('red') ^ $(current).hasClass('yellow'))) {
      $(current).addClass(color).val(value).css({animation: 'fall 0.5s ease-out'});
      return current[0];
    }
  }
};

function checkRows(element, value) {
  var row = element.classList[1];
  var count = 0;

  for (var col = 0; col < 7; col++) {
    if ($(`.${row}.col${col}`).val() === value) {
      count++;
    } else {
      count = 0;
    }
    if (count === 4) return true;
  }
  return false;
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

function checkDiagonals(element, value) {
  var row = element.classList[1];
  var col = element.classList[2];
  var negRow = Number(row[row.length - 1]);
  var negCol = Number(col[col.length - 1]);
  var posRow = Number(row[row.length - 1]);
  var posCol = Number(col[col.length - 1]);
  var count = 0;

  while ((posRow < 6 && posRow !== 5) && (posCol < 7 && posCol !== 6)) {
    posRow++;
    posCol++;
  }

  while((negRow < 6 && negRow !== 5) && (negCol > 0 && negCol !== 6)) {
    negRow++;
    negCol--;
  }

  while(negRow >= 0 && negCol < 7) {
    if ($(`.row${negRow--}.col${negCol++}`).val() === value) {
      count++;
      console.log(negRow, negCol);
    } else {
      count = 0;
    }
    if (count === 4) return true;
  }

  count = 0;

  while(posRow >= 0 && posCol >= 0) {
    if ($(`.row${posRow--}.col${posCol--}`).val() === value) {
      count++;
    } else {
      count = 0;
    }
    if (count === 4) return true;
  }
  return false;
};

function checkTie() {
  for (var col = 0; col < 7; col++) {
    var element = $(`.row0.col${col}`);
    if (element.val() === '' || element.val() === '0') return false;
  }
  return true;
}

module.exports = {
  reset: reset,
  dropPiece: dropPiece,
  checkRows: checkRows,
  checkColumns: checkColumns,
  checkDiagonals, checkDiagonals,
  checkTie: checkTie
};