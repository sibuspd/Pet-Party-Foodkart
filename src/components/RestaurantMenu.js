import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    
    useEffect(()=>{
        fetchMenu();},[]);

const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.51981990724166&lng=73.86026275822753&restaurantId=");
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