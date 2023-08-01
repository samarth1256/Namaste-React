import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";


const RestaurantCard=(props)=>{
    
    
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData;
    return(
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
        <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h3 className="font-bold text-xl">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>Rs{costForTwo/100} For Two</h4>
            
            
        </div>
    )
} 

//Higher order component
//input- Restaurantcard ==> RestaurantCardPromoted

export const withPromotedLAbel=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
            <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;