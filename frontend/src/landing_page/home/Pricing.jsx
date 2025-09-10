import React from "react";
import { MoveRight } from "lucide-react";
import pricing from "../../assets/pricing-eq.svg";
import './homepage.css'

function Pricing() {
  return (
    <div className="container px-5">
      <div className="row">
        <div className="col-4 p-5">
          <h1 className="mb-4">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{textDecoration:'none'}}>
            See pricing <MoveRight />
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 p-5">
            <div className="row text-center">
                <div className="col p-4 border" >
                    <h1 className="mb-3">₹0</h1>
                    <p>Free equity delivery and direct mutual funds</p>
                </div>
                <div className="col p-4 border" >
                    <h1 className="mb-3">₹20</h1>
                    <p>Free equity delivery and direct mutual funds</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
