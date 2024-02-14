import {CDN_URL} from "../utils/constants";
const ItemList = ({items}) => {
    return(
        <div>{items.map((item) => 
            <div key={item.card.info.id} className="my-2 p-2 border-b-2 shadow-md border-gray-200 text-left flex justify-between">
                
                <div>
                    <div>
                        <span className="font-semibold">{item.card.info.name}</span>
                        <div className="font-bold my-1">{"  "}₹{
                        item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</div>
                        <p className="mt-2 text-xs">{item.card.info.description}</p>
                    </div>
                </div>
                <button className="m-auto p-1 mt-0 absolute ml-96 mr-9 shadow-green-300 bg-black text-white rounded-md shadow-lg">{" "}Add+</button>
                <img src={CDN_URL+item.card.info.imageId} className=" my-auto w-36 h-32 rounded-md"></img>
           </div>
        )}
        </div>
    );
};
export default ItemList;