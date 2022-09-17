import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext/TransactionContext";

import trash from "../../assets/trash.svg";
import styles from "./Transaction.module.css";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(TransactionContext);
  return (
    <li
      className={`${transaction.amount > 0 ? styles.green : styles.red} ${
        styles.transaction__item
      }`}
    >
      <button
        className={styles.delete__button}
        onClick={() => {
          deleteTransaction(transaction.id);
        }}
      >
        <img className={styles.delete__icon} src={trash} alt="Delete Icon" />
      </button>
      <p className={styles.text}>{transaction.text}</p>
      <p className={styles.amount}>{transaction.amount}</p>
    </li>
  );
};

export default Transaction;
