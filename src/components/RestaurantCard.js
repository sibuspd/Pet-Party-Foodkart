import { CDN_URL } from "../utils/constants";
import { LOGO_URL } from "../utils/constants";

// Bulding a Restro card component - Modular approach
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, costForTwo, cuisines, avgRating, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="res-card w-[220px] m-[4px] px-3 py-3 rounded-md bg-gray-300 hover:bg-orange-200">
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
      </div>
    </div>
  );
};
export default RestaurantCard;
