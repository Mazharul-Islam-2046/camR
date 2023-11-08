
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DashboardProductCard = ({ product }) => {



    const {
        product_name,
        product_image,
        provider_name,
        provider_image,
        price_per_day,
        description,
        _id
    } = product


    // console.log(_id);

    const handleWithDraw = () => {
        fetch(`https://cam-r-server.vercel.app/products/id/${_id}`, {
            method: "DELETE",
        })



    }





    return (
        <div>
            <div className="flex text-white font-primary gap-6" >
                <img className=" w-48 h-36 object-cover" src={product_image} alt="" />
                <div>
                    <h3 className="text-lg font-semibold">{product_name}</h3>
                    <p className="text-sm mb-4">{description.slice(0, 120)}...</p>
                    <div className="flex gap-3 mb-3 items-center">
                        <img className="w-7 h-7 rounded-full object-cover" src={provider_image} alt="" />
                        <p className="text-xs">{provider_name}</p>
                    </div>
                    <p>Location: {product?.location}</p>
                    <div className="flex justify-between pr-12 items-center">
                        <p>${price_per_day}/Day</p>
                        <div className='flex gap-1'>
                            <button onClick={handleWithDraw} className="py-1 border-2 border-white px-2">WithDraw</button>
                            <Link to={`edit/${_id}`} className="py-1 border-2 border-white px-2">Edit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


DashboardProductCard.propTypes = {
    product: PropTypes.object
};

export default DashboardProductCard;