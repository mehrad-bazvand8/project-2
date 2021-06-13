import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Route, NavLink, HashRouter, Link } from "react-router-dom";
function Navbar() {
  const [Click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handelClick = () => setClick(!Click);
  const closeMobileMenu = () => setClick(false);

 const showButton = () => {
     if (window.innerWidth <= 960) {
         setButton(false);
     } else {
         setButton(true)
     }
 };

 useEffect(() =>{
     showButton();
 }, []);

 window.addEventListener("resize" , showButton)
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            MEHRAD BAZVAND
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handelClick}>
            <i className={Click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={Click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
              >
              سرویس دهی
              </Link>
            </li>
            <li className="nav-item">
              <Link
              to="/product"
              className="nav-links"
              onClick={closeMobileMenu}
              >
              درباره من
              </Link>
            </li>
            <li className="nav-item">
              <Link
              to="/sign-up"
              className="nav-links"
              onClick={closeMobileMenu}
              >
              ثبت نام
              </Link>
              <li className="nav-item">
              <Link
              to="/"
              className="nav-links"
              onClick={closeMobileMenu}
              >
              خانه
              </Link>
            </li>
            </li>
          </ul>
          {button && <button buttonStyle="btn--outline">ثبت نام</button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
