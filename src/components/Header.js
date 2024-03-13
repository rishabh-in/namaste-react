import { useState } from "react";
import { LOG_URL } from "../../utils/constant";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => handleLogin()}>
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header;