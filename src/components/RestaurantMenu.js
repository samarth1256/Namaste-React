//import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu=()=>{

    //const [resInfo,setResInfo]=useState(null);
    const [showIndex,setShowIndex]=useState(null);
    const {resId}=useParams();
    const resInfo=useRestaurant(resId);
    const dispatch=useDispatch(); 

    const AddFoodItem=(item)=>{

        dispatch(addItem(item));
    }

    const handleAddItems=()=>{
        dispatch(addItem("Grapes"));
    }

/*useEffect(()=>{
    fetchMenu();
},[]);

const fetchMenu= async()=>{
    const data=await fetch(MENU_API+resId);
    const json=await data.json();
    console.log(json);
    setResInfo(json.data);
};*/

if (resInfo===null) return <Shimmer/>;

const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;

//const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

//console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]===
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

console.log(categories);

return(
(<div className="text-center">
    <h1 className="font-bold my-6 text-2xl">{name}</h1>
    <p className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>
{/* <h2>Menu</h2>
<ul>
    {itemCards.map((item)=>(
        <li key={item.card.info.id}>{item.card.info.name} - {"Rs "}{item.card.info.price/100} - 
        <button className="p-1 bg-green-50" onClick={()=>{AddFoodItem(item)}}>Add</button></li>
    ))}
</ul> */}
{/* categories accordian */}
{categories.map((category,index)=>(
    <RestaurantCategory key={category.card?.card.title} data={category.card?.card} showItems={index===showIndex? true:false}
    setShowIndex={()=>setShowIndex(index)}/>
)

)}
<div>
                <button className="p-2 m-5 bg-green-100" onClick={()=>handleAddItems()}>Add Item</button>
            </div>
</div>)
);


};

export default RestaurantMenu;