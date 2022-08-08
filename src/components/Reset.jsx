import React from "react";
import "./Reset.css";

const Reset = ({ resetGame }) => {
  return (
    <button className="reset" onClick={resetGame}>
      Restart
    </button>
  );
};

export default Reset;
