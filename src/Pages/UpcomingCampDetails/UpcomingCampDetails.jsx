import { useEffect, useState } from "react";
import UpcomingCampDetailsPage from "./UpcomingCampDetailsPage";
import { useParams } from "react-router-dom";
import useUpcomingCamp from "../../Hooks/useUpcomingCamp";

const UpcomingCampDetails = () => {
    const [selectUpcomingCamp, setSelectCamp] = useState();
    const [upcomingCamp, loading] = useUpcomingCamp()
    const { _id } = useParams()
    useEffect(() => {
        const findCamp = upcomingCamp?.find(selectUpcomingCamp => selectUpcomingCamp._id == _id);
        setSelectCamp(findCamp)
    }, [_id, upcomingCamp])
    if (loading) {
        <span className="loading loading-dots loading-lg ite"></span>
    }

    return (
        <div>
            <UpcomingCampDetailsPage selectCamp={selectUpcomingCamp}></UpcomingCampDetailsPage>

        </div>
    );
};

export default UpcomingCampDetails;