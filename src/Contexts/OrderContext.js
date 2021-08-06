import React, { useReducer, useContext, createContext } from "react";

const reducer = (state, action) => {
  const { type, addedItem, name } = action;
  const { orderList } = state 
  switch (type) {
    case "add":
      return {orderList: [...orderList, addedItem]}
    case "minus":
      for (let i = 0; i < orderList.length; i++){
        if (name === orderList[i].name) {
          orderList.splice(i, 1);
          return {orderList: orderList}
        }
      }
    default:
      return state
  }
}

const initialState = {
  orderList: []
}
const Context = createContext(initialState)

export const useOrderContext = () => useContext(Context)

export const OrderCtxProvider = ({ children }) => {
  const [orderStore, orderDispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ orderStore, orderDispatch }}>
      {children}
    </Context.Provider>
  )
}