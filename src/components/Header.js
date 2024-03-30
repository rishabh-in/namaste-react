import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import useInternetStatusFinder from "../../utils/useInternetStatusFinder";
import { UseSelector, useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login")
  const online = useInternetStatusFinder();
  const cartItems = useSelector((store) => store.cart.cartItems);
  
  const handleLogin = () => {
    loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
  }
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className="logo" src={LOGO_URL} />
        <div className="img-color-overlay"></div>
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            {online ? "Online 🟢" : "Offline 🔴"}
          </li>
          <li>
            <Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="font-bold">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <button className="login-btn" onClick={() => handleLogin()}>
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header;