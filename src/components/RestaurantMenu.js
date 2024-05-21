import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router"; //imported the useParams to dynamically get the resId from given /restaurant/:resId route
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams(); //destructured the resId from useParams
  const { restaurantInfo, restaurantOffers } = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (restaurantInfo === null) return <Shimmer />;
  const {
    name,
    cuisines,
    areaName,
    sla,
    feeDetails,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
  } = restaurantInfo;
  return (
    <div className="Resmenu text-center">
      <h1
        id="ResName"
        className="font-bold my-6 text-2xl bg-yellow-100 py-1 shadow-lg"
      >
        {name}
      </h1>
      <h2 id="ResCost" className="font-semibold">
        {costForTwoMessage}
      </h2>
      <p className="font-bold text-lg">{cuisines.join(" | ")}</p>
      <h4 className="font-black">{avgRatingString} Stars</h4>
      <h3 id="Menu" className="font-extrabold py-1 bg-yellow-500 ">
        Menu:
      </h3>
      //idk what are trying to do with categories but do console logs in
      useRestaurantMenu to get data
      {/* {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))} */}
    </div>
  );
};
export default RestaurantMenu;
