

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const AllProductsCard = ({ product }) => {
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
        <div className='bg-gray-800 text-white'>
            <img src="https://m.media-amazon.com/images/I/31aHF5GQ-sL._SR290,290_.jpg" alt="" />
            {/* <div className='flex items-center gap-3 font-primary mb-4'>
                <img className='w-8 h-8 rounded-full' src="https://static.bhphotovideo.com/explora/sites/default/files/red_komodo-lifestyle_feat_a_feat.jpg" alt="" />
                <h3 className='font-medium'>
                    {provider_name}
                </h3>
            </div> */}
            <h3 className='text-lg font-semibold mb-6 pl-2'>
                {product_name}
            </h3>
            <NavLink className="pl-2">Details</NavLink>
        </div>
    );
};

AllProductsCard.propTypes = {
    product: PropTypes.string
};
export default AllProductsCard;