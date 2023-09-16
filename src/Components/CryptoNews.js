import React, { useEffect, useState } from 'react';
import axios from 'axios';
const CryptoNews = () => {
  const [news, setNews] = useState([]); // Initialize news as an empty array
  const url = 'https://api.coingecko.com/api/v3/search/trending';

  useEffect(() => {
    // Use an empty dependency array to ensure this effect runs only once on component mount
    axios
      .get(url)
      .then((response) => {
        // Update the state with the fetched data
        setNews(response.data.coins); // Assuming you want the 'coins' array from the response
        console.log(response.data.coins);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Empty dependency array means this effect runs only once

  return (
    <>
      <div>
        <div className='trending-block'>
          <h1 className='trending--main--text'>Top 7 Trending Search Coins</h1>   
          <ul>
          <div className='trending-coins-all'>   
            {news.map((item, index) => (
                <li key={item.item.id}>
                   
                    <img className="trending-img" src={item.item.large} alt={item.item.name} />
                    <h2 className="trending-name" >{item.item.name}</h2>
                    <p className='trending-p'><strong>Market Cap Rank:</strong> {item.item.market_cap_rank}</p>
                    <p className='trending-p'><strong>Price:</strong> {item.item.price_btc}</p>
                    <p className='trending-p'>{item.item.symbol}</p>
                   
                </li>
            ))}
             </div> 
            </ul>
        </div>
      </div>
    </>
  );
};

export default CryptoNews;


//4a1e50fa-10ad-425f-8208-019277e0b494

// /v1/content/posts/top
// /v1/content/posts/latest now available to get cryptocurrency-related latest posts.
// /v1/content/posts/comments now available to get comments of the post.