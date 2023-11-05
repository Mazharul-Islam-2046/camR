import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllAboveAll from './pages/AllAboveAll';
import Home from './pages/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';


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
            element: <h1>Home Child</h1>
          }
        ]
      },
      {
        path: "/login",
        element:<Login/>,
      },
      {
        path: "/registration",
        element: <Register/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
