import { useState } from "react";
import { validateAddress, signup } from "../../API";
import "./Signup.scss";
const validEmail = new RegExp(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/, "i");

function Signup() {
  const [input, setInput] = useState({ email: "", address: "" });
  const [error, setError] = useState("");

  const inputChange = ({ target: { value, name } }) => {
    setError("");
    setInput({ ...input, [name]: value });
  };

  const validateInput = async () => {
    if (!validEmail.test(input.email))
      return setError("Please enter a valid email address!");
    try {
      await validateAddress(input.address);
    } catch (err) {
      return setError("Please enter a valid Stellar address!");
    }
    const res = await signup(input);
    setError(res.data);
  };

  return (
    <>
      <div className="form-group">
        <label htmlFor="emailInput">Email address</label>
        <input
          onChange={inputChange}
          type="email"
          className="form-control"
          id="emailInput"
          aria-describedby="emailHelp"
          name="email"
          placeholder="Enter Email"
          style={{ fontSize: "20px" }}
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
          style={{ fontSize: "30px" }}
          onChange={inputChange}
          value={input.address.toUpperCase()}
          className="form-control"
          name="address"
          id="addressInput"
          rows="2"
        ></textarea>
      </div>
      <button
        onClick={validateInput}
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
      {error && (
        <p style={{ color: "white", textAlign: "center", marginTop: "15px" }}>
          {error}
        </p>
      )}
    </>
  );
}

export default Signup;
