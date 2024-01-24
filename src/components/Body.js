import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/demodata";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants]= useState([]);

  useEffect(()=>{fetchData();},[]);
  
  const fetchData= async ()=>{
    const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
    // awaits further execution till the API fetches data from cross-origin source.
    const json = await data.json();
    console.log(json); // Just to record what is being fetched from remote server in JSON format
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
};
  return (
        <div className="body">
            <div className="filter">
              <button className="filter-btn"onClick={()=>{const filteredlist = listOfRestaurants.filter((res)=>res.info.avgRating>4.3);
              setListOfRestaurants(filteredlist);}}> Top Rated </button>
            </div>
            <div className="res-container">
              {
               listOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
              }
            </div>
        </div>
    )
}
export default Body;