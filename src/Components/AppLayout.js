import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header"


const AppLayout = (prop) => {
    return (
        <>
            <div className="bg-slate-100">
            <Header isAuthenticated={prop.isAuthenticated} logout={prop.logout}/>
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}


export default AppLayout;