import { Link } from "react-router-dom";
import useCamp from "../../../Hooks/useCamp";
import CampCard from "../../../components/CampCard/CampCard";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const PopularCamp = () => {
    const [camp,loading] = useCamp();


    return (
        <div>
            <SectionHeading
            heading="Popular Camps"></SectionHeading>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {
                loading? <span className="loading loading-dots loading-lg ite"></span>
                : 
                camp.slice(-6).map(item=> <CampCard key={item._id}
                    camp={item}
                    >
                    </CampCard>)
            }
            </div>
            <div className="items-center text-center my-16">
            <Link to='/availableCamps'>
            <button className="btn btn-outline bg-cyan-700 w-20 text-white">See All</button>
            </Link>
            </div>
        </div>
    );
};

export default PopularCamp;