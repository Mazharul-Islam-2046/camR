import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Regestration</title>
            </Helmet>
            <div className={`bg-[url("https://png.pngtree.com/background/20210716/original/pngtree-white-abstract-vector-web-background-design-picture-image_1354906.jpg")] h-screen flex justify-center items-center`}>


                <div>
                    <h3 className="text-center text-4xl font-bold font-secondary mb-6">Register</h3>
                    <div className="bg-white border-2 py-8 px-6">
                        <form className="flex flex-col">

                            <input className="border-b focus:outline-none mb-5 pt-2 pb-1 px-1 text-xl font-primary" type="name" name="name" placeholder="Name" id="" />
                            <input className="border-b focus:outline-none mb-5 pt-2 pb-1 px-1 text-xl font-primary" type="email" name="email" placeholder="Email" id="" />
                            <input className="border-b mb-5 py-2 focus:border-b focus:outline-none px-1 text-xl font-primary" type="password" placeholder="Password" name="password" id="" />
                            <input className="border-b mb-5 py-2 focus:border-b focus:outline-none px-1 text-xl font-primary" type="url" placeholder="Photo Url" name="photoUrl" id="" />
                            <div className="mt-5">
                                <p className="text-sm text-center">
                                    Already have an account? <Link to="/login" className="hover:border-b-2 hover:border-black font-medium">Login</Link>
                                </p>
                            </div>
                            <input className="text-white font-primary font-semibold text-xl bg-gray-600 py-2 mt-3 hover:bg-gray-400 cursor-pointer" type="submit" value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;