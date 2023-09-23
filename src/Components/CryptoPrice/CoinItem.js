import React from "react";
const CoinItem = (props) => {
const market_price = props.coin.current_price
const textStyle = {
    color: market_price > 0 ? 'white' : 'red',
}
    return(
        <>
            <div>
                <div className="coins--list .coin--underline">
                   <p className="hide-crypto">{props.coin.market_cap_rank}</p>
                   <div className="coin--description">
                     <img className="coin--img" src={props.coin.image} alt="bitcoin"/>
                     <p>{props.coin.name}</p>
                     <p className="coin-symbol">{props.coin.symbol.toUpperCase()}</p>   
                   </div>
                   <p>${props.coin.current_price}</p>
                   <p style={textStyle}>{props.coin.price_change_percentage_24h.toLocaleString()}%</p>
                   <p>${props.coin.market_cap_change_24h.toFixed(2)}</p>
                   <p className="hide-coin">${props.coin.total_volume.toLocaleString()}</p>
                   <p className="hide-coin">${props.coin.market_cap.toLocaleString()}</p>
                </div>
               
            </div>
        </>
    )
}
export default CoinItem;