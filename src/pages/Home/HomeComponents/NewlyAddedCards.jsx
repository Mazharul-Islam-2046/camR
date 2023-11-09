

import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NewlyAddedCards = ({ product }) => {
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
        <div className='flex flex-col h-96 shadow-xl'>
            <img className='h-48 w-full object-cover mb-4' src={product_image} alt={product_name} />
            <div className='grow pl-2 md:pl-4'>
                <h3 className='text-xl font-primary font-bold'>{product_name}</h3>
                <p>{description.slice(0, 80)}...</p>
            </div>
            <div className='pl-4 mb-3'>
                <Link to={`/allproducts/details/${_id}`} className='py-1 pr-2'>Details</Link>
            </div>
        </div>
    );
};

NewlyAddedCards.propTypes = {
    product: PropTypes.object
};
export default NewlyAddedCards;