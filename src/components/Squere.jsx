import classNames from "classnames";
import React from "react";
import "./Squere.css";
const Squere = ({ value, onClick, turn, winner }) => {
  const handleClick = () => {
    turn !== null && value === null && onClick();
  };

  let squareClass = classNames({
    square: true,
    [`square--${value}`]: value !== null,
    winner: winner,
  });

  return (
    <button className={squareClass} onClick={() => handleClick()}></button>
  );
};

export default Squere;
