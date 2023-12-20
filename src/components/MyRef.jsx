import React, { useRef, useEffect } from 'react';

const MyRef = () => {
    const inputRef=useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    const formHandler=()=>{
        alert(inputRef.current.value)
    }
 
  return (
    <>
    <form action="#" onSubmit={formHandler}>
    <input type="text" ref={inputRef} />
    <input type="number" />
    <button>click me</button>
    </form>
    </>
  )

};

export default MyRef;


