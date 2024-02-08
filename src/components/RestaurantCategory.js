const RestaurantCategory = ({data}) => {
    console.log(data);
    return(
        <div className="flex justify-between font-bold font-sans w-6/12 m-auto my-3 bg-slate-100 shadow-lg p-5 ">
            <span>{data.title} ({data.itemCards.length})</span>
            <span>{" "}🔽{" "}</span>
        </div>
    );
}
export default RestaurantCategory;