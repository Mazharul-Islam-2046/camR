import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Hearder from "./HomeComponents/Hearder";


const Home = () => {
    return (
        <div className="h-[90vw] relative -top-20">
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Home</title>
            </Helmet>
            <Hearder/>
            <Outlet/>
        </div>
    );
};

export default Home;