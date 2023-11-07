

import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
        <Card className='flex flex-col' sx={{ maxWidth: 345, height: 550, }}>
            <CardMedia
                component="img"
                alt={product_name}
                height="140"
                image="https://m.media-amazon.com/images/I/31aHF5GQ-sL._SR290,290_.jpg"
            />
            <CardContent className='grow'>
                <Typography gutterBottom variant="h5" component="div">
                    <b>{product_name}</b>
                </Typography>
                <Typography className='' variant="body2" color="text.secondary">
                    {description.slice(0, 100)}...
                </Typography>
            </CardContent>
            <CardActions>
                <Button className='' size="small"><Link>Detail</Link></Button>
            </CardActions>
        </Card>
    );
};

AllProductsCard.propTypes = {
    product: PropTypes.object
};
export default AllProductsCard;