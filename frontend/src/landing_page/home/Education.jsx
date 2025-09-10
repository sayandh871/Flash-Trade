import React from "react";
import { MoveRight } from "lucide-react";
import educationimg from "../../assets/education.svg";

function Education() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col">
          <img src={educationimg} alt="" />
        </div>
        <div className="col">
          <h2>Free and open market education</h2>
          <p className="mt-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{textDecoration:'none'}}>Varsity <MoveRight /></a>
          <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="" style={{textDecoration:'none'}}>TradingQ&A <MoveRight /></a>
        </div>
      </div>
    </div>
  );
}

export default Education;
