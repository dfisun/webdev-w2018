"use strict"
const PLAYER = 1;
const OPPONENT = -1;
const EMPTY = 0;

let gameboard;


function initBoard(size) {
  // gameboard[row][col]
  gameboard = [];
  for (let row = 0; row < size; row++) {
    gameboard[row] = [];
    for (let col = 0; col < size; col++) {
      gameboard[row][col] = 0;
    }
  }

  gameboard[0][0] = PLAYER;
  gameboard[size - 1][size - 1] = PLAYER;

  gameboard[0][size - 1] = OPPONENT;
  gameboard[size - 1][0] = OPPONENT;

  document.getElementById('gameboard').innerHTML = generateBoardHtml(size);
}


function updateBoard() {
  for (let row = 0; row < gameboard.length; row++) {
    for (let col = 0; col < gameboard[0].length; col++) {
      let cellClass;

      if (gameboard[row][col] === PLAYER) {
        cellClass = 'cell player';
      } else if (gameboard[row][col] === OPPONENT) {
        cellClass = 'cell opponent';
      } else {
        cellClass = 'cell';
      }

      let cellId = 'c' + row + col;
      document.getElementById(cellId).className = cellClass;
    }
  }
}


function generateBoardHtml(size) {
  // 1. Open table tag
  let result = '<table>';
  // 2. Open tr tag
  for (let row = 0; row < size; row++) {
    result += '<tr>';
    // 3. Create td element with attributes and content
    for (let col = 0; col < size; col++) {
      result += '<td id="c' + row + col + '" class="cell" ';
      result += 'onclick="selectCell(\'c' + row + col;
      result += '\')">' + row + col + '</td>';
      // 4. Repeat step 3 as needed
    }
    // 5. Close tr tag
    result += '</tr>';
    // 6. Repeat steps 2-5 as needed
  }
  // 7. Close table tag
  result += '</table>';
  return result;
}


function takeCell(cellId) {
  let row = cellId[1];
  let col = cellId[2];
  gameboard[row][col] = PLAYER;
  updateBoard();
}


function selectCell(cellId) {
  updateBoard();
  // cell id format: c[row][col]
  let row = +cellId[1]; // converted to number
  let col = +cellId[2]; // converted to number
  if (gameboard[row][col] !== PLAYER) {
    return;
  }

  let nearCells = getNearCells(cellId);
  for (let i = 0; i < nearCells.length; i++) {
    if (nearCells[i].content === EMPTY) {
      let nearCellId = 'c' + nearCells[i].row + nearCells[i].col;
      document.getElementById(nearCellId).className = 'cell near';
    }
  }

  document.getElementById(cellId).className = 'cell player selected';
}


function getNearCells(cellId) {
  let row = +cellId[1]; // converted to number
  let col = +cellId[2]; // converted to number
  let cells = [];

  if (row > 0) {
    cells.push({
      row: row - 1,
      col: col,
      content: gameboard[row - 1][col]
    });
    if (col > 0) {
      cells.push({
        row: row - 1,
        col: col - 1,
        content: gameboard[row - 1][col - 1]
      });
    }
    if (col < gameboard.length - 1) {
      cells.push({
        row: row - 1,
        col: col + 1,
        content: gameboard[row - 1][col + 1]
      });
    }
  }

  if (col > 0) {
    cells.push({
      row: row,
      col: col - 1,
      content: gameboard[row][col - 1]
    });
  }
  if (col < gameboard.length - 1) {
      cells.push({
        row: row,
        col: col + 1,
        content: gameboard[row][col + 1]
      });
  }

  if (row < gameboard.length - 1) {
    cells.push({
      row: row + 1,
      col: col,
      content: gameboard[row + 1][col]
    });
    if (col > 0) {
      cells.push({
        row: row + 1,
        col: col - 1,
        content: gameboard[row + 1][col - 1]
      });
    }
    if (col < gameboard.length - 1) {
      cells.push({
        row: row + 1,
        col: col + 1,
        content: gameboard[row + 1][col + 1]
      });
    }
  }
  return cells;
}


initBoard(7);
updateBoard();
