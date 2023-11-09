import { Helmet } from "react-helmet";
import HomeChildPageTemp from "../HomeComponents/HomeChildPageTamp";

const CameraAccessories = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Camera Accessories</title>
            </Helmet>
            <div>
                <HomeChildPageTemp category={"camera_accessories"}></HomeChildPageTemp>
            </div>
        </div>
    );
};

export default CameraAccessories;