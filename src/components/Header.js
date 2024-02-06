import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
const Header = () => {
    const [btnNameReact,setbtnNameReact] = useState("Login");
    const onlineStatus = useStatus(); 
    return (
        <div className="flex justify-between shadow-lg mt-1 mb-3 px-5 bg-slate-200 
        sm:bg-pink-400 lg:bg-green-300">
            <div className="Logo-container w-15 mt-2">
                <img className="w-20 rounded-full border border-solid border-l-amber-950" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-8 m-1">
                    <li className="px-4">{onlineStatus?"🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/cuisines">Cuisines</Link></li>   
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4">Cart</li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><button className="login" onClick={()=>{btnNameReact==="Login"?
                        setbtnNameReact("Logout"):setbtnNameReact("Login");}}>{btnNameReact}</button></li>   
                </ul>
            </div>
        </div>
    ) 
}
export default Header;