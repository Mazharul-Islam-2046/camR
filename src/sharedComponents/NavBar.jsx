import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {

  const [path, setPath] = useState("/")
    const location = useLocation()
    
    useEffect(() => {
        const currentPath = location.pathname
        setPath(currentPath)
    },[location])





    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Add an event listener to detect when the user scrolls
    const handleScroll = () => {

      // get windows width
      const windowWidth = window.innerWidth;
      const height = windowWidth * (38/100)

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
                  <button className={`py-1 px-6 border-2 font-primary border-white`}>
                    {
                      path === "/login" ? <NavLink to="/register">Register</NavLink> : <NavLink to="/login">Login</NavLink>
                    }
                  </button>
                </div>
            </div>            
        </div>
    );
};

export default NavBar;