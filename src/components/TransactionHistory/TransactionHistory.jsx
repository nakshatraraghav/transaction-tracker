import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext/TransactionContext";

import Transaction from "../Transaction/Transaction";

import styles from "./TransactionHistory.module.css";

const TransactionHistory = () => {
  const { transactions } = useContext(TransactionContext);
  return (
    <div className={styles.history__container}>
      <ul className={styles.transaction__container}>
        {transactions.map((transaction) => {
          return <Transaction transaction={transaction} key={transaction.id} />;
        })}
      </ul>
    </div>
  );
};

export default TransactionHistory;
