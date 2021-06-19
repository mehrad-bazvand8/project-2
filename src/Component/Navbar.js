import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Button } from "./button";
import { Route, NavLink, HashRouter, Link, Form } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { BiCart } from "react-icons/bi";
function Navbar() {
  const [Click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handelClick = () => setClick(!Click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-Top ">
            <div>
              <form className="d-flex input-group w-auto">
                <input
                  type="search"
                  className="nav-input"
                  placeholder="Type query"
                  aria-label="Search"
                />
                <Button className="nav-Search-button" buttonStyle="btn--Search">
                  <FiSearch />
                </Button>
              </form>
            </div>
            <Link to="/" className="navbar-logo-link" onClick={closeMobileMenu}>
              DIGISTYLE
            </Link>
            {button && (
              <Link to="/" className="navbar-button" onClick={closeMobileMenu}>
                <div className="nav-button">
                  <BiCart /> <Badge variant="light">0</Badge>
                  <span className="sr-only">unread messages</span>
                </div>
              </Link>
            )}
          </div>
          <div className="nav-Top">
            <p className="line-p-nav"></p>
          </div>
          <div className=" nav-ul ">
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
                  خانه طراحان ایرانی
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  برند ها
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  فروش ویژه
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  زیبایی و سلامت
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/product"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  بچگانه
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sign-up"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  مردانه
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  زنانه
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
