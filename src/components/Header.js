import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnStatus, setBtnStatus] = useState("Login");
  useEffect(() => {
    console.log("useEffect called from Header!");
  }, [btnStatus]);
  const onClickHandler = () => {
    btnStatus === "Login" ? setBtnStatus("Logout") : setBtnStatus("Login");
  };
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="LOGO" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online status: {onlineStatus ? "👍" : "👎"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button className="login-btn" onClick={onClickHandler}>
            {btnStatus}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
