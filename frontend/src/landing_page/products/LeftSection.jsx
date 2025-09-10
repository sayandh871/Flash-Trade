import googlePlayBadge from "../../assets/googlePlayBadge.svg";
import appstoreBadge from "../../assets/appstoreBadge.svg";
import { MoveRight } from "lucide-react";

function LeftSection({
  imageUrl,
  productName,
  productDescription
}) {
  return (
    <div className="container ">
      <div className="row p-5">
        <div className="col-6 p-5">
          <img src={imageUrl} alt="product-image" />
        </div>
        <div className="col-2"></div>
        <div className="col-4 p-5 mt-5">
          <h1 className="fs-2 mb-4">{productName}</h1>
          <p className="fs-6">{productDescription}</p>
          <a href="" className="me-5" style={{textDecoration:'none'}}>
            Try demo <MoveRight />
          </a>
          <a href="" style={{textDecoration:'none'}}>
            Learn more <MoveRight />
          </a>
          <br />
          <a href="" className="d-inline-block mt-5 me-3" >
            <img src={googlePlayBadge} alt="googleplay-image" />
          </a>
          <a href="" className="d-inline-block mt-4 me-3">
            <img src={appstoreBadge} alt="appstore-image" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
