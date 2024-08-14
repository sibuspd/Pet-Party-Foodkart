import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router"; //imported the useParams to dynamically get the resId from given /restaurant/:resId route
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams(); //destructured the resId from useParams

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

  const [showIndex, setShowIndex] = useState(0);

  if(resInfo === null) return <Shimmer />;
  const {name,cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;
  // const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return(
  <div className="Resmenu text-center">
  <h1 id="ResName" className="font-bold my-6 text-2xl bg-yellow-100 py-1 shadow-lg">{name}</h1>
  <h2 id="ResCost" className="font-semibold">{costForTwoMessage}</h2>
  <p className="font-bold text-lg">{cuisines.join(" | ")}</p>
  <h4 className="font-black">{avgRating} Stars</h4>
  <h3 id="Menu" className="font-extrabold py-1 bg-yellow-500 ">Menu:</h3>
  {categories?.map((category, index) =>(
  <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}
                      showItems={index ===showIndex?true:false}
                      setShowIndex = {()=>setShowIndex(index)}/>))}
  </div>);
}; 
export default RestaurantMenu;
