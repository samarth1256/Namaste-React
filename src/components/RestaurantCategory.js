import { useState } from "react";
import ItemList2 from "./ItemList2";


const RestaurantCategory=({data,showItems,setShowIndex})=>{

    // const [showItems,setShowItems]=useState(false);
     const handClick=()=>{setShowIndex()};
        
    
    // console.log(data)
    return <div>
    {/* Header */}
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handClick}>
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span>⬇️</span>
        </div>
       {showItems &&<ItemList2 items={data.itemCards}/>}
    </div>
    {/* Body */}

    </div>
}

export default RestaurantCategory;