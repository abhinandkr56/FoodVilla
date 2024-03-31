import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header"
import { useState } from "react";
import UserContext from "../utils/UserContext";


const AppLayout = (prop) => {


    return (
        <>
            <UserContext.Provider value={prop.user}>
                <div className="bg-slate-100">
                    <Header isAuthenticated={prop.isAuthenticated} logout={prop.logout}/>
                    <Outlet/>
                    <Footer/>
                </div>
            </UserContext.Provider>
            
        </>
    )
}


export default AppLayout;