import { Helmet } from "react-helmet";
import HomeChildPageTemp from "../HomeComponents/HomeChildPageTamp";

const Electrics = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Electrics</title>
            </Helmet>
            <HomeChildPageTemp category="Electrics"></HomeChildPageTemp>
        </div>
    );
};

export default Electrics;