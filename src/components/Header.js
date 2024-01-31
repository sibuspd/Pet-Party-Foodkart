import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  return (
    <div className="Header">
      <div className="Logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Cuisines</li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
