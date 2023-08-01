import React from "react";
import { CDN_URL } from "../utils/constants";

const FoodItem=({imageId,name,description,price})=>{
    return(
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
        <img className="res-logo" alt="res-logo" src={CDN_URL+imageId}></img>
            <h3 className="font-bold text-xl">{name}</h3>
            {/* <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>Rs{costForTwo/100} For Two</h4> */}
            <h4>{description}</h4>
            <h4>Rupees: {price/100}</h4>
            
        </div>
    );
} 

export default FoodItem;