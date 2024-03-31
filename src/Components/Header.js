import { useState } from "react";
import Title from "./Title"
import { Link } from "react-router-dom";

const Header = (prop) => {
    return ( 
        <div className="header flex flex-col md:flex-row">
            <div className="navbar flex  flex-col md:flex-row justify-between m-2 border border-slate-900 w-full bg-slate-100">
                <Title/>
                <ul className="flex flex-col md:flex-row py-10 px-10">
                        <li className="px-2 sm:py-2 md:mb-0"><Link to="/">Home</Link></li>
                        <li className="px-2 sm:py-2 md:mb-0"><Link to="/instamart">InstaMart</Link></li>
                        <li className="px-2 sm:py-2 md:mb-0"><Link to="/about">About</Link></li>
                        <li className="px-2 sm:py-2 md:mb-0"><Link to={"/contact"}>Contact</Link></li>
                        <li className="px-4 sm:py-2 md:mb-0">Cart</li>
                        {
                prop.isAuthenticated ?  <li><button onClick={prop.logout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 cursor-pointer transition-colors duration-300"> Logout</button></li> : <li><button onClick={() => alert("undefined")}>Login</button></li>
            }
                </ul>
              
            </div>
        </div> 
       
    )
}

export default Header;