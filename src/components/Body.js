import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/demodata";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants]= useState(resList);
//  [    
//   {"info": {
//       id: "280903",
//       name: "Panthanivas Sambalpur",
//       cloudinaryImageId: "xhb88ukye6diqzl61gzi",
//       costForTwo: "₹150 for two",
//       cuisines: ["North Indian","Chinese"],
//       avgRating: 3.8,
//       sla: {deliveryTime: 31,},
//   }},
//   {"info": {
//     id: "280904",
//     name: "Dominos",
//     cloudinaryImageId: "xhb88ukye6diqzl61gzi",
//     costForTwo: "₹150 for two",
//     cuisines: ["Pitzahh","Burgers","Rolls"],
//     avgRating: 4.4,
//     sla: {deliveryTime: 45,},
//   }},
//   {"info": {
//   id: "280905",
//   name: "KFC",
//   cloudinaryImageId: "xhb88ukye6diqzl61gzi",
//   costForTwo: "₹150 for two",
//   cuisines: ["Chillaz","Chicken","Crispy Fried Combo"],
//   avgRating: 4.1,
//   sla: {deliveryTime: 37,},
//   }},
//   {"info": {
//     id: "280906",
//     name: "God's Own Kitchen",
//     cloudinaryImageId: "xhb88ukye6diqzl61gzi",
//     costForTwo: "₹250 for two",
//     cuisines: ["Veg Thali Keralite","Gobi Manchurian","Sambar"],
//     avgRating: 3.9,
//     sla: {deliveryTime: 54,},
//   }},
// ]
    return (
        <div className="body">
            <div className="filter">
              <button className="filter-btn"onClick={()=>{const filteredlist = listOfRestaurants.filter((res)=>res.info.avgRating>4.2);
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