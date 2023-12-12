import { Helmet } from "react-helmet";
import { Outlet, useLocation } from "react-router-dom";
import Hearder from "./HomeComponents/Hearder";
import MenuBar from "./HomeComponents/MenuBar/MenuBar";
import { useEffect, useState } from "react";
import ContactUs from "./HomeComponents/ContactUs";




const Home = () => {

    const [path, setPath] = useState("/")
    const location = useLocation()
    
    useEffect(() => {
        const currentPath = location.pathname
        setPath(currentPath)
    },[location])



    return (
        <div className="relative -top-20 mb-24">
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Home</title>
            </Helmet>
            <Hearder />
            {
                path !== "/add" && <MenuBar />
            }
            <Outlet />
            <ContactUs/>
        </div>
    );
};

export default Home;