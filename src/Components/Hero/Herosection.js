import React from "react";
import Navbar from "./NavBar";
import Button from "./button";
import coin from "../../images/coin.png";
import CryptoPrice from "../CryptoPrice/CryptoCoins";
import AboutUs from "../AboutUs/AboutUs";
import PhoneApp from "../PhoneApp/PhoneApp";
import CryptoNews from "../TrendingCrypto/CryptoNews";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/footer";
function Hero() {
  return (
    <>
      <div className="hero--Section wavy-background">
        <Navbar />
        <div className="hero--content">
          <div className="hero--text">
            <h1 className="hero--text--main">
              Make better business<br></br> with Cryptocurrency
            </h1>
            <p>
              We offers users a fully operational long-term rental platform.
              <br></br>
              It plans to leverages blockchain technology.
            </p>
            <Button className="button btn-secondary" to="/signup">
              Get Started
            </Button>
          </div>
          <div>
            <img src={coin} alt="bit-coin" className="hero--image image hide-mobile" />
          </div>
        </div>
      </div>
      <CryptoPrice />
      <AboutUs />
      <PhoneApp />
      <CryptoNews/>
      <Subscribe/>
      <Footer/>
    </>
  );
}
export default Hero;

// curl -X 'GET' \ 'https://api.coingecko.com/api/v3/search/trending' \ -H 'accept: application/json'
