import { useState } from "react";
import { LOG_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login")

  const handleLogin = () => {
    loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
  }
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className="logo" src={LOG_URL} />
        <div className="img-color-overlay"></div>
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            <Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
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