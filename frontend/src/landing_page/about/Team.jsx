import logo from "../../assets/flashtradelogo.svg";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-4 ms-5 mb-5">
          <img
            src={logo}
            alt="flash-trade logo"
            style={{ width: "35rem", height: "20rem" }}
          />
        </div>
        <div className="col-7 p-5 ms-5">
          <p className="fs-5">
            Flash Trade was built to break barriers in stock trading and make
            lightning-fast, reliable, and affordable investing accessible to
            everyone.
          </p>
          <p className="fs-5">
            Focused on empowering traders and investors, Flash Trade is actively
            driving conversations around market growth, financial literacy, and
            the future of fintech.
          </p>
          <p className="fs-5">Exploring new strategies and technologies is our zen.</p>
          
        </div>
        
      </div>
    </div>
  );
}

export default Team;
