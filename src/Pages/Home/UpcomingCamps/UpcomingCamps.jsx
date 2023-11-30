/* eslint-disable no-unused-vars */
import useUpcomingCamp from "../../../Hooks/useUpcomingCamp";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import UpcomingCampCard from "../../../components/UpcomingCampCard/UpcomingCampCard";

const UpcomingCamps = () => {
    const [upcomingCamp,loading] = useUpcomingCamp()
    return (
        <div>
            <SectionHeading heading='upcoming camps'></SectionHeading>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6">
            {
                loading? <span className="loading loading-dots loading-lg ite"></span>
                : 
                upcomingCamp.slice(-6).map(item=> <UpcomingCampCard key={item._id} 
                    upcomingCamp={item}></UpcomingCampCard>)
            }
            </div>
        </div>
    );
};

export default UpcomingCamps;