import "./Signup.scss";
function Signup() {
  return (
    <>
      <div className="form-group">
        <label htmlFor="emailInput">Email address</label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          aria-describedby="emailHelp"
          name="email"
          placeholder="Enter Email"
        />
        <small id="emailHelp" className="form-text">
          Please enter an email you have access to in order to confirm your
          entry.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="addressInput">
          Enter your Stellar Account's PUBLIC Key which you will be trading with
        </label>
        <textarea
          className="form-control"
          name="address"
          id="addressInput"
          rows="3"
        ></textarea>
      </div>
      <button
        type="button"
        style={{
          fontSize: "24px",
          width: "80%",
          marginLeft: "10%",
          marginTop: "10px",
          color: "purple",
        }}
        className="btn btn-success"
      >
        ENTER COMPETITION
      </button>
    </>
  );
}

export default Signup;
