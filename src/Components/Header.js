import { useState } from "react";
import Title from "./Title"
import { Link } from "react-router-dom";

const Header = (prop) => {
    return ( 
        <div className="header">
            <div className="navbar">
                <Title/>
                <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/instamart">InstaMart</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                        <li>Cart</li>
                        {
                prop.isAuthenticated ?  <li><button onClick={prop.logout}>Logout</button></li> : <li><button onClick={() => alert("undefined")}>Login</button></li>
            }
                </ul>
              
            </div>
        </div>
       
    )
}

export default Header;