import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating, diziSirasi }) {
  const [{ }, dispatch] = useStateValue()

  const removeBasket = () => {
    //dispatching an action to reducer
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: {
        id,
      }
    })
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">

        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating).fill().map((x, _) => <p key={_}>⭐</p>)}
        </div>
        <button onClick={removeBasket}>Remove from basket</button>

      </div>
    </div>
  )
}

export default Product
