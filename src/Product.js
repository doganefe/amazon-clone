import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {
  const [{},dispatch] = useStateValue()

  const addBasket = () => {
    //dispatching an action to reducer
    dispatch({
      type : "ADD_TO_BASKET",
      payload : {
        id,
        title,
        image,
        price,
        rating
      }
    })
  }


  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₺</small>
          <strong >{price}</strong>
        </p>
        <div className="product__rating">
          {
            Array(rating)
              .fill()
              .map((item, _) => (
                <p key={_}>⭐</p>
              ))
          }
        </div>
      </div>
      <img
        className="product__image"
        src={image}
        alt=""
      />
      <button onClick={addBasket}>Add to basket</button>
    </div>
  )
}

export default Product
