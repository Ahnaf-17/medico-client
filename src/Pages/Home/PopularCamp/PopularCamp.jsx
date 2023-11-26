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
                loading? <p>Loading...</p> : 
                camp.slice(-6).map(item=> <CampCard key={item.id}
                    camp={item}
                    >
                    </CampCard>)
            }
            </div>
        </div>
    );
};

export default PopularCamp;