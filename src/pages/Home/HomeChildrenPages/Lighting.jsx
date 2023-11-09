import { Helmet } from "react-helmet";
import HomeChildPageTemp from "../HomeComponents/HomeChildPageTamp";


const Lighting = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Lighting</title>
            </Helmet>
            <HomeChildPageTemp category={"lighting"}></HomeChildPageTemp>
        </div>
    );
};

export default Lighting;