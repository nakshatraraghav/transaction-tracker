const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE-TRANSACTION":
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        transactions: state.transactions.filter((transaction) => {
          if (transaction.id !== action.payload) {
            return transaction;
          }
        }),
      };
    case "ADD-TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default AppReducer;
