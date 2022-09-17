import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// initial state just for

const ACTIONS = {
  DELETE: "DELETE-TRANSACTION",
  ADD: "ADD-TRANSACTION",
};

const initialState = {
  transactions: [],
};

// creating a context

export const TransactionContext = createContext(initialState);

// Provider Component

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const deleteTransaction = (id) => {
    dispatch({ type: ACTIONS.DELETE, payload: id });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: ACTIONS.ADD, payload: transaction });
  };
  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction: deleteTransaction,
        addTransaction: addTransaction,
        dispatch: dispatch,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
