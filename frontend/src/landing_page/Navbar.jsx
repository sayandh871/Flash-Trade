import React from "react";
import logo from "../assets/flashtradelogo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom "
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container ">
        {/* Logo on the Left */}
        <Link className="navbar-brand ms-5" to="/">
          <img
            src={logo}
            alt="logo"
            style={{ width: "12rem", height: "3rem" }}
          />
        </Link>

        {/* Toggler for smaller screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav items aligned right */}
        <div className="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item me-4">
              <Link className="nav-link active" aria-current="page" to="/signup">
                SignUp
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/products">
                Product
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
