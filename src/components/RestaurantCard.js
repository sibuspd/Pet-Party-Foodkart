import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

// Bulding a Restro card component - Modular approach
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, costForTwo, cuisines, avgRating, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;
  const {loggedInUser} = useContext(UserContext);
  return (
    <div className="res-card w-[260px] m-[4px] px-3 py-3 rounded-md bg-gray-300 hover:bg-orange-200">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div className="CardDetails">
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{costForTwo}</h4>
        <h4 className="font-semibold">{cuisines.join(" | ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{deliveryTime} Minutes</h4>
        <h4 className="font-extralight">User: {loggedInUser}</h4>
      </div>
    </div>
  );
};

// Higher Order Compponent to show "Is Open" label
export const withOpenLabel = (RestaurantCard) => {
  return (props) => {                              // This is an anonymous function component that is returned.  
    return (
      <div>
        <label className="absolute bg-black text-white m-1 p-1 rounded-md">Is Open</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
