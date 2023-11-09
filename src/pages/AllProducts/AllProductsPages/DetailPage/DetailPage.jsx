import { Link, useLoaderData } from "react-router-dom";


const DetailPage = () => {

    const product = useLoaderData()

    const {
        product_name,
        product_image,
        provider_name,
        provider_image,
        price_per_day,
        description,
        _id
    } = product





    return (
        <div>
        <div className="flex flex-col text-white font-primary gap-6" >
            <img className=" w-full h-1/2 object-cover" src={product_image} alt="" />
            <div className="p-4">
                <h3 className="text-xl font-semibold">{product_name}</h3>
                <div className="flex gap-3 mb-3 items-center">
                    <img className="w-7 h-7 rounded-full object-cover" src={provider_image} alt="" />
                    <p className="text-xs">{provider_name}</p>
                </div>
                <p className="text-sm mb-4">{description}</p>
                <p>Location: {product?.location}</p>
                <div className="flex justify-between pr-12 items-center">
                    <p>${price_per_day}/Day</p>
                <button to={`/deatails/:${_id}`} className="py-1 border-2 border-white px-2">Book Now</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default DetailPage;