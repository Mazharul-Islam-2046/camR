import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllAboveAll from './pages/AllAboveAll';
import Home from './pages/Home/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import BasePage from './pages/Home/HomeChildrenPages/BasePage';
import CameraPage from './pages/Home/HomeChildrenPages/CameraPage';
import AllProducts from './pages/AllProducts/AllProducts';
import AuthProvider from './Providers/AuthProvider';
import CameraAccessories from './pages/Home/HomeChildrenPages/cameraAccessories';
import Digital from './pages/Home/HomeChildrenPages/Digital';
import Audio from './pages/Home/HomeChildrenPages/Audio';
import Lighting from './pages/Home/HomeChildrenPages/Lighting';
import Grips from './pages/Home/HomeChildrenPages/Grips';
import Lenses from './pages/Home/HomeChildrenPages/Lenses';
import Electrics from './pages/Home/HomeChildrenPages/Electrics';
import Production from './pages/Home/HomeChildrenPages/Production';
import Dashboard from './pages/DashBoard/Dashboard';
import CameraProduct from './pages/AllProducts/AllProductsPages/CameraProduct';
import AllProductscameraAccessories from './pages/AllProducts/AllProductsPages/AllProductscameraAccessories';
import AllProductsDigital from './pages/AllProducts/AllProductsPages/AllProductsDigital';
import AllProductsAudio from './pages/AllProducts/AllProductsPages/AllProductsAudio';
import AllProductsLighting from './pages/AllProducts/AllProductsPages/AllProductsLighting';
import AllProductsGrips from './pages/AllProducts/AllProductsPages/AllProductsGrips';
import AllProductsLenses from './pages/AllProducts/AllProductsPages/AllProductsLenses';
import AllProductsProduction from './pages/AllProducts/AllProductsPages/AllProductsProduction';
import AllProductsElectrics from './pages/AllProducts/AllProductsPages/AllProductsElectrics';
import AllProductsBase from './pages/AllProducts/AllProductsPages/AllProductsBase';
import MyBookings from './pages/DashBoard/DashboardChilPages/MyBookings';
import AddProducts from './pages/DashBoard/DashboardChilPages/AddProducts';
import MyListedProducts from './pages/DashBoard/DashboardChilPages/MyListedProducts';
import ProductEidtPage from './pages/DashBoard/DashboardChilPages/ProductEidtPage';
import PrivateRoutes from './Providers/PrivateRoutes';
import DetailPage from './pages/AllProducts/AllProductsPages/DetailPage/DetailPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AllAboveAll />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <BasePage />,
            loader: () => fetch('productData.json')
          },
          {
            path: "/camera",
            element: <CameraPage />
          },
          {
            path: "/camera_accessories",
            element: <CameraAccessories/>
          },
          {
            path: "/digital",
            element: <Digital/>
          },
          {
            path: "/audio",
            element: <Audio/>
          },
          {
            path: "/lighting",
            element: <Lighting/>
          },
          {
            path:"/grips",
            element: <Grips/>
          },
          {
            path: "/lenses",
            element: <Lenses/>
          },
          {
            path: "/Electrics",
            element:<Electrics/>
          },
          {
            path: "/production",
            element: <Production/>
          },
          {
            path: "/add",
            element: <h1>Add Page</h1>
          },

        ]
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/allproducts",
        element: <PrivateRoutes><AllProducts /></PrivateRoutes>,
        children: [
          {
            path: "/allproducts/camera",
            element: <CameraProduct/>
          },
          {
            path: "/allproducts/camera_accessories",
            element: <AllProductscameraAccessories/>
          },
          {
            path: "/allproducts/digital",
            element: <AllProductsDigital/>
          
          },
          {
            path: "/allproducts/audio",
            element: <AllProductsAudio/>
          },
          {
            path: "/allproducts/lighting",
            element: <AllProductsLighting/>
          },
          {
            path: "/allproducts/grips",
            element: <AllProductsGrips/>
          },
          {
            path: "/allproducts/lenses",
            element:<AllProductsLenses/>
          },
          {
            path: "/allproducts/Electrics",
            element: <AllProductsElectrics/>
          },
          {
            path: "/allproducts/production",
            element: <AllProductsProduction/>
          },
          {
            path: "/allproducts",
            element: <AllProductsBase/>
          },
          {
            path: "/allproducts/details/:id",
            element: <DetailPage/>,
            loader: ({params}) => fetch(`https://cam-r-server.vercel.app/products/ids/${params.id}`)
          }
           
        ]
      },
      {
        path:"/dashboard",
        element: <PrivateRoutes><Dashboard/></PrivateRoutes>,
        children:[
          {
            path: "/dashboard",
            element: <MyBookings/>
          },
          {
            path: "/dashboard/addproducts",
            element: <AddProducts/>
          },
          {
            path: "/dashboard/myListedProducts",
            element: <MyListedProducts/>
          },
          {
            path: "/dashboard/myListedProducts/edit/:id",
            element: <ProductEidtPage/>,
            loader: ({params}) => fetch(`https://cam-r-server.vercel.app/products/ids/${params.id}`)
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
