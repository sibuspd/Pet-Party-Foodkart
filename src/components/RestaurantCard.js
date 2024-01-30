import { CDN_URL } from "../utils/constants";
import { LOGO_URL } from "../utils/constants";

// Bulding a Restro card component - Modular approach
const RestaurantCard = (props) => {
    const {resData} = props; 
    const {name,costForTwo,cuisines,avgRating,cloudinaryImageId} = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return(
        <div className="res-card" style={{ backgroundColor: "lightgray"}}>
            <img className="res-logo" 
            alt="res-logo" 
            src={CDN_URL+cloudinaryImageId}></img>
            <div className="CardDetails">
                <h3>{name}</h3>
                <h4>{costForTwo}</h4>
                <h4>{cuisines.join(" | ")}</h4>
                <h4>{avgRating} Stars</h4>
                <h4>{deliveryTime} Minutes</h4>
            </div>
        </div>
    )
}
export default RestaurantCard;