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
        element: <AllProducts />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
