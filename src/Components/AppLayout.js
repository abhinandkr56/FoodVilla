import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header"
import { useState } from "react";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import store from "../utils/store";


const AppLayout = (prop) => {

    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <Provider store={store}>
                <UserContext.Provider value={prop.user}>
                    <div className={!isDark ? "bg-slate-100" : "bg-black"}>
                        <Header isAuthenticated={prop.isAuthenticated} logout={prop.logout} darkTheme = {(e) => {
                            console.log(e);
                            setIsDark(e)}}/>
                        <Outlet/>
                        <Footer/>
                    </div>
                </UserContext.Provider>
            </Provider>
            
            
        </>
    )
}


export default AppLayout;