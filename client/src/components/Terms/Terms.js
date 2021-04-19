import { Link } from "react-router-dom";

function Terms() {
  return (
    <div className="card border-primary mb-3">
      <h2 className="card-header">TRADING COMPETITION TERMS AND CONDITIONS</h2>
      <div className="card-body">
        <h4 className="card-title">
          By participating in the competition, you agree to the following Terms
          and Conditions.
        </h4>
        <p className="card-text">
          1. Trading competition will start on April 23, 2021 at 00:00 UTC and
          will finish on May 6, 2021 at 23:59 UTC.
        </p>
        <p className="card-text">
          2. The table of Participants will be updated in real time with their
          current scores. The final Trading Volume data will be collected and
          audited at 23:59 UTC on the last day of the Competition.
        </p>
        <p className="card-text">
          3. Only trades with RMT-XLM pairing on the SDEX will be counted
          towards Users' final scores.
        </p>
        <p className="card-text">
          4. The Trading Score is calculated from each user's executed Buy and
          Sell orders on RMT-XLM pairing during the Competition period.
        </p>
        <p className="card-text">
          5. Executed buy orders are worth twice as many points as executed sell
          orders for a given amount of RMT traded. EG. Buying 1000 RMT will earn
          the same amount of points as selling 2000 RMT.
        </p>
        <div className="card-text">
          6. SureRemit/SureGifts reserves the right to disqualify the User from
          the Trading Competition if they:
          <ul style={{ marginTop: "10px" }}>
            <li> use wash trading (execute their own orders)</li>
            <li>use trading bots</li>
            <li>
              use multiple accounts (only one account per participant is
              allowed)
            </li>
            <li>
              collude with individuals or groups in the competition to give
              themselves unfair advantages over other participants
            </li>
          </ul>
        </div>
        <p className="card-text">
          7. The User will be considered a Participant of the Trading
          Competition only after they sign up HERE with their Stellar public key
          and a validated email address.
        </p>
        <h4 className="card-title">PRIZE POOL: 2 MILLION RMT</h4>
        <div className="card-text">
          Top 20 participants will share the 2 MILLION RMT PRIZE POOL. This is
          based on tiered prizes.
          <ul style={{ marginTop: "10px" }}>
            <li>Top 1-5: 200,000 RMT each</li>

            <li>Top 6-10: 100,000 RMT each</li>

            <li>Top 11-15: 50,000 RMT each</li>

            <li>Top 15-25: 25,000 RMT each</li>
          </ul>
          Winners will be contacted via email. You need to respond within 48
          hours to claim your prize or it will be forfeited.
        </div>
        <p className="card-text">
          *Reminder: Buy Offers scores 2X more than sell offers.
        </p>
        <p className="card-text">Happy trading!</p>
      </div>
      <Link to="/signup">
        <button
          type="button"
          style={{ fontSize: "24px", width: "100%" }}
          class="btn btn-info"
        >
          I AGREE
        </button>
      </Link>
    </div>
  );
}

export default Terms;
