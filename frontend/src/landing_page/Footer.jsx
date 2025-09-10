import React from "react";
import logo from "../assets/flashtradelogo.svg";
import "../index.css";

function Footer() {
  return (
    <footer className="footer">
      <div
        className="container-fluid border-top mt-5"
        style={{ backgroundColor: "#fbfbfb" }}
      >
        <div className="row mt-5">
          <div className="col ms-5">
            <img
              src={logo}
              alt="logo-img"
              style={{ width: "12rem", height: "3rem" }}
            />
            <p>&copy;2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          </div>
          <div className="col">
            <h3>Company</h3>
            <a href="">About</a>
            <br />
            <a href="">Philosophy</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">Flash trade Cares (CSR)</a>
            <br />
            <a href="">Flashtrade.tech</a>
            <br />
            <a href="">Open source</a>
            <br />
          </div>
          <div className="col">
            <h3>Support</h3>
            <a href="">Contact us</a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">How to file a complaint?</a>
            <br />
            <a href="">Status of your complaints</a>
            <br />
            <a href="">Bulletin</a>
            <br />
            <a href="">Circular</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">Downloads</a>
            <br />
          </div>
          <div className="col">
            <h3>Account</h3>
            <a href="">Open demat account</a>
            <br />
            <a href="">Minor demat account</a>
            <br />
            <a href="">NRI demat account</a>
            <br />
            <a href="">Commodity</a>
            <br />
            <a href="">Dematerialisation</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">MTF</a>
            <br />
            <a href="">Referral program</a>
            <br />
          </div>
        </div>
        <p
          style={{ fontSize: "0.8rem", color: "#555", lineHeight: "1.2" }}
          className="p-5"
        >
          FlashTrade Technologies Pvt. Ltd.: Member of NSE, BSE & MCX – SEBI
          Registration no.: [Your SEBI Reg. No.] CDSL/NSDL: Depository services
          through FlashTrade Technologies Pvt. Ltd. – SEBI Registration no.:
          [Your DP Reg. No.] Commodity Trading through FlashTrade Commodities
          Pvt. Ltd. – SEBI Registration no.: [Your Commodity Reg. No.]
          Registered Address: FlashTrade Technologies Pvt. Ltd., #123, Tech
          Park, 5th Cross, Innovation District, Bengaluru – 560100, Karnataka,
          India.
          <br />
          <br />
          For any complaints related to securities broking, please write to
          complaints@flashtrade.com, for DP related to dp@flashtrade.com.
          <br />
          <br />
          Please carefully read the Risk Disclosure Document as prescribed by
          SEBI.
          <br />
          <br />
          Procedure to file a complaint on{" "}
          <a href="https://scores.gov.in/" target="_blank">
            SEBI SCORES
          </a>
          : Register on SCORES portal. Mandatory details: Name, PAN, Address,
          Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
          grievance redressal.
          <br />
          <br />
          Smart Online Dispute Resolution | Grievances Redressal Mechanism
          <br />
          <br />
          Investments in securities market are subject to market risks. Read all
          related documents carefully before investing.
          <br />
          <br />
          Attention investors: 1) Securities as margin accepted only by pledge
          in depository system (w.e.f Sept 01, 2020). 2) Update e-mail & phone
          with FlashTrade to receive OTP directly for pledging. 3) Check your
          holdings in the monthly consolidated account statement issued by
          NSDL/CDSL.
          <br />
          <br />
          Prevent unauthorized transactions in your account. Update your mobile
          number/email with your stock brokers to receive daily transaction
          details. KYC is one-time exercise – no need to repeat for different
          intermediaries.
          <br />
          <br />
          If subscribing to IPO: No cheque needed. Write your bank account and
          sign the IPO application form. In case of non-allotment, funds stay in
          your bank account.
          <br />
          <br />
          We don’t provide stock tips nor authorize anyone to trade on your
          behalf. If someone claims to represent FlashTrade and offers such
          services, please <a href="/create-ticket">create a ticket here</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
