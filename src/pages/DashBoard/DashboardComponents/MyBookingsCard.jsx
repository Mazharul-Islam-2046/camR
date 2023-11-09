
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const MyBookingsCard = ({ id, setids }) => {

    const [product, setProduct] = useState({})

    const {
        product_name,
        product_image,
        provider_name,
        provider_image,
        price_per_day,
        description,
        _id
    } = product



    useEffect(() => {
        fetch(`https://cam-r-server.vercel.app/products/ids/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
            })
    }, [id])



    const { user } = useContext(AuthContext)

    const [oldBookedIds, setOldIds] = useState([])

    useEffect(() => {
        const uid = user?.uid
        console.log(uid);
        fetch(`https://cam-r-server.vercel.app/users/${uid}`)
            .then((res) => res.json())
            .then((data) => {
                data.bookedProducts ? setOldIds(data.bookedProducts) : setOldIds([])
            })
    }, [user])



    const handleCancel = () => {
        const bookedIDs = oldBookedIds.filter(id => id !== _id)
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
                data && Swal.fire('Successfully Canceled')
                setids(bookedIDs)
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
            <div className="flex text-white font-primary gap-6" >
                <img className=" w-48 h-36 object-cover" src={product_image} alt="" />
                <div>
                    <h3 className="text-lg font-semibold">{product_name}</h3>
                    <p className="text-sm mb-4">{description}...</p>
                    <div className="flex gap-3 mb-3 items-center">
                        <img className="w-7 h-7 rounded-full object-cover" src={provider_image} alt="" />
                        <p className="text-xs">{provider_name}</p>
                    </div>
                    <p>Location: {product?.location}</p>
                    <div className="flex justify-between pr-12 items-center">
                        <p>${price_per_day}/Day</p>
                        <div className='flex gap-3'>
                            <Link to={`/allproducts/details/${_id}`} className="py-1 border-2 border-white px-2">Details</Link>
                            <button onClick={handleCancel} className="py-1 border-2 border-white px-2">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
MyBookingsCard.propTypes = {
    id: PropTypes.string,
    setids: PropTypes.func
};
export default MyBookingsCard;