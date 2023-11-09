
import { Helmet } from 'react-helmet';
import AllProductsDisplayPageTepm from '../AllProductsComponents/AllProductsDisplayPageTepm';

const AllProductsBase = () => {
    return (
        <div>
            <Helmet>
        <meta charSet="utf-8" />
        <title>CamR || All Products</title>
      </Helmet>
            <AllProductsDisplayPageTepm category={""}></AllProductsDisplayPageTepm>
        </div>
    );
};

export default AllProductsBase;