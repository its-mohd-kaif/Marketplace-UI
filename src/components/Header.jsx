import React from "react";
import logo from "../images/YOUR LOGO.png";
import cart from "../images/Vector.png";
import user from "../images/Ellipse 67.png";
import "./Header.css";
function Header() {
  // Header Component
  return (
    <header>
      <ul className="ul">
        <li>
          <img className="logoImg" src={logo} alt="logo" />
        </li>
        <li className="liTxt">Market Place</li>
        <li className="liTxt">Blog</li>
        <li className="liTxt">Pricing</li>
        <li className="liTxt">About</li>
        <li className="liTxt">Contact</li>
        <li className="cartLi">
          <img className="cartImg" src={cart} alt="cart" />
        </li>
        <li>
          <img className="userImg" src={user} alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
