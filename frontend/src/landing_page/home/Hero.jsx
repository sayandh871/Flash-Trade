import React from "react";
import hero from "../../assets/homeHero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col text-center">
          <img src={hero} alt="Hero Image" className="img-fluid mb-4" />
          <h1 className="mb-3">Invest in everything</h1>
          <p className="mb-4">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <Link to="/signup"><button className="btn btn-primary ">Sign up for free</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
