import { AiFillDollarCircle } from "react-icons/ai";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BsFillShieldLockFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import NewlyAddedCards from "../HomeComponents/NewlyAddedCards";
import AllProductsCards from "../HomeComponents/AllProductsCards";
import PopularProductCard from "../HomeComponents/PopularProductCard";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PropTypes from 'prop-types';

const HomeChildPageTemp = ({ category }) => {



    // const { products } = useLoaderData()
    const [products, setProducts] = useState([])

    const [popularProduct, setPopularProduct] = useState([])
    const [newProducts, setNewProducts] = useState([])

    useEffect(() => {
        fetch(`https://cam-r-server.vercel.app/products/${category}/popular`)
            .then((res) => res.json())
            .then((data) => {
                setPopularProduct(data)
            })
    }, [])



    useEffect(() => {
        fetch(`https://cam-r-server.vercel.app/products/${category}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                const length = data.length
                if (length > 7) {

                    const newProductAmount = length - 4
                    setNewProducts(data.slice(newProductAmount, length))
                }
                else {
                    setNewProducts(data)
                }
            })
    }, [])



    return (
        <>

            {

                products.length ?
                    <div>
                        <div className="grid grid-cols-2 px-4 lg:px-16 mt-12 gap-5">
                            <div className="row-span-2 bg-black relative">
                                <img className="h-full object-cover opacity-60" src="https://i.shgcdn.com/e48d4bff-9e5d-4318-bff9-0a23a47c5830/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />

                                <div className="absolute flex flex-col justify-center items-center top-0 w-full h-full">
                                    <h2 className="text-white text-5xl font-bold">
                                        Recently Added
                                    </h2>
                                    <h2 className="text-white text-2xl font-semibold mt-8 mb-2">
                                        Red Komodo
                                    </h2>
                                    <p className="text-white text-sm text-center mb-8">
                                        Compact Cinema Camera Featuring RED’S <br /> Unparalleled Image Quality, Color Science, And <br /> Groundbreaking Global Shutter Sensor Technology
                                    </p>
                                    <button className="text-white py-1 px-4 border-2 border-white">
                                        <NavLink>Rent Now</NavLink>
                                    </button>
                                </div>
                            </div>


                            {/* 2nd Box */}
                            <div className="text-center py-11 border-2 border-black">
                                <h1 className="text-3xl font-medium font-primary"><span className="font-bold">Rent For Less</span>, Worry Free</h1>

                                <div className="flex justify-between w-2/4 mx-auto font-primary mt-6">
                                    <div className="text-center flex flex-col items-center gap-1">
                                        <AiFillDollarCircle className="text-3xl"></AiFillDollarCircle>
                                        <p className=" font-medium">Less Cost</p>
                                    </div>
                                    <div className="text-center flex flex-col items-center gap-1">
                                        <RiVerifiedBadgeFill className="text-3xl"></RiVerifiedBadgeFill>
                                        <p className=" font-medium">Verified</p>
                                    </div>
                                    <div className="text-center flex flex-col items-center gap-1">
                                        <BsFillShieldLockFill className="text-3xl"></BsFillShieldLockFill>
                                        <p className=" font-medium">Less Cost</p>
                                    </div>

                                </div>

                            </div>


                            {/* 3rdBox */}
                            <div className="text-center text-white py-11 bg-black">
                                <h1 className="text-3xl font-medium font-primary"><span className="font-bold">Earn More</span>, List Your <span className="font-bold">Product</span></h1>

                                <p className="mb-7 mt-1">List your gears for sharing and earn money</p>

                                <button className="py-2 w-2/5 border-2 border-white">
                                    <NavLink>SignUp</NavLink>
                                </button>

                            </div>
                        </div>


                        {/* Browse By Category */}
                        <div className="px-16 mt-44">
                            <h3 className="text-4xl font-bold font-secondary">
                                Newly Added Products
                            </h3>
                            <p className="font-medium font-primary mt-2 mb-10">
                                This Products Has been Newly Added
                            </p>



                            {/* Newly added Product Section */}
                            <div>
                                <Swiper
                                    autoHeight={false}
                                    spaceBetween={20}
                                    slidesPerView={3.5}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    {
                                        newProducts.map((product, idx) => <SwiperSlide key={idx}><NewlyAddedCards product={product}></NewlyAddedCards></SwiperSlide>)
                                    }
                                </Swiper>
                            </div>
                        </div>


                        {/* Propular Product Section */}
                        { popularProduct.length ?            
                        <div className=" mt-44 px-16">
                            <h2 className="text-4xl font-bold font-secondary">Popular Products</h2>
                            <p className="font-medium font-primary mt-2 mb-10">This are the most hot products of this week!!</p>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-16">
                                {
                                    popularProduct.map((product, idx) => <PopularProductCard key={idx} product={product}></PopularProductCard>)
                                }
                            </div>
                        </div>
                        :
                        <div>
                            
                        </div>
}


                        {/* All Products Section */}

                        <div className="mt-44 px-16 flex flex-col items-center">
                            <h3 className="text-3xl font-bold mb-10 text-center font-secondary">All Products</h3>
                            <div className="grid grid-cols-3 gap-4 gap-y-20">
                                {
                                    products.slice(0, 8).map((product, idx) => <AllProductsCards key={idx} product={product}></AllProductsCards>)
                                }
                            </div>
                            <button className="mt-20 py-2 px-5 border-2 border-black w-1/6 hover:bg-black hover:text-white">
                                <NavLink to="/allProducts">See All Products</NavLink>
                            </button>
                        </div>
                    </div>
                    :
                    <div className="flex h-[50vh] justify-center items-center">
                        <h3 className="text-5xl font-secondary font-bold text-gray-800">
                            No Products Available
                        </h3>
                    </div>
            }
        </>
    );
};

HomeChildPageTemp.propTypes = {
    category: PropTypes.object
};

export default HomeChildPageTemp;