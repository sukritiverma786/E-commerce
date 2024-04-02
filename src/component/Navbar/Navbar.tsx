import React, { useState, useContext, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../Assests/logo.png";
import { ShopContext } from "../../Context/ShopContext";
import cart from "../Assests/cart.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import AvatarMan from "../Assests/avatarMan.png";
// import Avatarwoman from "../Assests/avatarWomen.jpeg";

const Navbar: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);
  // const [isvendor,setIsVendor]= useState(true)
  const [isLoggedInAsVendor, setIsLoggedInAsVendor] = useState(false);

  useEffect(() => {
    // Retrieve username from local storage
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleVendorLogin = () => {
    // Perform vendor login logic here
    // After successful login, set isLoggedInAsVendor to true

    setIsLoggedInAsVendor(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    // After logout, set isLoggedInAsVendor to false

    // Optionally, remove auth token from localStorage or perform any other cleanup
    localStorage.removeItem("auth-token");
    window.location.replace("/");
    setIsLoggedInAsVendor(false);
  };

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
          {localStorage.getItem("auth-token") ? (
            // If user is logged in, render Logout button
            <button onClick={handleLogout}>Logout</button>
          ) : (
            // If user is not logged in, render Login button
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}

          {/* Render Vendor button conditionally based on isLoggedInAsVendor */}
          {!isLoggedInAsVendor ? (
            <Link to="/vendorlogin" onClick={handleVendorLogin}>
              <button className="vendor">Vendor</button>
            </Link>
          ) : (
            // If user is logged in as vendor, render Logout button
            <button onClick={handleLogout}>Logout Vendor</button>
          )}

          <div className="username">
            <span className="AvatarImg">
              <img src={AvatarMan} alt="Avatar" />
            </span>
            <span style={{ color: "red" }}>
              {localStorage.getItem("auth-token") ? userName : ""}
            </span>
          </div>

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
