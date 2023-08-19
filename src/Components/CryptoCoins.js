import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./coin";

function CryptoPrice() {
  const [coin, setCoin] = useState([]);
  const url =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en'

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoin(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      }, []);
  });
  return (
    <>
      <div className="crypto--page">
        <p className="crypto--text">Today's Cryptocurrency Price</p>
        <Coins coin = {coin} />
      </div>
    </>
  );
}

export default CryptoPrice;
