import React from "react";
import iconA from "../images/icon.svg"
import iconB from "../images/iconb.svg"
import iconC from "../images/iconc.svg"
const AboutUs = (p) => {
  
    return(
        <>
         <div className="aboutus--main">
            <div className="aboutus--main--text"><p>The most trusted cryptocurrency platform</p></div>
            <div className="about-us-list">
                <div>
                    <img src={iconA} alt=""></img>
                    <h3>Ease of Trading</h3>
                    <p>Intuitive interface</p>
                    <p>Instant deposit options</p>
                    <p>Cash out directly to your bank account</p>
                </div>
                <div>
                <img src={iconB} alt=""></img>
                    <h3>Institutional-grade Security</h3>
                    <p>98% of assets stored safely offline</p>
                    <p>Highly encrypted personal data</p>
                    <p>Whitelisting and transaction confirmations</p>
                </div>
                <div>
                <img src={iconC} alt=""></img>
                    <h3>Proven Reliability</h3>
                    <p>24/7 dedicated support</p>
                    <p>Industry-leading uptime</p>
                    <p>Exchanging bitcoin since 2011</p>
                </div>
            </div>
         </div>
        </>
    )
}
export default AboutUs;