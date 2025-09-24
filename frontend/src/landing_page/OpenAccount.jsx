import { Link } from "react-router-dom";
function OpenAccount() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col text-center">
          <h1 className="mb-3">Open a Flash Trade account</h1>
          <p className="mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <Link to="/signup"><button className="btn btn-primary ">Sign up for free</button></Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
