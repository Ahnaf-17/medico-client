import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useProfessional = () => {
    const {user} = useAuth();
    const axiosPrivate = useAxiosPrivate()
    const {data : isProfessional, isPending:isProfessionalLoading} = useQuery({
        queryKey: [user?.email, 'isProfessional'],
        queryFn: async()=>{
            const res = await axiosPrivate.get(`/users/${user.email}`)
            console.log(res.data);
            return res.data?.professional
        }
    })
    return [isProfessional,isProfessionalLoading]
};

export default useProfessional;