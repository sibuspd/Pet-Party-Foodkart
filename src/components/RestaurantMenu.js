import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    
    useEffect(()=>{
        fetchMenu();},[]);

const fetchMenu = async () => {
    const data = await fetch(MENU_API);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
}
    return(resInfo===null)?<Shimmer/>:(
        <div className="menu">
            <h1>Restaurant Name</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biriyani</li>
                <li>Chowmein</li>
                <li>Pizza</li>
            </ul>
        </div>
    );
}
export default RestaurantMenu;