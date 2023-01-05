import { createCell } from "./createCell";
const couples = [
  ["B", "D"],
  ["C", "D"],
  ["g", "q"],
  ["G", "6"],
  ["L", "I"],
  ["O", "0"],
  ["V", "U"],
  ["Z", "2"],
  ["F", "E"],
  ["K", "X"],
  ["p", "q"],
  ["B", "8"],
  ["W", "M"],
  ["S", "5"],
];

export function createBoard() {
  const board = [];
  const randomIdx = Math.floor(Math.random() * (couples.length - 1));
  const randomCouple = couples[randomIdx];
  const randomLetter = Math.random() > 0.5 ? 1 : 0;
  const hiddenLetter = randomLetter === 1 ? 0 : 1;
  const randomRow = Math.floor(Math.random() * 25);
  const randomCol = Math.floor(Math.random() * 20);

  for (let row = 0; row < randomRow + 1; row++) {
    const newRow = [];
    for (let col = 0; col < randomCol + 1; col++) {
      newRow.push(createCell(row, col, randomCouple[randomLetter]));
    }
    board.push(newRow);
  }
  // insert random hidden letter
  insertRandomHidden(board, randomCouple[hiddenLetter], randomRow, randomCol);
  return board;
}

function insertRandomHidden(board, letter, r, c) {
  const row = Math.floor(Math.random() * r);
  const col = Math.floor(Math.random() * c);

  if (board[row][col]) {
    board[row][col].letter = letter;
    board[row][col].isHidden = letter;
  }
}
