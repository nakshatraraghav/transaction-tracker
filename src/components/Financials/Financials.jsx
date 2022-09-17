import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext/TransactionContext";

import "./Financials.css";

const Financials = () => {
  const { transactions } = useContext(TransactionContext);
  let balance = 0,
    income = 0,
    expense = 0;
  transactions.forEach((item) => {
    balance += item.amount;
    if (item.amount >= 0) {
      income += item.amount;
    } else {
      expense += Math.abs(item.amount);
    }
  });
  return (
    <div className="financials">
      <div className="balance__container">
        <h3 className="balance__heading">Your Balance is </h3>
        <h4 className="balance">{balance}$</h4>
      </div>
      <div className="income__expense__container">
        <div className="income__container">
          <h4>Income</h4>
          <p id="income">
            <span className="green">{income}</span>$
          </p>
        </div>
        <div className="expense__container">
          <h4>Expense</h4>
          <p id="expense">
            <span className="red">{expense}</span>$
          </p>
        </div>
      </div>
    </div>
  );
};

export default Financials;
