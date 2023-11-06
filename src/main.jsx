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
import AllServices from './pages/AllServices';
import BasePage from './pages/Home/HomeChildrenPages/BasePage';
import CameraPage from './pages/Home/HomeChildrenPages/CameraPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AllAboveAll/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        children:[
          {
            path: "/",
            element: <BasePage/>,
            loader: () => fetch('productData.json')
          },
          {
            path: "/camera",
            element: <CameraPage/>
          },
          {
            path: "/add",
            element: <h1>Add Page</h1>
          }
        ]
      },
      {
        path: "/login",
        element:<Login/>,
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/services",
        element: <AllServices/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
