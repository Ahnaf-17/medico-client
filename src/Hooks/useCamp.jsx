import { useEffect, useState } from "react";

const useCamp = () => {

    const [camp,setCamp] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('/camps.json')
        .then(res=> res.json())
        .then(data=>{
            setCamp(data)
            setLoading(false)
        })
    },[])
    return [camp,loading]
};

export default useCamp;