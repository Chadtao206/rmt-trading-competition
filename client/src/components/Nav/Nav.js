import { Link } from "react-router-dom";
import "./Nav.scss";
function Nav() {
  return (
    <div className="nav-group">
      <Link
        className="btn-link"
        style={{
          width: "30%",
          fontSize: "20px",
          display: "block",
          textAlign: "center",
        }}
        to="/"
      >
        <button type="button" className="btn btn-primary nav-btn">
          Rules
        </button>
      </Link>
      <Link
        className="btn-link"
        style={{
          width: "30%",
          fontSize: "20px",
          display: "block",
          textAlign: "center",
        }}
        to="/signup"
      >
        <button type="button" className="btn btn-primary nav-btn">
          Sign up
        </button>
      </Link>
      <Link
        className="btn-link"
        to="/rank"
        style={{
          width: "30%",
          fontSize: "20px",
          display: "block",
          textAlign: "center",
        }}
      >
        <button type="button" className="btn btn-primary nav-btn">
          Rankings
        </button>
      </Link>
      <Link
        className="btn-link"
        to="/tokens"
        style={{
          width: "30%",
          fontSize: "20px",
          display: "block",
          textAlign: "center",
        }}
      >
        <button type="button" className="btn btn-primary nav-btn">
          RMT TOKENS
        </button>
      </Link>
    </div>
  );
}

export default Nav;
