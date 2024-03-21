import { useState } from "react";
import Title from "./Title"
import { Link } from "react-router-dom";

const Header = () => {

    const [authenticated, setAuthenticated] = useState(false);
    return ( 
        <div className="header">
            <div className="navbar">
                <Title/>
                <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                        <li>Cart</li>
                        {
                authenticated ?  <li><button onClick={() => setAuthenticated(false)}>Logout</button></li> : <li><button onClick={() => setAuthenticated(true)}>Login</button></li>
            }
                </ul>
              
            </div>
        </div>
       
    )
}

export default Header;