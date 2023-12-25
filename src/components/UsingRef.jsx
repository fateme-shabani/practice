// import React, { useRef, useState , useEffect} from 'react'

// const UsingRef = () => {
//     const [name, setname] = useState('')
//     const inputRef=useRef(0)
//     const test=useRef(0)

//     const changeHandler = (e) => {
//         setname(e.target.value);
//       };
//       const clickHandler=(e)=>{
//         // inputRef.current.clickHandler()
//         console.log(e.current.value)
//       }
//       useEffect(() => {
//         test.current= (test.current) + 1;
//       });

//   return (
//     <div>
//         <input type="text" ref={inputRef} value={name} onChange={changeHandler} />
//         <h3>my name is {name}</h3>
//         <h4>i renderd {test.current} times</h4>
//         <button onClick={clickHandler}>focus</button>
//     </div>
//   )
// }

// export default UsingRef

import React, { useEffect, useRef, useState } from "react";

const UsingRef = () => {
  const [name, setname] = useState("");
  const prevName = useRef("");

  const clickHandler = (e) => {
    setname(e.target.value);
  };
  useEffect(() => {
    prevName.current = name;
  }, [name]);
  return (
    <div>
      <input type="text" onChange={clickHandler} />
      <h3>
        my name is {name} and it used to be {prevName}
      </h3>
    </div>
  );
};

export default UsingRef;
