import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import {getTotalPrice} from './reducer'
import './Subtotal.css'
function Subtotal() {
  const [{ basket }] = useStateValue()

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />This order contains a gift
          </small>
          </>
        )}
        decimalScale={2}
        value={getTotalPrice(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"₺"}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
