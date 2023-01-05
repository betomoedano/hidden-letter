import * as React from "react";

export default function Cell({ row, col, isHidden, letter, handleClick }) {
  const [hasWon, setHasWon] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);

  function handleCell() {
    if (isHidden) {
      setHasWon(true);
      setTimeout(() => {
        setHasWon(false);
      }, 500);
    } else {
      setIncorrect(true);
      setTimeout(() => {
        setIncorrect(false);
      }, 500);
    }
    handleClick(row, col);
  }
  return (
    <div
      onClick={handleCell}
      className={
        hasWon ? "hasWonLetter cell" : incorrect ? "incorrect cell" : "cell"
      }
    >
      {letter}
    </div>
  );
}
