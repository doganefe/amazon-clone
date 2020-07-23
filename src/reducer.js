export const initialState = {
  basket: [],
  user : null
}

export const getTotalPrice = (basket) => (
  basket?.reduce((amount, item) => item.price + amount, 0)
)

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic to add items to basket
      return {
        ...state,
        basket: [...state.basket, action.payload]
      }
    case "REMOVE_FROM_BASKET":
      //logic to remove from basket
      let newBasket = [...state.basket]
      const index = newBasket.findIndex(x => x.id === action.payload.id)
      if (index >= 0) newBasket.splice(index, 1)
      else console.warn(`we couldn't find any product to remove`)
      return {
        ...state,
        basket: newBasket
      }
      case "SET_USER":
      return {
        ...state,
        user : action.user
      }
    default:
      return state
  }
}

export default reducer