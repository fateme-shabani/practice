import React, { useState } from "react";

const Form = () => {
  const [myType, setmyType] = useState('')
  const [myPrice, setmyPrice] = useState(0)
  const [myformData , setmyformData]=useState({type:'',price:0})

  const formHandeler = (e) => {
    e.preventDefault();
    console.log(myType);
    console.log(myPrice);
    console.log(myformData)

  };
  const typeChangeHandler=(e)=>{
    setmyType(e.target.value)
    setmyformData({...myformData,type:e.target.value})
  }
  const priceChangeHandler=(e)=>{
  setmyformData({...myformData,price:e.target.value})
  }
  return (
    <div>
      <form action="#" onSubmit={formHandeler}>
        <input type="text" placeholder="cost tect" onChange={typeChangeHandler} />
        <input type="number" placeholder="cost number" onChange={priceChangeHandler}/>
        <button>add</button>
      </form>
    </div>
  );
};

export default Form;
