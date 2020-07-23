import React, { createContext, useReducer, useContext } from 'react'

//THIS IS THE DATA LAYER
export const StateContext = createContext()

//BUILD PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

//This is how we use our store inside of a component
export const useStateValue = () => useContext(StateContext)