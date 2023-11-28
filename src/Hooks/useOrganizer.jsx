import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useOrganizer = () => {
    const {user,loading} = useAuth();
    const axiosPrivate = useAxiosPrivate()
    const {data : isOrganizer, isPending:isOrganizerLoading} = useQuery({
        queryKey: [user?.email, 'isOrganizer'],
        enabled: !loading,
        queryFn: async()=>{
            // console.log("asking or checking admin",user);
            const res = await axiosPrivate.get(`/users/${user.email}`)
            console.log(res.data);
            return res.data?.organizer
        }
    })
    return [isOrganizer,isOrganizerLoading]
};

export default useOrganizer;