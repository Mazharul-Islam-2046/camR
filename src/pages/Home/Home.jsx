import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1>This is Home</h1>
            <Outlet/>
        </div>
    );
};

export default Home;