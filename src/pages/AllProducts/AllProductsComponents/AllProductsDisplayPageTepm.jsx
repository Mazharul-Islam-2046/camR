import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import AllProductsCard from "./AllProductsCard";


const AllProductsDisplayPageTepm = ({ category }) => {


    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/products/${category}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })
    }, [])




    const handleSearch = () => {
        
    }






    return (
        <div className="overflow-y-auto py-3 space-y-10 px-7 h-[90vh]">

            {
               products.length <= 0 ?


                <h3 className="text-3xl font-secondary font-semibold text-white">No Product Found</h3>


                :


                <div>
                    {
                    products.map((product, idx) =>
                        <AllProductsCard key={idx} product={product}></AllProductsCard>
                    )
                }
                </div>
            }
        </div>
    );
};


AllProductsDisplayPageTepm.propTypes = {
    category: PropTypes.object
};

export default AllProductsDisplayPageTepm;