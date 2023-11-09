import { Helmet } from "react-helmet";
import HomeChildPageTemp from "../HomeComponents/HomeChildPageTamp";


const Audio = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Audio</title>
            </Helmet>
            <HomeChildPageTemp category={"audio"}></HomeChildPageTemp>
        </div>
    );
};

export default Audio;