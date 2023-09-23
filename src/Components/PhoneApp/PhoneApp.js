import React from "react";
import buttonA from "../../images/BtnA.png"
import buttonB from "../../images/BtnB.png"
import phoneImage from "../../images/phone-img.png"
const PhoneApp = () => {
  return (
    <>
      <div className="phone-section">
        <div className="phone--text">
          <h3>
            Try the future, today. <br></br>Download Crypto
          </h3>
          <p>
            Stay connected to the market with our mobile app. Featuring <br></br>advanced
            order types and analytical tools for experienced <br></br>traders, as well as
            a simple buy & sell interface for those just<br></br> getting started.
          </p>
          <div className="phone--btn">
            <img src={buttonA} alt="A button"></img>
            <img src={buttonB} alt="A button"></img>
          </div>
        </div>
        <div className="phone-image">  <img src={phoneImage} alt="A Phone"></img></div>
      </div>
    </>
  );
};
export default PhoneApp;
