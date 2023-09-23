import React from "react";
import Button from "../Hero/button";
import shapeA from "../../images/shapeA.png"
import shapeB from "../../images/shapeB.png"
const Subscribe = () => {
   
    
    return(
        <>
         <div className="subscribe-main">
            <div><img className="hide-image" src={shapeA} alt="shape" ></img></div>
           <div className="subcribe-block">
            <p className="subscribe-text-main">Never miss a drop</p>
            <p className="subscribe-text">Subscribe for the latest news, drops & collectibles</p>
            <div className="button-subsribe"> <Button className="button btn-secondary" to="/">
                Subscribe
             </Button></div>
           </div>
           <div><img className="hide-image" src={shapeB} alt="shape" ></img></div>

         </div>
        </>
    )
}
export default Subscribe;