import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";


const DetailPage = () => {

    const product = useLoaderData()

    const {
        product_name,
        product_image,
        provider_name,
        provider_image,
        price_per_day,
        description,
        _id
    } = product


    const { user } = useContext(AuthContext)


    const [newBookedIds, setBookedIds] = useState([])

    useEffect(() => {
        const uid = user?.uid
        console.log(uid);
        fetch(`https://cam-r-server.vercel.app/users/${uid}`)
            .then((res) => res.json())
            .then((data) => {
                data.bookedProducts ? setBookedIds(data.bookedProducts) : setBookedIds([])
            })
    }, [user])
    console.log(newBookedIds);


    const handleBooking = () => {
        
        
        const bookedIDs = [...newBookedIds, _id]
        const newInfo = {

            email: user?.email,
            bookedIDs
        }



        fetch(
            "https://cam-r-server.vercel.app/users/bookings",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newInfo),
            }
        ).then((res) => res.json())
            .then((data) => {
                data && Swal.fire('Successfully Booked')
            })


            .catch(error => {
                error && Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.code,
                })
            })
    }





    return (
        <div>
            <div className="flex flex-col text-white font-primary gap-6" >
                <img className=" w-full h-1/2 object-cover" src={product_image} alt="" />
                <div className="pt-4 px-4 pb-8">
                    <h3 className="text-xl font-semibold">{product_name}</h3>
                    <div className="flex gap-3 mb-3 items-center">
                        <img className="w-7 h-7 rounded-full object-cover" src={provider_image} alt="" />
                        <p className="text-xs">{provider_name}</p>
                    </div>
                    <p className="text-sm mb-4">{description}</p>
                    <p>Location: {product?.location}</p>
                    <div className="flex justify-between pr-12 items-center">
                        <p>${price_per_day}/Day</p>
                        <button onClick={handleBooking} className="py-1 border-2 hover:bg-white hover:text-black border-white px-2">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;