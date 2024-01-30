import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants]= useState([]); // The second parameter updates the first variable when it is called elsewhere. At this point, 'listOfRestaurant' is blank i.e., a blank array
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText,setSearchText] = useState("");
  
  useEffect(()=>{fetchData();},[]); // fetchData() is the effect/side-effect that runs by default here.
  
  const fetchData= async ()=>{
    const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
    // awaits further execution till the API fetches data from cross-origin source.
    const json = await data.json();
    console.log(json); // Just to record what is being fetched from remote server in JSON format
    
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //Optional chaining
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
               filteredRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
            </div>
        </div>
    );
};
export default Body;