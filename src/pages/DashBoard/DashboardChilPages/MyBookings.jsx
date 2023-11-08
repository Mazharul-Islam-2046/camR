import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useState } from "react";
import MyBookingsCard from "../DashboardComponents/MyBookingsCard";


const MyBookings = () => {

    const { user } = useContext(AuthContext)

    const [productsId, setProductsId] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.uid}`)
            .then((res) => res.json())
            .then((data) => {
                setProductsId(data.bookedProducts)
            })
    }, [user.uid])




    return (
        <div className="overflow-y-auto py-1 space-y-10 px-7 h-[100vh]">


            {
                productsId.length <= 0 ?


                    <h3 className="text-3xl font-secondary font-semibold text-white">No Product Found</h3>


                    :



                    <div>
                        {
                            productsId.map((id, idx) =>
                                <MyBookingsCard key={idx} product={id}></MyBookingsCard>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default MyBookings;