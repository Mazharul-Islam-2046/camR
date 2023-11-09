import { Helmet } from "react-helmet";
import AllProductsDisplayPageTepm from "../AllProductsComponents/AllProductsDisplayPageTepm";

const AllProductsProduction = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Production</title>
            </Helmet>
            <AllProductsDisplayPageTepm category={"production"}></AllProductsDisplayPageTepm>
        </div>
    );
};

export default AllProductsProduction;