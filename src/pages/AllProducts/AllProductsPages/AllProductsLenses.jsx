import { Helmet } from "react-helmet";
import AllProductsDisplayPageTepm from "../AllProductsComponents/AllProductsDisplayPageTepm";

const AllProductsLenses = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Lenses</title>
            </Helmet>
            <AllProductsDisplayPageTepm category={"lenses"}></AllProductsDisplayPageTepm>
        </div>
    );
};

export default AllProductsLenses;