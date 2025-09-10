import image1 from '../../assets/pricing-eq.svg'
import image2 from '../../assets/intradayTrades.svg'


function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 border-bottom p-5">
        <h1>Pricing</h1>
        <p>Free equity investments and flat ₹20 traday and F&O trades</p>
      </div>
      <div className="row text-center p-5 mb-5">
        <div className="col-4">
          <img src={image1} style={{width:"80%"}} />
          <h3>Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src={image2} style={{width:"80%"}} />
          <h3>Intraday and F&O trades</h3>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src={image1} style={{width:"80%"}} />
          <h3>Free direct MF</h3>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
