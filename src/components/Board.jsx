import React from "react";
import Squere from "./Squere";
import "./Board.css";
const Board = ({ squares, onClick, turn, winSqr }) => {
  const createSquares = (values) =>
    values.map((value, i) => (
      <Squere
        winner={winSqr.includes(value)}
        turn={turn}
        onClick={() => onClick(value)}
        key={i}
        value={squares[value]}
      />
    ));

  return (
    <div className="board">
      <div className="row">{createSquares([0, 1, 2])}</div>
      <div className="row">{createSquares([3, 4, 5])}</div>
      <div className="row">{createSquares([6, 7, 8])}</div>
    </div>
  );
};

export default Board;
