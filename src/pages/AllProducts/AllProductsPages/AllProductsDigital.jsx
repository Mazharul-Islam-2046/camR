import { Helmet } from "react-helmet";
import AllProductsDisplayPageTepm from "../AllProductsComponents/AllProductsDisplayPageTepm";


const AllProductsDigital = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Digital</title>
            </Helmet>
            <div>
                <AllProductsDisplayPageTepm category={"digital"}></AllProductsDisplayPageTepm>
            </div>
        </div>
    );
};

export default AllProductsDigital;