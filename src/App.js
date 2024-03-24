import React, { useState } from "react";
import  ReactDOM from "react-dom/client";
import AppLayout from "./Components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurentMenu from "./Components/RestaurentMenu";
import Login from "./Components/Login";
import Profile from "./Components/ProfileClass";


const App = () => {
   
    
    const onLoginSubmit =(values) => {
        setAuthenticated(true);
        }

        const logout = () => {
            setAuthenticated(false);
        }
    const [authenticated, setAuthenticated] = useState(false);
  
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element: <AppLayout isAuthenticated ={authenticated} logout = {logout}/>,
            errorElement: <Error/>,
            children : [
                {
                    path : "/",
                    element: <Body/>
                },
                {
                    path : "/about",
                    element: <About/>,
                    children : [{
                        path : "profile",
                        element : <Profile name="Abhi"/>
                    }]
                },
                {
                    path : "/contact",
                    element: <Contact/>
                },
                {
                    path: "restaurent/:id",
                    element: <RestaurentMenu/>
                }
            ]
        }
        ]);

   return authenticated ? <RouterProvider router={appRouter}/> : <Login onSubmit = {onLoginSubmit}/>;
    
}

const rootEleemnt = document.getElementById("root");
const root = ReactDOM.createRoot(rootEleemnt);
root.render(<App/>)