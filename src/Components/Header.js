import { useState } from "react";
import Title from "./Title"

const Header = () => {

    const [authenticated, setAuthenticated] = useState(false);
    return ( 
        <div className="header">
            <div className="navbar">
                <Title/>
                <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
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