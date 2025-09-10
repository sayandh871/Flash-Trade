import { Link } from "react-router-dom";


function NotFound() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col text-center">
          <h1 className="mb-3">404 Not Found</h1>
          <p className="mb-4">
            Sorry the page you are looking for does not exist.
          </p>
          <Link to='/'><button className="btn btn-primary ">Go Home</button></Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
