import React, { useEffect } from "react";
import RestaurantCard,{withPromotedLAbel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Footer from "./Footer";
import UserContext from "../utils/UserContext";

const Body=()=>{
    const [ListOfRestaurants,setListOfRestaurant]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchText,setSearchText]=useState("");
    const {user,setUser}=useContext(UserContext);
    const RestaurantCardPromoted=withPromotedLAbel(RestaurantCard);
    // console.log(ListOfRestaurants);
    const onlineStatus=useOnlineStatus();

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6467603&lng=77.1156166&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json);
    //optional chaining
        const {data : {cards}} = json;
        // console.log('Cards', cards);
        //const {gridElements} = cards[2].card.card;
        //setListOfRestaurant(cards);
        const a =cards[2].card.card.gridElements.infoWithStyle.restaurants


        console.log(a)
        //setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurant(a)
    };

    if(onlineStatus===false){
        return(
            <h1>Looks like you are offline!!Please check your internet connection</h1>
        )
    }

    if(!filteredRestaurant.length) return ( <Shimmer/>);
 
    return (
        <div className="body">
            <div className="filter">
            <div className="search p-5 bg-pink-50 m-5">
                <input type="text" className="focus:bg-gray-100 p-2 m-2" placeholder="Search" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button className="p-2 m-2 bg-purple-900 text-white rounded-lg hover:bg-pink-800" onClick={()=>{
                    console.log(searchText);
                    //filter the restaurant card and update the UI
                    const filteredRestaurant=ListOfRestaurants.filter((res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                    // setFilteredRestaurant(filteredRestaurant);
                }}>Search</button>
                <input value={user.name} 
                onChange={
                    (e)=>setUser({
                       // ...user,
                        name: e.target.value,
                        email: "Hello@gmail.com",
                    })
                }
                ></input>
            </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList=ListOfRestaurants.filter(
                        (res)=> res.data.avgRating > 4
                    );
                    setListOfRestaurant(filteredList);
                }}>Top Rated Restaurant</button>
                
            </div>
            <div className="flex flex-wrap">
            {filteredRestaurant.map((restaurant)=>(
            
                // <h3>{restaurant.info.name}</h3>
               <Link key={restaurant.info.id}
                to={"/restaurants/"+ restaurant.info.id}>
                {<RestaurantCard  resData={restaurant.info}/>}
                // 
                //   
                </Link> 
               
             ) )}
<div><Footer/></div>
            </div>
        </div>
    )
}

export default Body;
