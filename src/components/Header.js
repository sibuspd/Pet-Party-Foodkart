import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
    const [btnNameReact,setbtnNameReact] = useState("Login");
    const onlineStatus = useStatus();
    const {loggedInUser} = useContext(UserContext); 
    return (
        <div className="flex justify-between shadow-lg mt-1 mb-3 px-5 bg-slate-200 
        sm:bg-pink-400 lg:bg-green-300">
            <div className="Logo-container w-15 mt-2 hover:bg-green-600 rounded-lg"><Link to="/">
                <img className="w-20 rounded-full border border-solid border-l-amber-950" src={LOGO_URL}/></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-8 m-1">
                    <li className="px-4">{onlineStatus?"🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/cuisines">Cuisines</Link></li>   
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4">Cart</li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className=" hover:bg-white px-4 pb-1 bg-sky-100 rounded-3xl shadow-orange-800 font-semibold"><button className="login" onClick={()=>{btnNameReact==="Login"?
                        setbtnNameReact("Logout"):setbtnNameReact("Login");}}>{btnNameReact}</button></li>
                    <li className="px-4 font-bold">{loggedInUser}</li>   
                </ul>
            </div>
        </div>
    ) 
}
export default Header;