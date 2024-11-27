import React from "react";
import { createContext, useReducer } from "react";
import orderReducers from "./ordersReducers";
import { ADD_ORDER } from "./types";

export const ordersContext = createContext();

const initialState = {
  orders: [],
};

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducers, initialState);

  const addOrder = (order) => {
    dispatch({
      type: ADD_ORDER,
      payload: order,
    });
  };
  return (
    <ordersContext.Provider
      value={{
        orders: state.orders,
        addOrder,
      }}
    >
      {children}
    </ordersContext.Provider>
  );
};
