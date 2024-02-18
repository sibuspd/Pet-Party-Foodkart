import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-2 p-3">
        <h1 className="text-2xl font-extrabold p-auto bg-red-200">Cart</h1>
        <div className="w-6/12 m-auto bg-green-50">
            <button className="p-2 m-2 mt-2 bg-green-950 text-white rounded-md font-normal"
            onClick={handleClearCart}>
            Clear Cart</button>
            {cartItems.length===0 && <h1>Card is empty. PLease add Items.</h1>}
            <ItemList items={cartItems}/>
        </div>
    </div>
    );
};

export default Cart;