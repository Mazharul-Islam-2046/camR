import { Helmet } from "react-helmet";
import HomeChildPageTemp from "../HomeComponents/HomeChildPageTamp";

const Grips = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Grips</title>
            </Helmet>
            <HomeChildPageTemp category="grips"></HomeChildPageTemp>
        </div>
    );
};

export default Grips;