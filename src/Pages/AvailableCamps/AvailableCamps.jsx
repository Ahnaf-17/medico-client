/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useCamp from "../../Hooks/useCamp";
import CampCard from "../../components/CampCard/CampCard";
import Cover from "../../components/Cover/Cover";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const AvailableCamps = () => {
    const [camp, loading] = useCamp()
    const [finalCamp, setFinalCamp] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        let filteredCamps = [...camp];
        if (searchTerm) {
            filteredCamps = filteredCamps.filter((item) =>
                item.campName.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFinalCamp(filteredCamps);
    }, [camp, searchTerm]);
    const handleFilter = () => {

    }
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }
    console.log(camp, "from available camp");
    return (
        <div >
            <Cover></Cover>
            <SectionHeading heading='all camps'></SectionHeading>
            <div className="mb-6">
                <div className="lg:flex lg:flex-row md:flex-row flex-col-reverse  items-center  lg:justify-around">
                    <div className="flex items-center justify-center mb-3 md:mb-0">
                        <label className="pr-2 font-semibold">Filter by Participants:</label>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>participant 1-4</option>
                            <option>Participant 5-9</option>
                            <option>10-14</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="search" className="pr-2 font-semibold">Search by Title:</label>
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Search"
                                className="input input-bordered w-24 md:w-auto"
                                onChange={handleSearch}
                                value={searchTerm}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-10 md:mx-2 mx-2 lg:mx-0">
                {
                    loading ? <span className="loading loading-dots loading-lg ite"></span>
                        :
                        finalCamp.map(item => <CampCard key={item._id}
                            camp={item}
                        >
                        </CampCard>)
                }
            </div>
        </div>
    );
};

export default AvailableCamps;