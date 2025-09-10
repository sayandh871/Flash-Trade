import React from "react";
import ecosystem from "../../assets/ecosystem.png";
import {MoveRight} from 'lucide-react'
import './homepage.css'

function Stats() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6 p-5">
          <h1 className="mb-5">Trust with confidence</h1>
          <h3 className="subheading">Customer First Philosophy</h3>
          <p className="mb-5">
            No gimmicks. No spam. No unnecessary notifications. Just a clean,
            intuitive experience 
          </p>
          <h3 className="subheading">The FlashTrade Ecosystem</h3>
          <p className="mb-5" >
            More than just an app—we’re building an entire ecosystem for
            investors. With partnerships and tools designed for your financial
            growth.
          </p>
          <h3 className="subheading">Smart Investing, Simplified</h3>
          <p className="mb-5">
            From advanced risk management tools to insightful analytics,
            FlashTrade helps you make smarter investment decisions, guiding you
            to do better with your money every step of the way.
          </p>
          <h3  className="subheading">Innovation for the Future</h3>
          <p  className="mb-5">
            At FlashTrade, we’re constantly evolving to bring you cutting-edge
            tools powered by AI and data-driven insights.
          </p>
        </div>
        <div className="col-6 p-5 ">
          <img src={ecosystem} alt="ecosystem-image" style={{ width: "100%" }} />
          <div className="links">
            <a href="" className="">Explore our products <MoveRight /></a>
            <a href="">Try kite demo <MoveRight /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
