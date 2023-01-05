export function createCell(row, col, letter) {
  return {
    row: row,
    col: col,
    isHidden: false,
    letter: letter,
  };
}
