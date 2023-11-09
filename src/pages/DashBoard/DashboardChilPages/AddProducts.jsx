import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";



const AddProducts = () => {

    const { user, photo } = useContext(AuthContext)

    const handleForm = (e) => {
        e.preventDefault()
        const productData = {
            category: e.target.category.value.toLowerCase(),
            product_name: e.target.productsName.value,
            product_image: e.target.ProductImg.value,
            description: e.target.description.value,
            provider_name: e.target.providerName.value,
            provider_image: photo,
            provider_id: user.uid,
            provider_email: e.target.providerEmail.value,
            price_per_day: e.target.pricePerDay.value,
            location: e.target.location.value,
            isPopular: false
        }



        fetch(
            "https://cam-r-server.vercel.app/addProduct",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                data && Swal.fire("Product Added Succesfully");
            })
    }




    return (
        <div className="w-full">
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || Add Product</title>
            </Helmet>
            <h3 className="text-white font-primary text-xl font-semibold bg-gray-600 border-b-2 border-white mb-2 py-6 text-center">Add Product</h3>
            <form onSubmit={handleForm} className="flex flex-col w-full gap-2 text-white bg-transparent" action="">
                <input className="bg-gray-600 rounded-sm placeholder:font-semibold outline-none text-white border-b-2 border-white py-4 pl-4" placeholder="Image Url" name="ProductImg" type="text" />



                <input className="bg-gray-600 rounded-sm placeholder:font-semibold outline-none text-white border-b-2 border-white py-4 pl-4" placeholder="Product Name" name="productsName" type="text" />



                <input className="bg-gray-600 rounded-sm placeholder:font-semibold outline-none text-white border-b-2 border-white py-4 pl-4" value={user?.displayName} readOnly placeholder="" name="providerName" type="text" />



                <input className="bg-gray-600 rounded-sm placeholder:font-semibold outline-none text-white border-b-2 border-white py-4 pl-4" readOnly value={user?.email} placeholder="" type="email" name="providerEmail" id="" />



                <input className="bg-gray-600 rounded-sm placeholder:font-semibold outline-none text-white border-b-2 border-white py-4 pl-4" placeholder="Price Per Day" name="pricePerDay" type="text" />



                <input className="bg-gray-600 rounded-sm placeholder:font-semibold outline-none text-white border-b-2 border-white py-4 pl-4" placeholder="Location" name="location" type="text" />



                <textarea className="bg-gray-600 p-4 rounded-sm placeholder:font-semibold outline-none text-white border-b-2 border-white" placeholder="Product Description" name="description" id="" cols="30" rows="10"></textarea>


                <input className="bg-gray-600 rounded-sm placeholder:font-semibold outline-none text-white border-b-2 border-white py-4 pl-4" placeholder="Category" name="category" type="text" />



                <input className="bg-gray-600 border-b-2 border-white rounded-sm font-primary hover:bg-gray-500 cursor-pointer font-bold py-3" type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProducts;