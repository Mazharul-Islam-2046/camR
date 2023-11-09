import { NavLink } from "react-router-dom";

import PropTypes from 'prop-types';


const AllProductsCards = ({product}) => {
    const {
        category,
        product_name,
        product_image,
        provider_name,
        provider_image,
        price_per_day,
        description,
        _id
    } = product
    return (
        <div className="space-y-3 font-primary">
            <img className="h-52 object-cover w-full" src={product_image} alt={product_name} />
            <div className="pl-3 flex flex-col">
                <div className="flex gap-3 items-center mb-2">
                    <img className="w-10 h-10 rounded-full object-cover" src={provider_image} alt="" />
                    <p className="text-xl font-medium">{provider_name}</p>
                </div>
                <h3 className="text-2xl font-bold mb-1">{product_name}</h3>
                <p className="text-lg mb-5">{description.slice(0, 100)}</p>
                <div className="flex justify-between">
                <p className="py-1 px-3 bg-black text-white">Price: {price_per_day}$ / day</p>
                <button className="px-3 py-1 border-b-2 hover:border-black">
                    <NavLink to={`/allproducts/details/${_id}`}>Details</NavLink>
                </button>
                </div>
            </div>
        </div>
    );
};

AllProductsCards.propTypes = {
    product: PropTypes.object
  };

export default AllProductsCards;