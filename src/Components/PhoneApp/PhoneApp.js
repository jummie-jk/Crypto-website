import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import buttonA from "../../images/BtnA.png";
import buttonB from "../../images/BtnB.png";
import phoneImage from "../../images/phone-img.png";

const PhoneApp = () => {
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
          controls.start({ opacity: 1, x: 0 });
        } else {
          controls.start({ opacity: 0, x: 50 });
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
    <div className="phone-section">
      <div className="phone--text">
        <motion.h3
          ref={elementRef}
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          Try the future, today. <br></br>Download Crypto
        </motion.h3>
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
      <div className="phone-image">
        <motion.img
          src={phoneImage}
          alt="A Phone"
          className="phone-image"
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ duration: 1 }}
        ></motion.img>
      </div>
    </div>
  );
};

export default PhoneApp;
