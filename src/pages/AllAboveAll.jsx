import { Outlet } from "react-router-dom";
import NavBar from "../sharedComponents/NavBar";
import Footer from "../sharedComponents/Footer";


const AllAboveAll = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default AllAboveAll;