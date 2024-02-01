import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants]= useState([]); // The second parameter updates the first variable when it is called elsewhere. At this point, 'listOfRestaurant' is blank i.e., a blank array
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText,setSearchText] = useState("");
  
  useEffect(()=>{fetchData();},[]); // fetchData() is the effect/side-effect that runs by default here.
    
  const fetchData= async ()=>{
    const data = await  fetch(API_URL); 
    // awaits further execution till the API fetches data from cross-origin source.
    const json = await data.json();
    console.log(json); // Just to record what is being fetched from remote server in JSON format
    
    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || 
    json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    //created a variable to store changing data from API based on screen size using Logical OR to avoid falsy value with optional chaining
    
    setListOfRestaurants(restaurants); 
    setFilteredRestaurant(restaurants);
    console.log(restaurants);
  };
  return(listOfRestaurants.length===0)? // When the array is empty (Conditional Rendering) 
  <Shimmer/>: // '?:' combination is ternary operator
  (
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" placeholder="Search here"className="search-box" value={searchText}
                onChange={(e)=> {setSearchText(e.target.value);}}/>
                </div>
              
              <button className="searchBtn" onClick={()=>{
                const filtered_Restaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurant(filtered_Restaurant);}}>Search</button>

              <button className="filter-btn" onClick={()=>{const filteredlist = listOfRestaurants.filter((res)=>res.info.avgRating>4.3);
              setListOfRestaurants(filteredlist);}}> Top Rated </button>
            </div>

            <div className="res-container">
              {
               filteredRestaurant.map((restaurant) => (
               <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>))}
            </div>
        </div>
    );
}
export default Body;