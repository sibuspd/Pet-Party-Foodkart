import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    const handleClick = ()=> {
        setShowIndex();
    }
    return(
        <div className="font-sans w-6/12 m-auto my-3 bg-slate-100 shadow-lg p-5 ">
            <div className=" font-bold flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="">{data.title} ({data.itemCards.length})</span>
                <span>{" "}🔽{" "}</span>
            </div>
            {showItems && <ItemList items={data.itemCards}/>}
        </div>
    );
}
export default RestaurantCategory;


