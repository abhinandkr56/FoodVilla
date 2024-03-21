import React from "react";
import  ReactDOM from "react-dom/client";
import AppLayout from "./Components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurentMenu from "./Components/RestaurentMenu";





const appRouter = createBrowserRouter([
    {
        path : "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children : [
            {
                path : "/",
                element: <Body/>
            },
            {
                path : "/about",
                element: <About/>
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

const rootEleemnt = document.getElementById("root");
const root = ReactDOM.createRoot(rootEleemnt);
root.render(<RouterProvider router={appRouter}/>);