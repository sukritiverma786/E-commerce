import React, { useState, useContext, useRef } from "react";
import "./Navbar.css";
import logo from "../Assests/logo.png";
import { ShopContext } from "../../Context/ShopContext";
import cart from "../Assests/cart.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
// 13:54
const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const { getTotalCartItems } = useContext(ShopContext);
  // const menuRef = useRef();
  const menuRef = useRef<HTMLUListElement | null>(null);

  const dropdown_toggle = (e: React.MouseEvent<HTMLElement>) => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("navmenu-visible");
      e.currentTarget.classList.toggle("open");
    }
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <span
        className="navbar-dropdown"
        onClick={(e: React.MouseEvent<HTMLElement>) => dropdown_toggle(e)}
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </span>
      {/* <FontAwesomeIcon icon={faArrowDown} onClick={(e: React.MouseEvent<HTMLElement>) => dropdown_toggle(e)} /> */}
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("Shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "Shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>{" "}
          {menu === "Mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>{" "}
          {menu === "Women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>{" "}
          {menu === "Kids" ? <hr /> : <></>}
        </li>
        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>{" "}
          </Link>
          <Link to="cart">
            <img src={cart} alt="" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
