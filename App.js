import React from "react";
import ReactDOM from "react-dom/client";
/**
 * HEADER 
 * - Logo
 * - Nav Items
 * BODY  
 * - Search
 * - Resturant Container
 *      - Resturant Card
 *         - Img
 *         - Name of Res, Star Rating, Cuisines, Delivery Time
 * FOOTER
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */
const Header = () => {
    return (
        <div className="Header">
            <div className="Logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    ) 
}

// Bulding a Restro card component - Modular approach
const RestaurantCard = () => {
    return(
        <div className="res-card" style={{ backgroundColor: "salmon"}}>
            <img className="res-logo" 
            alt="res-logo" 
            src="https://th.bing.com/th/id/OIP.vqRxzfyKjGXq0nhjMNDUIAHaE6?rs=1&pid=ImgDetMain"></img>
            <h3>PP Specials</h3>
            <h4>Weight Gainers, Fruit Blast, Green Salad, Carb Load, Anti-Oxidant Casata</h4>
            <h4>4.3 Stars</h4>  
            <h4>43 Minutes</h4>  

        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search Box</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header /> <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));    
root.render(<AppLayout />);  
