import { Helmet } from "react-helmet";
import AllProductsDisplayPageTepm from "../AllProductsComponents/AllProductsDisplayPageTepm";


const CameraProduct = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Camera Product</title>
            </Helmet>
            <AllProductsDisplayPageTepm category={"camera"}></AllProductsDisplayPageTepm>
        </div>
    );
};

export default CameraProduct;