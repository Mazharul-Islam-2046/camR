import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="bg-[url('https://static.vecteezy.com/system/resources/previews/022/999/385/non_2x/404-error-page-design-web-site-problem-failure-website-access-denied-concept-unavailable-webpage-inaccessible-network-mistake-flat-graphic-illustration-isolated-on-white-background-vector.jpg')] h-screen bg-contain flex justify-center items-center">

            <Link className="text-white font-bold font-secondary text-2xl py-4 hover:rounded-none hover:bg-purple-600 rounded-md px-6 bg-gray-800" to="/">Go Home</Link>
            
        </div>
    );
};

export default Error;