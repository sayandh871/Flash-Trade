import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Kite from "../../assets/kite.png";
import console from "../../assets/console.png";
import coin from '../../assets/coin.png'
import kiteconnect from '../../assets/kiteconnect.png'
import varsity from '../../assets/varsity.png'

function Products() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl={Kite}
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
      />
      <RightSection
        imageUrl={console}
        heading="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations"
      />
      <LeftSection
        imageUrl={coin}
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
      />
      <RightSection
        imageUrl={kiteconnect}
        heading="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      />
      <LeftSection
        imageUrl={varsity}
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      />
      <Universe />
    </>
  );
}

export default Products;
