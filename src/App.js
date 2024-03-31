import React, { lazy, Suspense, useState } from "react";
import  ReactDOM from "react-dom/client";
import AppLayout from "./Components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import About from "./Components/About";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurentMenu from "./Components/RestaurentMenu";
import Login from "./Components/Login";
import Profile from "./Components/ProfileClass";
import useLocalStorage from "./utils/useLocalStorage";
import Shimmer from "./Components/Shimmer";
//import InstaMart from "./Components/InstaMart";


const InstaMart = lazy(() => import("./Components/InstaMart"));
const About = lazy(() => import("./Components/About"));
const App = () => {
    const [user, setUser] = useState({
        name : "Abhinandhu",
        email: "abhi@abhi.com"
    });
    const onLoginSubmit =(values) => {
        setUser({
            name : values.email,
            email: values.email
        })
        setAuthenticatedLocalStorage(true);
        }

        const logout = () => {
            setAuthenticatedLocalStorage(false);
        }
    const [authenticatedLocalStorage, setAuthenticatedLocalStorage] = useLocalStorage("IsAuthenticated", false);
  
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element: <AppLayout isAuthenticated ={authenticatedLocalStorage} logout = {logout} user = {user}/>,
            errorElement: <Error/>,
            children : [
                {
                    path : "/",
                    element: <Body/>
                },
                {
                    path : "/about",
                    element: <Suspense fallback= {<h1>Loading...</h1>}><About/></Suspense>,
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
                },
                {
                    path:"/instamart",
                    element : <Suspense fallback ={<Shimmer/>}><InstaMart/></Suspense>
                }
            ]
        }
        ]);

   return authenticatedLocalStorage ? <RouterProvider router={appRouter}/> : <Login onSubmit = {onLoginSubmit}/>;
    
}

const rootEleemnt = document.getElementById("root");
const root = ReactDOM.createRoot(rootEleemnt);
root.render(<App/>)