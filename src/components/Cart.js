import { useSelector,useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import ItemList2 from "./ItemList2";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();


    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    
    return (<div className='text-center m-4 p-4'>
        <h1 className="font-bold text-3xl">Cart Items -{cartItems.length} </h1>
        <div className='w-6/12 m-auto'>
        {cartItems.length===0 && (<h1>Cart is empty. Add items to the cart!</h1>)}
        <ItemList2 items={cartItems}/>
        </div>
        <button className="bg-green-100 p-2 m-5" onClick={()=>handleClearCart()}>Clear</button>
      
    </div>
    );
}

export default Cart;