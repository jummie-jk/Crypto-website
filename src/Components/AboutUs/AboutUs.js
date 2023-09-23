import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import iconA from "../../images/icon.svg";
import iconB from "../../images/iconb.svg";
import iconC from "../../images/iconc.svg";

const AboutUs = () => {
  const controls = useAnimation();
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;

    const onScroll = () => {
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the element is partially in the viewport
        if (top < windowHeight * 0.75 && top > -element.clientHeight) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 50 });
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Check initial state

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [controls]);

  return (
    <div className="aboutus--main">
      <div className="aboutus--main--text">
        <motion.p
          ref={elementRef}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          The most trusted cryptocurrency platform
          <div className="about-us-list">
        <div>
          <img src={iconA} alt="" />
          <h3>Ease of Trading</h3>
          <p>Intuitive interface</p>
          <p>Instant deposit options</p>
          <p>Cash out directly to your bank account</p>
        </div>
        <div className="about-middle">
          <img src={iconB} alt="" />
          <h3>Institutional-grade Security</h3>
          <p>98% of assets stored safely offline</p>
          <p>Highly encrypted personal data</p>
          <p>Whitelisting and transaction confirmations</p>
        </div>
        <div>
          <img src={iconC} alt="" />
          <h3>Proven Reliability</h3>
          <p>24/7 dedicated support</p>
          <p>Industry-leading uptime</p>
          <p>Exchanging bitcoin since 2011</p>
        </div>
      </div>
        </motion.p>
      </div>

    </div>
  );
};

export default AboutUs;
