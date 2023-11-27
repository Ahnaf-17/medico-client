import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useOrganizer = () => {
    const {user} = useAuth();
    const axiosPrivate = useAxiosPrivate()
    const {data : isOrganizer, isPending:isOrganizerLoading} = useQuery({
        queryKey: [user?.email, 'isOrganizer'],
        queryFn: async()=>{
            const res = await axiosPrivate.get(`/users/organizer/${user.email}`)
            console.log(res.data);
            return res.data?.organizer
        }
    })
    return [isOrganizer,isOrganizerLoading]
};

export default useOrganizer;