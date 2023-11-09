import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AllProductsCard = ({ product }) => {



    const {
        product_name,
        product_image,
        provider_name,
        provider_image,
        price_per_day,
        description,
        _id
    } = product



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
                    <Link to={`/allproducts/details/${_id}`} className="py-1 border-2 border-white px-2">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllProductsCard.propTypes = {
    product: PropTypes.object
};

export default AllProductsCard;