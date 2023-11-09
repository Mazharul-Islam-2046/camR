// import { useState } from "react";
// import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    

    return (
        <div className="flex gap-4 px-4 bg-gray-900 lg:px-16 lg:py-8">

        {/* Menu */}
        <div className="w-1/4 bg-gray-700 flex flex-col gap-2 py-6 px-4">
            <h3 className="text-2xl text-white font-bold mb-6 text-center">Browse By Categorise</h3>

            <NavLink className="text-white capitalize text-lg font-primary border-b-2 border-white mt-2 text-center py-2">My Bookings</NavLink>



            <NavLink to='/dashboard/myListedProducts' className="text-white capitalize text-lg font-primary border-b-2 border-white mt-2 text-center py-2">My Listed Products</NavLink>



            <NavLink to="/dashboard/addproducts" className="text-white capitalize text-lg font-primary border-b-2 border-white mt-2 text-center py-2">Add Products</NavLink>



            {/* <NavLink className="text-white capitalize text-lg font-primary border-b-2 border-white mt-2 text-center py-2">Update Product</NavLink> */}
            
        </div>



        {/* Display Section */}
        <div className="w-3/4 bg-black py-8 flex justify-center items-center">
            <Outlet/>
        </div>
    </div>
    );
};

export default Dashboard;