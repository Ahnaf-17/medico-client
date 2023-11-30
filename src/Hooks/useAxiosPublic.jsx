import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://medico-server-chi.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;