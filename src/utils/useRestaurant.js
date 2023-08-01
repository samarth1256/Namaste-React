import { useState,useEffect } from "react";
import { MENU_API } from "./constants";
//import { useParams } from "react-router-dom";

const useRestaurant=(resId)=>{

    const [resInfo,setResInfo]=useState(null);

    //Get data from API

    useEffect(()=>{
        fetchMenu();
    },[]);
    
    const fetchMenu= async()=>{
        const data=await fetch(MENU_API+resId);
        const json=await data.json();
        console.log(json);
        setResInfo(json.data);
    };
//return restuarant data
    return resInfo
}

export default useRestaurant;