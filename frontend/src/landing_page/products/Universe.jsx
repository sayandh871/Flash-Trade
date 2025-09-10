import image1 from "../../assets/zerodhaFundhouse.png";
import image2 from "../../assets/sensibullLogo.svg";
import image3 from "../../assets/tijori.svg";
import image4 from "../../assets/streakLogo.png";
import image5 from "../../assets/smallcaseLogo.png";
import image6 from "../../assets/dittoLogo.png";
import './products.css'

function Universe() {
  return (
    <div className="container text-center p-5">
      <div className="row mb-5">
        <h1>The Flash Trade Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row ">
        <div className="col-4">
          <img src={image1} alt="image"  className="universe-img img-fluid mb-3" />
          <p className="text-small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save your goals.
          </p>
        </div>
        <div className="col-4">
          <img src={image2} alt="image"  className="universe-img img-fluid mb-3"  />
          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4">
          <img src={image3} alt="image"  className="universe-img img-fluid mb-3" />
          <p>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <img src={image4} alt="image"   className="universe-img img-fluid mb-3"/>
          <p>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4">
          <img src={image5} alt="image"   className="universe-img img-fluid mb-3"/>
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4">
          <img src={image6} alt="iamge"   className="universe-img img-fluid mb-3"/>
          <p>
            {" "}
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
