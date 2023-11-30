/* eslint-disable react/prop-types */

import useProfessional from "../../Hooks/useProfessional";

const UpcomingCampCard = ({upcomingCamp}) => {
    const {isProfessional} = useProfessional()
    const {  campName, image, campFees, dateAndTime, location } = upcomingCamp || {}
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} className="w-full h-[250px]" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{campName}</h2>
                <p>Fee : {campFees}</p>
                <p>Date&Time : {dateAndTime}</p>
                <p>Location : {location}</p>
                <div className="card-actions justify-end">
                    {
                        isProfessional && <button className="btn btn-primary">Interested</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default UpcomingCampCard;