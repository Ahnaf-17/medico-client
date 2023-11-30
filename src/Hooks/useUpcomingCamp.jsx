import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUpcomingCamp = () => {
    const axiosPublic = useAxiosPublic()

    const {data: upcomingCamp = [], isLoading: loading,refetch} = useQuery({
        queryKey: ['popularCamp'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/upcoming')
            return res.data
        }
    })
    return [upcomingCamp,loading,refetch]
};

export default useUpcomingCamp;