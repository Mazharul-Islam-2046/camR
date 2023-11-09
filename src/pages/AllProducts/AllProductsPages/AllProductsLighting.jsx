import { Helmet } from "react-helmet";
import AllProductsDisplayPageTepm from "../AllProductsComponents/AllProductsDisplayPageTepm";

const AllProductsLighting = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Lighting</title>
            </Helmet>
            <AllProductsDisplayPageTepm category={"lighting"}></AllProductsDisplayPageTepm>
        </div>
    );
};

export default AllProductsLighting;