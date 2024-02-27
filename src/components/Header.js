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
    <div className="flex justify-between bg-purple-400 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="LOGO" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-2">Online status: {onlineStatus ? "👍" : "👎"}</li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">Cart</li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2">
            <button className="login-btn" onClick={onClickHandler}>
              {btnStatus}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
