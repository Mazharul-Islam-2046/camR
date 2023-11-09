import { Helmet } from "react-helmet";
import AllProductsDisplayPageTepm from "../AllProductsComponents/AllProductsDisplayPageTepm";

const AllProductsAudio = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Audio</title>
            </Helmet>
            <AllProductsDisplayPageTepm category={"audio"}></AllProductsDisplayPageTepm>
        </div>
    );
};

export default AllProductsAudio;