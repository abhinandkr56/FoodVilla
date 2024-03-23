import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header"


const AppLayout = (prop) => {
    return (
        <>
            <Header isAuthenticated={prop.isAuthenticated} logout={prop.logout}/>
            <Outlet/>
            <Footer/>
        </>
    )
}


export default AppLayout;