import React, { useEffect, useRef, useState } from 'react'

const Test = () => {
  const [name, setname] = useState("");
  // const [renderCounter, setrenderCounter] = useState(0)
  const renderCounter = useRef(0);

  const changeHandler = (e) => {
    setname(e.target.value);
  };

  // useEffect(()=>{
  //     setrenderCounter(renderCounter=>renderCounter+1)
  // })



  useEffect(() => {
    renderCounter.current= renderCounter.current + 1;
  });

  return (
    <div>
      <input type="text" value={name} onChange={changeHandler} />
      <h3>my name is {name}</h3>
      {/* <h4>i renderd {renderCounter} times</h4> */}
      <h4>i renderd {renderCounter.current} times</h4>
      <button>focus</button>
    </div>
  );
}

export default Test