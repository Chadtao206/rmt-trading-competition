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

  const formatNumber = (n) =>
    n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="bg-light p-3">
      <h3>RMT Tokens</h3>
      <h5>Token Facts</h5>
      <ul className="facts">
        <li>
          <strong style={{ marginRight: "5px" }}>Ticker: </strong> RMT
        </li>
        <li>
          <strong style={{ marginRight: "5px" }}>Total Supply: </strong>{" "}
          {formatNumber(tokenAmount + "")} RMT
        </li>
        <li>
          <strong style={{ marginRight: "5px" }}>Number of Accounts: </strong>{" "}
          {formatNumber(numAccounts + "")}
        </li>
        <li>
          <strong style={{ marginRight: "5px" }}>Current Price: </strong> $
          {currentPrice.toFixed(6)}
        </li>
      </ul>
      <h5>How to buy, store, and track RMT</h5>
      <h6>Buy</h6>
      <ul className="facts">
        <li>
          <a
            style={{ fontWeight: "600" }}
            href="https://www.bitmart.com/"
            target="_blank"
            rel="noreferrer"
          >
            BitMart
          </a>{" "}
          (RMT/XLM, RMT/USDT)
        </li>
        <li>
          <a
            style={{ fontWeight: "600" }}
            href="https://www.stellarx.com/markets/RMT:GDEGOXPCHXWFYY234D2YZSPEJ24BX42ESJNVHY5H7TWWQSYRN5ZKZE3N"
            target="_blank"
            rel="noreferrer"
          >
            StellarX
          </a>{" "}
          (RMT/XLM)
        </li>
        <li>
          <a
            style={{ fontWeight: "600" }}
            href="https://stellarterm.com/exchange/RMT-sureremit.co/XLM-native"
            target="_blank"
            rel="noreferrer"
          >
            StellarTerm
          </a>{" "}
          (RMT/XLM)
        </li>
        <li>
          <a
            style={{ fontWeight: "600" }}
            href="https://stellarport.io/exchange"
            target="_blank"
            rel="noreferrer"
          >
            StellarPort
          </a>{" "}
          (RMT/XLM)
        </li>
        <li>
          <a
            style={{ fontWeight: "600" }}
            href="https://interstellar.exchange/#/trade/guest/RMT/GDEGOXPCHXWFYY234D2YZSPEJ24BX42ESJNVHY5H7TWWQSYRN5ZKZE3N/XLM/native"
            target="_blank"
            rel="noreferrer"
          >
            Interstellar
          </a>{" "}
          (RMT/XLM)
        </li>
      </ul>
      <h6>Store</h6>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.reddit.com/r/sureremit/comments/7t464l/setting_up_trustlines_for_stellar_ledger_nano_s/"
      >
        <p style={{ fontWeight: "600" }}>
          Creating RMT Trustlines for Ledger Wallets
        </p>
      </a>
      <h6>Track</h6>
      <div style={{ display: "inline-flex" }}>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://coinmarketcap.com/currencies/sureremit/"
        >
          <p style={{ fontWeight: "600" }}>Coin Market Cap</p>
        </a>
        |
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.livecoinwatch.com/price/SureRemit-RMT"
        >
          <p style={{ fontWeight: "600" }}>Live Coin Watch</p>
        </a>
      </div>
    </div>
  );
}

export default Tokens;
