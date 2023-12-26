import React, { useState } from "react";
import TestCssProblem from "./TestCssProblem";
import styles from './Form.module.css'

const Form = () => {
  const [myType, setmyType] = useState("");
  const [myPrice, setmyPrice] = useState(0);
  const [myformData, setmyformData] = useState({ type: "", price: 0 });

  const formHandeler = (e) => {
    e.preventDefault();
    console.log(myType);
    console.log(myPrice);
    console.log(myformData);
  };
  const typeChangeHandler = (e) => {
    setmyType(e.target.value);
    setmyformData({ ...myformData, type: e.target.value });
  };
  const priceChangeHandler = (e) => {
    setmyformData({ ...myformData, price: e.target.value });
  };
  return (
    <div>
      <form className={`${styles.c1-2}`} action="#" onSubmit={formHandeler}>
        <input
          type="text"
          placeholder="cost tect"
          onChange={typeChangeHandler}
        />
        <input
          type="number"
          placeholder="cost number"
          onChange={priceChangeHandler}
        />
        <button>add</button>
      </form>
      <TestCssProblem />
    </div>
  );
};

export default Form;
