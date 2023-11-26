/* eslint-disable no-unused-vars */
import useCamp from "../../Hooks/useCamp";
import CampCard from "../../components/CampCard/CampCard";
import Cover from "../../components/Cover/Cover";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const AvailableCamps = () => {
    const [camp,loading] = useCamp()
    return (
        <div >
            <Cover></Cover>
            <SectionHeading heading='all camps'></SectionHeading>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-10 md:mx-2 mx-2 lg:mx-0">
            {
                loading? <span className="loading loading-dots loading-lg ite"></span>
                : 
                camp.map(item=> <CampCard key={item._id}
                    camp={item}
                    >
                    </CampCard>)
            }
            </div>
        </div>
    );
};

export default AvailableCamps;