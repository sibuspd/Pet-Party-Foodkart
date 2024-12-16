import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Homepage_API, API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // The second parameter updates the first variable when it is called elsewhere. At this point, 'listOfRestaurant' is blank i.e., a blank array
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardOpen = withOpenLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
    const timer = setInterval(() => {
      console.log("Rendering");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("useEffect withdrawn");
    };
  }, []);
  // fetchData() is the effect/side-effect that runs by default here.

  const fetchData = async () => {
    try {
      const data = await fetch(Homepage_API);
      const json = await data.json();
  
      console.log("Full JSON Response:", json); // Log the entire JSON response
  
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
  
      if (restaurants) {
        setListOfRestaurants(restaurants);
        setFilteredRestaurant(restaurants);
      } else {
        console.error("Restaurants data is undefined or not available");
      }
    } catch (error) {
      console.error("Failed to fetch data: ", error);
    }
  };
  

  const onlineStatus = useStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false)
    return <h1>You are offline. Please check your internet connection</h1>;
  else
    return listOfRestaurants?.length === 0 ? ( // When the array is empty (Conditional Rendering)
      <Shimmer /> // '?:' combination is ternary operator
    ) : (
      <div className="body">
        <div className="filter ml-9 flex mr-8 gap-8">
          <div className="search m-1 p-1">
            <input
              type="text"
              placeholder="Search here"
              className="border border-solid border-blue-950 ml-10 rounded-sm"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </div>

          <button
            className="searchBtn px-3 h-7 mt-2 mx-3 bg-green-300 rounded-xl"
            onClick={() => {
              const filtered_Restaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered_Restaurant);
            }}
          >
            Search
          </button>

          <button
            className="filter-btn px-5 h-7 mt-2 bg-blue-200 rounded-xl"
            onClick={() => {
              const filteredlist = listOfRestaurants.filter(
                (res) => res?.info.avgRating > 4.3
              );
              setFilteredRestaurant(filteredlist);
            }}
          >   
            Top Rated
          </button>

          <div className="mt-3 ml-20">
            <label className="bg-slate-300 font-semibold rounded-md p-1 ml-0">
              Customer's Name:
            </label>
            <input
              className="border border-black mx-4"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="ml-12 mt-2 shadow-md res-container flex flex-wrap">
          {filteredRestaurant.map(
            (
              restaurant // Data is being loaded onto 'restaurant'
            ) => (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {
                  2 === 2 ? (
                    <RestaurantCardOpen resData={restaurant} /> // Passing Props to RestaurantCardOpen
                  ) : (
                    <RestaurantCard resData={restaurant} />
                  ) // Passing Props to RestaurantCard
                }
              </Link>
            )
          )}
        </div>
      </div>
    );
};
export default Body;
