import { Helmet } from "react-helmet";
import HomeChildPageTemp from "../HomeComponents/HomeChildPageTamp";

const Production = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Production</title>
            </Helmet>
            <HomeChildPageTemp category="production"></HomeChildPageTemp>
        </div>
    );
};

export default Production;