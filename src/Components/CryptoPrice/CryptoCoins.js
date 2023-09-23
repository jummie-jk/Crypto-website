import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Coins from "./coin";
import { motion, useAnimation } from 'framer-motion';

function CryptoPrice() {
  const [coin, setCoin] = useState([]);
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en';

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

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); 

  return (
    <div className="crypto--page">
      <motion.div 
        ref={elementRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <p className="crypto--text">Today's Cryptocurrency Price</p>
        <Coins coin={coin} />
      </motion.div>
    </div>
  );
}

export default CryptoPrice;


 




