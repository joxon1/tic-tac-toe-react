import React from "react";
import "./Score.css";
const Score = ({ scoreX, scoreO }) => {
  return (
    <div className="score">
      <div>{scoreX}</div>
      <div>{scoreO}</div>
    </div>
  );
};

export default Score;
