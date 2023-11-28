import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useParticipant = () => {
    const {user,loading} = useAuth();
    const axiosPrivate = useAxiosPrivate()
    const {data : isParticipant, isPending:isParticipantLoading} = useQuery({
        queryKey: [user?.email, 'isParticipant'],
        enabled:!loading,
        queryFn: async()=>{
            const res = await axiosPrivate.get(`/users/${user.email}`)
            console.log(res.data);
            return res.data?.participant
        }
    })
    return [isParticipant,isParticipantLoading]
};

export default useParticipant;