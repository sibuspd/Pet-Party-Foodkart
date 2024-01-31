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
    // console.log(json);
    setResInfo(
      json?.data?.cards[2]?.card?.card?.info ||
        json?.data?.cards[0]?.card?.card?.info
    );
    console.log(resInfo);
  };

  useEffect(() => {
    fetchMenu();
  }, []);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>Restaurant Name: {resInfo.name}</h1>
      <h1>Restaurant Id: {resId}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biriyani</li>
        <li>Chowmein</li>
        <li>Pizza</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
