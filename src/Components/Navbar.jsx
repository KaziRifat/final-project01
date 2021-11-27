import React from "react";
import {GoSearch} from "react-icons/go";
import {AiOutlineShoppingCart} from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_text">
        <div className="logo">
          <img src="Components/images/logo.png" alt="logo" />
        </div>
        <ul className="navbar_ul">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">RESERVATION</a>
          </li>
          <li>
            <a href="">MENU</a>
          </li>
          <li>
            <a href="">ABOUT US</a>
          </li>
          <li>
            <a href="">CONTACT US</a>
          </li>
          <li>
            <a href="">LOGIN</a>
          </li>
          <li>
            <a href=""><GoSearch/></a>
          </li>
          <li>
            <a href=""><AiOutlineShoppingCart/></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;