import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants]= useState([]); // The second parameter updates the first variable when it is called elsewhere. At this point, 'listOfRestaurant' is blank i.e., a blank array
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText,setSearchText] = useState("");
  
  useEffect(()=>{fetchData(); const timer = setInterval(()=>{console.log("Rendering")},1000);
                  return(()=> {clearInterval(timer); console.log("useEffect withdrawn")});},[]); 
// fetchData() is the effect/side-effect that runs by default here.
    
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

  const onlineStatus = useStatus();

  if(onlineStatus===false) return <h1>You are offline. Please check your internet connection</h1>
  else return(listOfRestaurants.length===0)? // When the array is empty (Conditional Rendering) 
  <Shimmer/>: // '?:' combination is ternary operator
  (
        <div className="body">
            <div className="filter ml-10">
              <div className="search m-1 p-1 inline-flex">
                <input type="text" placeholder="Search here" className="border border-solid border-blue-950" value={searchText}
                onChange={(e)=> {setSearchText(e.target.value);}}/>
                </div>
              
              <button className="searchBtn px-5 mx-3 bg-green-300 rounded-xl" onClick={()=>{
                const filtered_Restaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurant(filtered_Restaurant);}}>Search</button>

              <button className="filter-btn px-5 mx-4 bg-blue-200 rounded-xl" onClick={()=>{const filteredlist = listOfRestaurants.filter((res)=>res.info.avgRating>4.3);
              setListOfRestaurants(filteredlist);}}> Top Rated </button>
            </div>

            <div className="ml-10 mt-2 shadow-md res-container flex flex-wrap">
              {
               filteredRestaurant.map((restaurant) => (
               <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>))}
            </div>
        </div>
    );
}
export default Body;