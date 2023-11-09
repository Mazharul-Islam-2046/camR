import { Helmet } from "react-helmet";
import AllProductsDisplayPageTepm from "../AllProductsComponents/AllProductsDisplayPageTepm";

const AllProductsElectrics = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Electrics</title>
            </Helmet>
            <AllProductsDisplayPageTepm category={"Electrics"}></AllProductsDisplayPageTepm>
        </div>
    );
};

export default AllProductsElectrics;