import React from "react";
import CoinItem from "./CoinItem";
const Coins = (props) => {
    
    return(
        <>
            <div>
                <div>
                    <div className="coins--list-heading">
                        <p>Market Rank</p>
                        <p>Name</p>
                        <p>Current price</p>
                        <p>24hrs %</p>
                        <p>Mkt cap 24</p>
                        <p className="hide-coin">Volume 24hrs</p>
                        <p className="hide-coin">Mkt cap</p>
                    </div>
                </div>
                {props.coin.map(coin => {
                    return(
                        <CoinItem coin = {coin} key={coin.id}/>
                    )
                })}
            </div>
        </>
    )
}
export default Coins;