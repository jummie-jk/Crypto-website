import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "../Hero/button";
import shapeA from "../../images/shapeA.png";
import shapeB from "../../images/shapeB.png";

const Subscribe = () => {
  const controls = useAnimation();
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;

    const onScroll = () => {
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed
        if (top < windowHeight * 0.75) {
          controls.start({ opacity: 1, y: 0 });
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
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1.5}}
      className="subscribe-main"
    >
      <div>
        <img className="hide-image" src={shapeA} alt="shape" />
      </div>
      <div className="subcribe-block">
        <p className="subscribe-text-main">Never miss a drop</p>
        <p className="subscribe-text">Subscribe for the latest news, drops & collectibles</p>
        <div className="button-subsribe">
          <Button className="button btn-secondary" to="/">
            Subscribe
          </Button>
        </div>
      </div>
      <div>
        <img className="hide-image" src={shapeB} alt="shape" />
      </div>
    </motion.div>
  );
};

export default Subscribe;
