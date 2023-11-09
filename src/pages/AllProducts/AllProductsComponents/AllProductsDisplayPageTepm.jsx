import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import AllProductsCard from "./AllProductsCard";
import { motion, useScroll, useSpring } from "framer-motion";

const AllProductsDisplayPageTepm = ({ category }) => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch(`https://cam-r-server.vercel.app/products/${category}`)
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
                setFilteredProducts(data);
            });
    }, [category]);

    const handleSearch = (e) => {
        const searchValue = e?.target?.value.toUpperCase();

        const filteredProducts = allProducts.filter((product) =>
            product.product_name.toUpperCase().includes(searchValue)
        );

        setFilteredProducts(filteredProducts);
    };






    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });








    return (
        <div>
            <motion.div className="progress-bar fixed top-0 right-0 left-0 h-3 bg-red-800  origin-left" style={{ scaleX }} />
            <div className="overflow-y-auto py-1 space-y-10 px-7 h-[100vh]">
            <input
                onChange={handleSearch}
                className="placeholder:font-primary outline-none bg-transparent border-b-2 border-white text-white px-2 py-2 w-full mb-16"
                placeholder="Search"
                name="search"
                type="text"
            />
            {filteredProducts?.length <= 0 ? (
                <h3 className="text-3xl font-secondary font-semibold text-white">No Product Found</h3>
            ) : (
                <div>
                    {filteredProducts.map((product, idx) => (
                        <AllProductsCard key={idx} product={product}></AllProductsCard>
                    ))}
                </div>
            )}
        </div>
        </div>
    );
};

AllProductsDisplayPageTepm.propTypes = {
    category: PropTypes.object,
};

export default AllProductsDisplayPageTepm;
