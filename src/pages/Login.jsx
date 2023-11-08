import { Helmet } from "react-helmet";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2'

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate()
  
    
  
    const {signIn, googleSignIn, setPhoto} = useContext(AuthContext)
  
    const handleGooglesignIng = () => {
      googleSignIn()
      .then(result => {
        setPhoto(result.user.photoURL);
        console.log(result.user);
        const userData = {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
          uid: result.user.uid,
          bookedProducts:[]

        }
        
        fetch(
          "http://localhost:5000/users",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        )
        result && Swal.fire('Successfully Loged In')
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        error && Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.code,
        })
      })
    }
  
  
  
    const handleLogin = e => {
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
  
  
      if (password.length < 6) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Write password more then 6 charecters",
        });
        return;
      } else if (!/[A-Z]/.test(password)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Write at least a Capital letter"
        });
        return;
      } else if (!/[a-z]/.test(password)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Write atleast 1 smaller letter",
        });
        return;
      }
  
  
  
  
      signIn(email, password)
      .then (result => {
        setPhoto(result.user.photoURL);
        Swal.fire('Successfully Loged In')
        result && navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error?.code,
        })
        console.log(error?.code);
      })
    }
  
  
  












    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Login</title>
            </Helmet>
            <div className={`bg-[url("https://png.pngtree.com/background/20210716/original/pngtree-white-abstract-vector-web-background-design-picture-image_1354906.jpg")] h-screen flex justify-center items-center`}>


                <div>
                    <h3 className="text-center text-4xl font-bold font-secondary mb-6">Login</h3>

                    {/* Form Container */}
                    <div className="bg-white border-2 py-8 px-6">


                        {/* Form */}
                        <form onSubmit={handleLogin} className="flex flex-col">

                            {/* Email */}
                            <input className="border-b focus:outline-none mb-5 pt-2 pb-1 px-1 text-xl font-primary" type="email" name="email" placeholder="Email" id="" />


                            {/* Password */}
                            <input className="border-b mb-5 py-2 focus:border-b focus:outline-none px-1 text-xl font-primary" type="password" placeholder="Password" name="password" id="" />

                            {/* Don't have an account? */}
                            <div className="mt-5">
                                <p className="text-sm text-center">
                                    Do not have an account? <Link to="/register" className="hover:border-b-2 hover:border-black font-medium">Register</Link>
                                </p>
                            </div>

                            {/* Google SignIn */}
                            <button type="button" onClick={handleGooglesignIng} className="flex items-center justify-center mt-6 mb-1 bg-blue-500 hover:bg-gray-700 text-white py-2">
                                <FcGoogle></FcGoogle> SignIn with Google
                            </button>


                            {/* Submit */}
                            <input className="text-white font-primary font-semibold text-xl bg-gray-600 py-1 mt-3 hover:bg-gray-400 cursor-pointer" type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;