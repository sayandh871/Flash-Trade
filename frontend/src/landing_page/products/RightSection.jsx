import { MoveRight } from "lucide-react";

function RightSection({ imageUrl, heading, description }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 d-flex flex-column justify-content-center p-5">
          <h1 className="fs-2 mb-4">{heading}</h1>
          <p className="fs-6 ">{description}</p>
          <a href="" style={{textDecoration:'none'}}>Learn more <MoveRight /></a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
