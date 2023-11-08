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




    const handleSearch = (e) => {

        const searchValue = e?.target?.value.toUpperCase()
        // console.log(typeof(searchValue));
        // products.map(product => console.log(product.product_name.toUpperCase()))

        const filteredProducts = products.filter((product) => {
           return product.product_name.toUpperCase().includes(searchValue);}
        )

        console.log(filteredProducts, searchValue);

        setProducts(filteredProducts)
    }






    return (
        <div className="overflow-y-auto py-1 space-y-10 px-7 h-[100vh]">






            <input onChange={handleSearch} className="placeholder:font-primary outline-none bg-transparent border-b-2 border-white text-white px-2 py-2 w-full mb-16" placeholder="Search" name="search" type="text" />
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