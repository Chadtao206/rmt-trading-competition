import axios from "axios";
const STELLAR_BASE = "https://horizon.stellar.org";
const RMT_ISSUER = "GDEGOXPCHXWFYY234D2YZSPEJ24BX42ESJNVHY5H7TWWQSYRN5ZKZE3N";
const COINGECKO_ENDPOINT =
  "https://api.coingecko.com/api/v3/simple/price?ids=sureremit&vs_currencies=usd";

export const validateAddress = (address) =>
  axios.get(`${STELLAR_BASE}/accounts/${address}`);

export const signup = ({ address, email }) =>
  axios.post("/api/signup", { address, email });

export const getCirculatingSupply = () =>
  axios.get(`${STELLAR_BASE}/assets?asset_code=RMT&asset_issuer=${RMT_ISSUER}`);

export const getCurrentPrice = () => axios.get(COINGECKO_ENDPOINT);

export const getWalletAddresses = () => axios.get("/api/wallets");
