import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router"; //imported the useParams to dynamically get the resId from given /restaurant/:resId route
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams(); //destructured the resId from useParams

  const resInfo = useRestaurantMenu(resId);

  if(resInfo === null) return <Shimmer />;
  const {name,cuisines, costForTwoMessage, avgRating} = resInfo?.cards[0]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return(
  <div className="Resmenu text-center">
  <h1 id="ResName" className="font-bold my-6 text-2xl">{name}</h1>
  <h2 id="ResCost" className="font-semibold">{costForTwoMessage}</h2>
  <p className="font-bold text-lg">{cuisines.join(" | ")}</p>
  <h4 className="font-black">{avgRating} Stars</h4>
  <h3 id="Menu" className="font-extrabold py-1 bg-yellow-500 ">Menu:</h3>
  {categories.map((category) =>(
  <RestaurantCategory data={category?.card?.card}/>))}
  {/* <ul id="itemList">{itemCards.map((item) => 
  <li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price/100}</li>)}
  </ul> */}
  </div>);
};
export default RestaurantMenu;
