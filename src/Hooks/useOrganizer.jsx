import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useOrganizer = () => {
    const {user,loading} = useAuth();
    const axiosPrivate = useAxiosPrivate()
    return (
        <div>
            
        </div>
    );
};

export default useOrganizer;