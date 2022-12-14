import { useState, useContext, useRef } from "react";
import { TransactionContext } from "../../context/TransactionContext/TransactionContext";

import "./TransactionForm.css";

const TransactionForm = () => {
  const { addTransaction } = useContext(TransactionContext);
  const [text, setText] = useState();
  const [amount, setAmount] = useState();
  const textRef = useRef();
  const amountRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValidation(text, amount)) {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text: text,
        amount: amount,
      };
      addTransaction(newTransaction);
    } else {
      textRef.current.placeholder = "Enter the Description";
      amountRef.current.placeholder = "Enter the Amount";
    }
  };

  const formValidation = (text, amount) => {
    if (text === undefined) {
      return false;
    } else if (amount === undefined) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="transaction-form-container">
      <h3>Add A Transaction</h3>
      <form className="transaction-form">
        <p className="transaction-description">
          <strong>Transaction Description</strong>
        </p>
        <input
          type="text"
          ref={textRef}
          onChange={(event) => {
            setText(event.target.value);
          }}
          className="description-input"
        ></input>
        <p className="amount-description">
          <strong>Amount</strong>
        </p>
        <p className="input-information">{"(+ve => Income, -ve => Expense)"}</p>
        <input
          type="text"
          ref={amountRef}
          onChange={(event) => {
            setAmount(+event.target.value);
          }}
          className="amount-input"
        ></input>
        <button className="add-btn" onClick={handleSubmit}>
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
