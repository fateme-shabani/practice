import React, { useState } from "react";

const Counter = ({ data }) => {
  // const {data}=props
  // console.log(data)
  const [myPrice, setMyPrice] = useState(0);

  const decClickHandler = () => {
    if (myPrice > 0)
      // alert('click shod!!!!')
      setMyPrice(myPrice - 1);
  };

  const incClickHandler = () => {
    // alert('click shod!!!!')
    setMyPrice(myPrice + 1);
  };
  return (
    <div>
      {/* <h2>{data.type}</h2>
        <h3>{data.price}</h3> */}
      <button onClick={decClickHandler}>-</button>
      <label>{myPrice}</label>
      <button onClick={incClickHandler}>+</button>
    </div>
  );
};

export default Counter;
