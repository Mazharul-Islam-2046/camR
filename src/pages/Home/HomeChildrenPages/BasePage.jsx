import { AiFillDollarCircle } from "react-icons/ai";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BsFillShieldLockFill } from "react-icons/bs";
import { NavLink, useLoaderData } from "react-router-dom";
import AllProductsCard from "../HomeComponents/AllProductsCard";
import PopularProductCard from "../HomeComponents/PopularProductCard";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BasePage = () => {

    const { products } = useLoaderData()
    const [popularProduct, setPopularProduct] = useState([])

    useEffect(() => {
        fetch("popularProduct.json")
            .then((res) => res.json())
            .then((data) => {
                setPopularProduct(data.popular)
            })
    }, [])
    return (
        <>
            <div className="grid grid-cols-2 px-16 mt-12 gap-5">
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



                {/* All Product Section */}
                <div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4.5}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            products.slice(0, 8).map((product, idx) => <SwiperSlide key={idx}><AllProductsCard product={product}></AllProductsCard></SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>


            {/* Propular Product Section */}

            <div className=" mt-44 px-16">
                <h2 className="text-4xl font-bold font-secondary">Popular Products</h2>
                <p className="font-medium font-primary mt-2 mb-10">This are the most hot products of this week!!</p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-16">
                    {
                        popularProduct.map((product, idx) => <PopularProductCard key={idx} product={product}></PopularProductCard>)
                    }
                </div>
            </div>


        </>
    );
};

export default BasePage;