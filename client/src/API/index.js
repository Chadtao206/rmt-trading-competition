import axios from "axios";
const STELLAR_BASE = "https://horizon.stellar.org";

export const validateAddress = (address) =>
  axios.get(`${STELLAR_BASE}/accounts/${address}`);

export const signup = ({ address, email }) =>
  axios.post("/api/signup", { address, email });
