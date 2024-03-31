import { useState, useContext } from "react";
import Title from "./Title"
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = (prop) => {

    const user = useContext(UserContext);
    console.log(user);
    return ( 
        <div className="header flex flex-col md:flex-row">
            <div className="navbar flex  flex-col md:flex-row justify-between m-2 border border-slate-900 w-full bg-slate-100">
                <Title/>
                <ul className="flex flex-col md:flex-row py-8 px-10">
                        <li className="px-2 sm:py-2 md:mb-0"><Link to="/">Home</Link></li>
                        <li className="px-2 sm:py-2 md:mb-0"><Link to="/instamart">InstaMart</Link></li>
                        <li className="px-2 sm:py-2 md:mb-0"><Link to="/about">About</Link></li>
                        <li className="px-2 sm:py-2 md:mb-0"><Link to={"/contact"}>Contact</Link></li>
                        <li className="px-4 sm:py-2 md:mb-0">Cart</li>
                        {
                prop.isAuthenticated 
                ? <li><div className="flex flex-col"><p className="text-red-800">{user.name}</p><button onClick={prop.logout} className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 cursor-pointer transition-colors duration-300"> Logout</button></div></li> 
                : <li><button onClick={() => alert("undefined")}>Login</button></li>
            }
                </ul>
              
            </div>
        </div> 
       
    )
}

export default Header;