
import { useEffect, useState } from "react";
import useCamp from "../../Hooks/useCamp";
import CampDetailsPage from "./CampDetailsPage";
import { useParams } from "react-router-dom";

const CampDetails = () => {
    const [selectCamp,setSelectCamp] = useState();
    const [camp,loading] = useCamp()
    const {_id} = useParams()
    useEffect(()=>{
        const findCamp = camp?.find(selectCamp=> selectCamp._id == _id);
        setSelectCamp(findCamp)
    },[_id, camp])
    if(loading){
        <span className="loading loading-dots loading-lg ite"></span>
    }
    
    return (
        <div>
            
                <CampDetailsPage selectCamp={selectCamp}></CampDetailsPage>
            
        </div>
    );
};

export default CampDetails;