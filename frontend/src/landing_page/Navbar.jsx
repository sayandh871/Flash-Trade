import React from "react";
import logo from "../assets/flashtradelogo.svg";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom "
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container ">
        {/* Logo on the Left */}
        <a className="navbar-brand ms-5" href="#">
          <img
            src={logo}
            alt="logo"
            style={{ width: "12rem", height: "3rem" }}
          />
        </a>

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
              <a className="nav-link active" aria-current="page" href="#">
                SignUp
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link active" href="#">
                About
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link active" href="#">
                Product
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link active" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link active" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
