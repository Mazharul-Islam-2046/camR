import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


const PopularProductCard = ({product}) => {
    const {
        category,
        product_name,
        product_image,
        provider_name,
        provider_image,
        price_per_day,
        description
    } = product
    return (
        <div className="space-y-3 font-primary">
            <img src="https://static.bhphotovideo.com/explora/sites/default/files/red_komodo-lifestyle_feat_a_feat.jpg" alt="" />
            <div className="pl-3 flex flex-col">
                <div className="flex gap-3 items-center mb-2">
                    <img className="w-10 h-10 rounded-full object-cover" src="https://static.bhphotovideo.com/explora/sites/default/files/red_komodo-lifestyle_feat_a_feat.jpg" alt="" />
                    <p className="text-xl font-medium">{provider_name}</p>
                </div>
                <h3 className="text-2xl font-bold mb-1">{product_name}</h3>
                <p className="text-lg mb-5">{description}</p>
                <div className="flex justify-between">
                <p className="py-1 px-3 bg-black text-white">Price: {price_per_day}$ / day</p>
                <button className="px-3 py-1 border-b-2 hover:border-black">
                    <NavLink>Details</NavLink>
                </button>
                </div>
            </div>
        </div>
    );
};

PopularProductCard.propTypes = {
    product: PropTypes.string
  };

export default PopularProductCard;