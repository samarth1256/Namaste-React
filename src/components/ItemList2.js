import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList2=({items})=>{

    const dispatch=useDispatch(); 

    const AddFoodItem=(item)=>{

        dispatch(addItem(item));
    }

    const handleAddItems=()=>{
        dispatch(addItem("Grapes"));
    }

    return <div>
    {items.map((item)=>(
        <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
       
        <div className="w-9/12">
            <div className="py-2"><span>{item.card.info.name}</span>
            <span>-₹ {item.card.info.price?
                item.card.info.price/100:
                item.card.info.defaultPrice/100}</span></div>
            <p className="text-sm">{item.card.info.description}</p></div>
             <div className="w-3/12 p-2">
             <div className='absolute'>
             <button className="p-1 bg-green-50" onClick={()=>{AddFoodItem(item)}}>Add</button>
            </div>
             {/* <div className="absolute">
             <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">Add +</button></div> */}
            <img src={CDN_URL +item.card.info.imageId } />
            
            </div>
        </div>
    ))}
    </div>
    }
    
    export default ItemList2;