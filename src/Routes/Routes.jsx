import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import ContactUs from "../Pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path:'/availableCamps',
          element:<AvailableCamps></AvailableCamps>
        },
        {
          path:'/contact',
          element:<ContactUs></ContactUs>
        }
      ]
    },
  ]);