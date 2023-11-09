import { Helmet } from "react-helmet";
import AllProductsDisplayPageTepm from "../AllProductsComponents/AllProductsDisplayPageTepm";

const AllProductsGrips = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Grips</title>
            </Helmet>
            <AllProductsDisplayPageTepm category={"grips"}></AllProductsDisplayPageTepm>
        </div>
    );
};

export default AllProductsGrips;