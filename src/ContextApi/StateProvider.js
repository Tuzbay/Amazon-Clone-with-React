import React, { createContext, useContext, useReducer } from "react";

/* This is the data layer */
export const StateContext = createContext();

/* Build a Provider */
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// This is how we use it inside of a components
export const useStateValue = () => useContext(StateContext);
