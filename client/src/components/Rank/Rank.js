import { useState, useEffect } from "react";
import { getWalletAddresses } from "../../API";
import "./Rank.scss";
function Rank() {
  const [wallets, setWallets] = useState([]);
  useEffect(() => {
    getWalletAddresses().then(({ data }) => {
      setWallets(data);
    });
  }, []);
  return (
    <>
      <table className="table-info table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Address</th>
            <th scope="col">Buy</th>
            <th scope="col">Sell</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {wallets.map((a, i) => {
            return (
              <tr key={`row${i}`}>
                <th scope="row">{i + 1}</th>
                <td className="address-td">{a.address}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Rank;
