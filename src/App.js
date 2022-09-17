import Heading from "./components/Heading/Heading";
import Financials from "./components/Financials/Financials";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import { TransactionProvider } from "./context/TransactionContext/TransactionContext";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <TransactionProvider>
          <Heading />
          <Financials />
          <TransactionForm />
          <TransactionHistory />
        </TransactionProvider>
      </div>
    </div>
  );
}

export default App;
