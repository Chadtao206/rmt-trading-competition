import { useState, useEffect } from "react";
import { getCirculatingSupply, getCurrentPrice } from "../../API";
import "./Tokens.scss";

function Tokens() {
  const [tokenAmount, setTokenAmount] = useState("");
  const [numAccounts, setNumAccounts] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);
  useEffect(() => {
    getCirculatingSupply().then(({ data: { _embedded } }) => {
      setTokenAmount(~~_embedded.records[0].amount);
      setNumAccounts(_embedded.records[0].num_accounts);
    });
    getCurrentPrice().then(({ data: { sureremit: { usd } } }) =>
      setCurrentPrice(usd)
    );
  }, []);
  return (
    <div className="bg-light p-3">
      <h3>RMT Tokens</h3>
      <h5>Token Facts</h5>
      <ul className="facts">
        <li>
          <strong>Ticker:</strong> RMT
        </li>
        <li>
          <strong>Total Supply:</strong> {tokenAmount} RMT
        </li>
        <li>
          <strong>Number of Accounts:</strong> {numAccounts}
        </li>
        <li>
          <strong>Current Price:</strong> ${currentPrice.toFixed(6)}
        </li>
      </ul>
    </div>
  );
}

export default Tokens;
