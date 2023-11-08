import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, photo, loading, logOut, setPhoto } = useContext(AuthContext)
  const [path, setPath] = useState("/")
  const location = useLocation()






  useEffect(() => {
    const uid = user?.uid
    console.log(uid);
    fetch(`https://cam-r-server.vercel.app/users/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        setPhoto(data.photo)
      })
  }, [user])







  useEffect(() => {
    const currentPath = location.pathname
    setPath(currentPath)
  }, [location])



  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }




  const handleLogOut = () => {
    logOut();
    Swal.fire('Successfully Loged Out')
  };






  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Add an event listener to detect when the user scrolls
    const handleScroll = () => {

      // get windows width
      const windowWidth = window.innerWidth;
      const height = windowWidth * (38 / 100)

      // Get the current scroll position
      const scrollPosition = window.scrollY;
      // Check if the scroll position is greater than or equal to the header height
      if (scrollPosition >= height) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

    };


    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const conditionalClass = `${isScrolled || path !== "/" ? "bg-gray-900 text-white" : "bg-white bg-opacity-5 text-white"}`

  if (loading) {
    return <div className={`px-14 sticky top-0 z-10 ${conditionalClass}`}>
      {/* NavContainer */}
      <div className={`${isScrolled || path !== "/" ? "" : "border-b-2"} px-1 py-5 flex items-center
        `}>
        {/* Logo and Menu Container */}
        <div className="flex gap-8 grow">
          <div>
            <img className="w-32" src="https://i.ibb.co/qg46cGn/logo.png" alt="" />
          </div>
          {/* Menus */}
          <div className="flex items-center gap-5 font-primary">
            <NavLink className="" to="/">Home</NavLink>
            <NavLink className="" to="/services">Services</NavLink>
          </div>
        </div>

        {/* Longin or Profile or mobile menu */}
        <div>
        </div>
      </div>
    </div>
  }
  if (!loading) {
    return (
      <div className={`px-14 sticky top-0 z-10 ${conditionalClass}`}>
        {/* NavContainer */}
        <div className={`${isScrolled || path !== "/" ? "" : "border-b-2"} px-1 py-5 flex items-center
            `}>
          {/* Logo and Menu Container */}
          <div className="flex gap-8 grow">
            <div>
              <img className="w-32" src="https://i.ibb.co/qg46cGn/logo.png" alt="" />
            </div>
            {/* Menus */}
            <div className="flex items-center gap-5 font-primary">
              <NavLink className="" to="/">Home</NavLink>
              <NavLink className="" to="/services">Services</NavLink>
            </div>
          </div>

          {/* Longin or Profile or mobile menu */}
          <div>
            <button className={`${user ? "hidden" : ""} py-1 px-6 border-2 font-primary border-white`}>
              {
                path === "/login" ? <NavLink to="/register">Register</NavLink> : <NavLink to="/login">Login</NavLink>
              }
            </button>
            <div onClick={toggleDrawer} className={`${user ? "" : "hidden"} rounded-full overflow-hidden`}>
              <img className="w-8 h-8" src={photo || "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"} alt="" />
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
              >
                <div className="text-black flex flex-col py-6 px-3">
                  <Link to='/' className="border-b-2 py-3">Home</Link>
                  <Link to='/allproducts' className="border-b-2 py-3">All Products</Link>
                  <Link to='/dashboard' className="border-b-2 py-3">Dashboard</Link>
                  <Link to='/addproduct' className="border-b-2 py-3">Add Product</Link>
                  <button onClick={handleLogOut} className="border-b-2 py-3">LogOut</button>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default NavBar;