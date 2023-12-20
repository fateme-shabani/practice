import React, { useRef, useState } from 'react'

const TestRefrence = () => {
    // const [text, settext] = useState('')
    // const textChangeHandler=(e)=>{
    //     settext(e.target.value)
    // }
    const text=useRef()
    const clickHandler=()=>{
        console.log(text.current.value)
    } 
  return (
    <div>
            <input type="text" ref={text}/>
            <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default TestRefrence