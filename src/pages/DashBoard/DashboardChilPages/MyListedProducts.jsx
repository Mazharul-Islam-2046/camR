import{ useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import DashboardProductCard from '../DashboardComponents/DashboardProductCard';

const MyListedProducts = () => {

    const { user } = useContext(AuthContext)

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`https://cam-r-server.vercel.app/products/uid/${user?.uid}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })
    }, [user?.uid, products])



    return (
        <div className="overflow-y-auto py-1 space-y-10 px-7 h-[100vh]">


            {
                products.length <= 0 ?


                    <h3 className="text-3xl font-secondary font-semibold text-white">No Product Found</h3>


                    :



                    <div>
                        {
                            products.map((product, idx) =>
                                <DashboardProductCard key={idx} product={product}></DashboardProductCard>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default MyListedProducts;