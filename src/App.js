import React, { useState } from "react";
import Board from "./components/Board";
import Reset from "./components/Reset";
import Score from "./components/Score";

const winPos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const App = () => {
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winSqr, setWinSqr] = useState([]);
  const [score, setScore] = useState({ X: 0, O: 0 });

  const reset = () => {
    setTurn("X");
    setSquares(Array(9).fill(null));
    setWinSqr([]);
  };

  const restart = () => {
    setTurn("X");
    setSquares(Array(9).fill(null));
    setWinSqr([]);
    setScore({ X: 0, O: 0 });
  };

  const winnerCheck = (newSquares) => {
    for (let i = 0; i < winPos.length; i++) {
      const [a, b, c] = winPos[i];
      if (
        newSquares[a] &&
        newSquares[a] === newSquares[b] &&
        newSquares[a] === newSquares[c]
      ) {
        endGame(newSquares[a], winPos[i]);
        return;
      }
    }
    if (!newSquares.includes(null)) {
      endGame(null, Array.from(Array(10).keys()));
      return;
    }
    setTurn(turn === "X" ? "O" : "X");
  };

  const endGame = (result, winPos) => {
    setTurn(null);
    if (result !== null) {
      setScore({ ...score, [result]: score[result] + 1 });
    }
    setWinSqr(winPos);
    setTimeout(reset, 2000);
  };

  const handleClick = (square) => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    winnerCheck(newSquares);
  };

  return (
    <div className="container">
      <Score scoreO={score.O} scoreX={score.X} />
      <Board
        winSqr={winSqr}
        turn={turn}
        squares={squares}
        onClick={handleClick}
      />
      <Reset resetGame={restart} />
    </div>
  );
};

export default App;
