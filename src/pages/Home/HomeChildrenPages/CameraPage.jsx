import { Helmet } from "react-helmet";
import HomeChildPageTemp from "../HomeComponents/HomeChildPageTamp";


const CameraPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Camera</title>
            </Helmet>
            <HomeChildPageTemp category={"camera"}></HomeChildPageTemp>
        </div>
    );
};

export default CameraPage;