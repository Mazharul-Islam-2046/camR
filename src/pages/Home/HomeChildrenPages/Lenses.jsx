import { Helmet } from "react-helmet";
import HomeChildPageTemp from "../HomeComponents/HomeChildPageTamp";

const Lenses = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Lenses</title>
            </Helmet>
            <HomeChildPageTemp category="lenses"></HomeChildPageTemp>
        </div>
    );
};

export default Lenses;