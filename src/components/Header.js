import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import User from "./User";
import {useSelector } from "react-redux/es/hooks/useSelector";

const Header=()=>{
    const [btnNameReact,setBtnNameReact]=useState("login");
    const onlineStatus=useOnlineStatus();
    const {user} =useContext(UserContext);
    const cartItems=useSelector(store=>store.cart.items);
   console.log(cartItems); 
    return(
        <>
            <div className="flex justify-between bg-pink-50 shadow-lg">
            <div className="logo-container">
                <img className="h-28 p-2" src={LOGO_URL}></img>
                </div>
            <div className="nav-items">
            <ul className="flex py-10">
            <li>Online Status:{onlineStatus?"online":"offline"}</li>
                <li className="px-2"><Link to="/">Home</Link></li>
                <li className="px-2"><Link to="/about">About us</Link></li> 
                <li className="px-2"><Link to="/contact">Contact us</Link></li>
                <li className="px-2"><Link to="/grocery">Grocery</Link></li>
                <li className="px-2"s><Link to="/cart">Cart -{cartItems.length} items</Link></li>
                <span className="p-10 font-bold text-red-900">{user.name}</span>
                <button className="login" onClick={()=>{
                    btnNameReact==="login"?setBtnNameReact("logout"):setBtnNameReact("login")
                }}>{btnNameReact}
                    
                </button>
            </ul>

            </div>
            </div>
        </>
    )
}

export default Header;