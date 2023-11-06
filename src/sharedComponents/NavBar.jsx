import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Add an event listener to detect when the user scrolls
    const handleScroll = () => {

      // Get the current scroll position
      const scrollPosition = window.scrollY;
      // Check if the scroll position is greater than or equal to the header height
      if (scrollPosition > 0) {
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


 const conditionalClass = `${isScrolled ? "bg-gray-900 text-white" : "bg-white bg-opacity-5 text-white"}`

    return (
        <div className={`px-14 sticky top-0 z-10 ${conditionalClass}`}>
            {/* NavContainer */}
            <div className={`${isScrolled ? "" : "border-b-2"} px-1 py-5 flex items-center
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
                    <NavLink>Login</NavLink>
                  </button>
                </div>
            </div>            
        </div>
    );
};

export default NavBar;