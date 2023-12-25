import React, { useState } from 'react'

const Cost = ({data}) => {
  const [myPrice,setMyPrice]=useState(data.price)

  const clickHandler = ()=>{
    setMyPrice(myPrice+1)
  }
  return (
    <div>
        <h2>{data.type}</h2>
        <h3>{data.price}</h3>
        <h3>{myPrice}</h3>
        <button onClick={clickHandler}>Change Me</button>
    </div>
  )
}

export default Cost
