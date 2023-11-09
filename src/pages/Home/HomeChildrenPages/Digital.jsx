
import { Helmet } from 'react-helmet';
import HomeChildPageTemp from '../HomeComponents/HomeChildPageTamp';

const Digital = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Digital</title>
            </Helmet>
            <HomeChildPageTemp category="digital"></HomeChildPageTemp>
        </div>
    );
};

export default Digital;