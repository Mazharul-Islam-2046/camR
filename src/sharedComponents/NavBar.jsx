import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            {/* NavContainer */}
            <div>
                {/* Logo and Menu Container */}
                <div className="flex">
                    <div>
                        <img src="../assets/logo.png" alt="" />
                    </div>
                    {/* Menus */}
                    <div>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default NavBar;