import React from "react";
import broker from "../../assets/largestBroker.svg";
import press from "../../assets/pressLogos.png";
function Awards() {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-6 p-5">
          <img src={broker} alt="" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest stock broker in india</h1>
          <p className="mb-5">
            Customer-first always That's why 1.6+ crore customers trust Zerodha
            with ₹6 lakh crores of equity investments, making us India’s
            largest broker
          </p>
          <ul>
            <div className="row mb-5">
                <div className="col-6 ">
                    <li><p>Future and Options</p></li>
                    <li><p>Commodity derivatives</p></li>
                    <li><p>Currency derivatives</p></li>
                </div>
                <div className="col-6 ">
                    <li><p>Stocks and IPOs</p></li>
                    <li><p>Direct mutual funds</p></li>
                    <li><p>Bonds and Govt. Securities</p></li>
                </div>
                
            </div>
          </ul>
          <img src={press} alt="press logo"style={{width:'90%'}} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
