import React, { useState } from "react";

const Counter = ({ data }) => {

  const [number, setNumber] = useState(0);  

  const decClickHandler = () => {
    if (number > 0)
    setNumber
  (number - 1);
  };

  const incClickHandler = () => {
    setNumber(number + 1);
  };
  return (
    <div className="counter">
      <button onClick={decClickHandler}>-</button>
      <label>{number}</label>
      <button onClick={incClickHandler}>+</button>
    </div>
  );
};

export default Counter;
