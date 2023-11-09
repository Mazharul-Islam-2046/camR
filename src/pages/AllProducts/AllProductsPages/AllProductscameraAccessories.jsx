import { Helmet } from "react-helmet";
import AllProductsDisplayPageTepm from "../AllProductsComponents/AllProductsDisplayPageTepm";

const AllProductscameraAccessories = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Accessories</title>
            </Helmet>
            <AllProductsDisplayPageTepm category={"camera_accessories"}></AllProductsDisplayPageTepm>
        </div>
    );
};

export default AllProductscameraAccessories;