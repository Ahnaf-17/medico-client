import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useCamp = () => {

    // const [camp,setCamp] = useState([]);
    // const [loading,setLoading] = useState(true)
    // useEffect(()=>{
    //     fetch('http://localhost:5000/camps')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         setCamp(data)
    //         setLoading(false)
    //     })
    // },[])

    const axiosPublic = useAxiosPublic();

    const {data: camp = [], isLoading: loading,refetch} = useQuery({
        queryKey: ['camp'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/camps')
            return res.data
        }
    })



    return [camp,loading,refetch]
};

export default useCamp;