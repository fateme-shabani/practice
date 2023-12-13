import React from 'react'

const Cost = ({data}) => {
  // const {data}=props
  // console.log(data)
  return (
    <div>
        <h2>{data.type}</h2>
        <h3>{data.price}</h3>
    </div>
  )
}

export default Cost
