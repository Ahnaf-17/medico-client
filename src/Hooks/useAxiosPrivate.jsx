import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosPrivate = axios.create({
    baseURL: 'http://localhost:5000'
}) 

const useAxiosPrivate = () => {
    const {logOut} = useAuth()
    const navigate = useNavigate()

    axiosPrivate.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptors before adding token', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    axiosPrivate.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log('status error in the interceptor', status);

        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    })


    return axiosPrivate;
};

// export default useAxiosPrivate;
// import axios from "axios";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";
// import React from "react";

// const axiosPrivate = axios.create({
//   baseURL: 'http://localhost:5000'
// }) 

// const useAxiosPrivate = () => {
//   const { logOut } = useAuth();
//   const navigate = useNavigate();

//   axiosPrivate.interceptors.request.use(function (config) {
//     const token = localStorage.getItem('access-token');
//     config.headers.authorization = `Bearer ${token}`;
//     return config;
//   }, function (error) {
//     return Promise.reject(error);
//   });

//   axiosPrivate.interceptors.response.use(function (response) {
//     return response;
//   }, async (error) => {
//     const status = error.response.status;

//     if (status === 401 || status === 403) {
//       await logOut();
//     }
//     return Promise.reject(error);
//   });

//   // Redirect using useEffect
//   React.useEffect(() => {
//     const handleRedirect = () => {
//       navigate('/login');
//     };

//     const unauthorizeInterceptor = axiosPrivate.interceptors.response.use(
//       undefined,
//       async (error) => {
//         const status = error.response.status;
//         if (status === 401 || status === 403) {
//           await handleRedirect();
//         }
//         return Promise.reject(error);
//       }
//     );

//     return () => {
//       // Clean up interceptors when component unmounts
//       axiosPrivate.interceptors.response.eject(unauthorizeInterceptor);
//     };
//   }, [navigate, logOut]);

//   return axiosPrivate;
// };

export default useAxiosPrivate;
