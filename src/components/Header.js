import { LOGO_URL } from "../utils/constants";
const Header = () => {
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
                </ul>
            </div>
        </div>
    ) 
}
export default Header;