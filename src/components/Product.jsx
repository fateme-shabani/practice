import React from 'react'

const Product = ({product}) => {
  return (
    <div className='style-product'>
        <h2>{product.type}</h2>
        <h2>{product.price}</h2>
    </div>
  )
}

export default Product