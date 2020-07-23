import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal.js'

function Checkout(props) {
  const [{ basket }] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout__left">

        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
          </div>
        ) : (
            <div>
              <h2 className="checkout__title">Your Shopping Basket</h2>
              {basket?.map((basket, _) => {
                return <CheckoutProduct key={basket.id + basket.price}
                  id={basket.id}
                  title={basket.title}
                  rating={basket.rating}
                  price={basket.price}
                  image={basket.image}
                  diziSirasi={_}
                />
              })}
              {/* List out all of the Checkout Products */}
            </div>
          )
        }
      </div>
      {basket.length>0 && (
        <div className="checkout__right">
          <Subtotal />  
        </div>
      )}
      
    </div>
  )
}

export default Checkout
