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
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import CampDetails from "../Pages/CampDetails/CampDetails";
import ParticipantProfile from "../Pages/Dashboard/Participant/Profile/ParticipantProfile";
import OrganizerProfile from "../Pages/Dashboard/Organizer/Profile/OrganizerProfile";
import AddCamp from "../Pages/Dashboard/Organizer/AddCamp/AddCamp";
import ManageCamp from "../Pages/Dashboard/Organizer/ManageCamp/ManageCamp";
import ManageRegCamp from "../Pages/Dashboard/Organizer/ManageRegCamp/ManageRegCamp";
import OrganizerRoute from "./OrganizerRoute";
import ParticipantRoute from "./ParticipantRoute";
import RegCamps from "../Pages/Dashboard/Participant/RegCamps/RegCamps";
import PaymentHistory from "../Pages/Dashboard/Participant/PaymentHistory/PaymentHistory";
import Feedback from "../Pages/Dashboard/Participant/Feedback/Feedback";
import ProfessionalRoute from "./ProfessionalRoute";
import ProfessionalsProfile from "../Pages/Dashboard/Professionals/Profile/ProfessionalsProfile";
import Payment from "../Pages/Payment/Payment";

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
          element:<PrivateRoute><AvailableCamps></AvailableCamps></PrivateRoute>
        },
        {
          path:'/contact',
          element:<ContactUs></ContactUs>
        },
        {
          path:'/camp-details/:_id',
          element:<PrivateRoute><CampDetails></CampDetails></PrivateRoute>
        }
       
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        // participant 
        {
          path: 'participant-profile',
          element: <ParticipantRoute><ParticipantProfile></ParticipantProfile></ParticipantRoute>
        },
        {
          path:'registered-camps',
          element: <ParticipantRoute><RegCamps></RegCamps></ParticipantRoute>
        },
        {
          path:'payment-history',
          element:<ParticipantRoute><PaymentHistory></PaymentHistory></ParticipantRoute>
        },
        {
          path:'feedback-and-ratings',
          element:<ParticipantRoute><Feedback></Feedback></ParticipantRoute>
        },
        {
          path: 'payment/:_id',
          element:<ParticipantRoute><Payment></Payment></ParticipantRoute>
        },
        // {
        //   path:'/reg-camps/:_id',
        //   element:<ParticipantRoute><JoinNow></JoinNow></ParticipantRoute>,
          
        // },


        // organizer 
        {
          path:'organizer-profile',
          element:<OrganizerRoute><OrganizerProfile></OrganizerProfile></OrganizerRoute>
        },
        {
          path:'add-a-camp',
          element:<OrganizerRoute><AddCamp></AddCamp></OrganizerRoute>
        },
        {
          path:'manage-camps',
          element:<OrganizerRoute><ManageCamp></ManageCamp></OrganizerRoute>
        },
        {
          path:'manage-registered-camps',
          element:<OrganizerRoute><ManageRegCamp></ManageRegCamp></OrganizerRoute>
        },

        // professional 
        {
          path: 'professional-profile',
          element:<ProfessionalRoute><ProfessionalsProfile></ProfessionalsProfile></ProfessionalRoute>
        }
      ]
    }
  ]);