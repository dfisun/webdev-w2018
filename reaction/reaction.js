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
}


function updateBoard() {
  for (let row = 0; row < gameboard.length; row++) {
    for (let col = 0; col < gameboard[0].length; col++) {
      let cellColor;

      if (gameboard[row][col] === PLAYER) {
        cellColor = 'green';
      } else if (gameboard[row][col] === OPPONENT) {
        cellColor = 'red';
      } else {
        cellColor = '';
      }

      let cellId = 'c' + row + col;
      document.getElementById(cellId).style.backgroundColor = cellColor;
    }
  }
}


function takeCell(cellId) {
  let row = cellId[1];
  let col = cellId[2];
  gameboard[row][col] = PLAYER;
  updateBoard();
}


initBoard(3);
updateBoard();
