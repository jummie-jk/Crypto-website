import React from "react";
import Navbar from './NavBar';
import Button from "./button";
import coin from "../images/coin.png"
import CryptoPrice from "./Crypto";
function Hero() {
    return (
          <>
             <div className="hero--Section">
                  <Navbar/>
                  <div className="hero--content">
                     <div className="hero--text">
                        <h1 className="hero--text--main">Make better business<br></br> with Cryptocurrency</h1>
                        <p>We offers users a fully operational long-term rental platform.<br></br>
                         It plans to leverages blockchain technology.</p>
                        <Button className="button btn-secondary" to="/signup">Get Started</Button>
                     </div>
                     <div>
                           <img
                        src={coin}
                        alt="bit-coin"
                        className="hero--image"
                        />
                     </div>
                  </div>
             </div>
             <CryptoPrice />
          </>
    );
  }
  
  export default Hero;