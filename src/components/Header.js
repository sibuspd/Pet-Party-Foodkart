import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
    let [btnNameReact,setbtnNameReact] = useState("Login");
    return (
        <div className="Header">
            <div className="Logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Cuisines</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <li>Contact</li>
                    <li><button className="login" onClick={()=>{btnNameReact==="Login"?
                        setbtnNameReact("Logout"):setbtnNameReact("Login");}}>{btnNameReact}</button></li>   
                </ul>
            </div>
        </div>
    ) 
}
export default Header;