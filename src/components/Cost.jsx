import React, { useState } from 'react'

const Cost = ({data}) => {
  // const {data}=props
  // console.log(data)
  const [myPrice,setMyPrice]=useState(data.price)

  const clickHandler = ()=>{
    // alert('click shod!!!!')
    setMyPrice(myPrice+1)
  }
  return (
    <div>
        <h2>{data.type}</h2>
        <h3>{data.price}</h3>
        <h3>{myPrice}</h3>
        <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default Cost
