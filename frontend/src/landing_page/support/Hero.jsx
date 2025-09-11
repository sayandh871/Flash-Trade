import {Search} from 'lucide-react'

function Hero() {
  return (
    <div className="container-fluid " style={{ backgroundColor: "#f6f6f6" }}>
      <div className="row pt-5">
        <div className="col-10">
          <h2 className="fw-bold ps-5 ms-5">Support Portal</h2>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-primary">
            My tickets
          </button>
        </div>
      </div>
      <div className="row p-5 ">
        <div className="input-group px-5">
          <span className="input-group-text" id="visible-addon">
            <Search strokeWidth={2.75} />
          </span>
          <input
            type="text"
            className="form-control p-3"
            placeholder="Eg: How do i open my account, How do i activate F&o..."
            aria-label="Username"
            aria-describedby="visible-addon"
          />
          <input
            type="text"
            className="form-control d-none"
            placeholder="Hidden input"
            aria-label="Hidden input"
            aria-describedby="visible-addon"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
