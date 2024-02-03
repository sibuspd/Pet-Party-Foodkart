import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router"; //imported the useParams to dynamically get the resId from given /restaurant/:resId route

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams(); //destructured the resId from useParams

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
    // console.log(resInfo);
  };

  useEffect(() => {fetchMenu();}, []); // to render the body only once at the start through blank array.

  if(resInfo === null) return <Shimmer />;
  const {name,cuisines, costForTwoMessage, avgRating} = resInfo?.cards[0]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return(
  <div className="Resmenu">
  <h1 id="ResName">{name}</h1>
  <h2 id="ResCost">{costForTwoMessage}</h2>
  <p>{cuisines.join(" | ")}</p>
  <h4>{avgRating} Stars</h4>
  <h3 id="Menu">Menu:</h3>
  <ul id="itemList">{itemCards.map((item) => 
  <li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price/100}</li>)}
  </ul>
  </div>);
};
export default RestaurantMenu;
