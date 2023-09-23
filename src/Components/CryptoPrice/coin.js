import React from "react";
import CoinItem from "./CoinItem";
const Coins = (props) => {
    
    return(
        <>
            <div>
                <div>
                    <div className="coins--list-heading">
                        <p>#</p>
                        <p>Name</p>
                        <p>Current price</p>
                        <p>24hrs %</p>
                        <p>Mkt cap 24</p>
                        <p>Volume 24hrs</p>
                        <p>Mkt cap</p>
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