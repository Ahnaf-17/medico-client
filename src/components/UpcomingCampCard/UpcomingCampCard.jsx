/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import useParticipant from "../../Hooks/useParticipant";
import useProfessional from "../../Hooks/useProfessional";

const UpcomingCampCard = ({upcomingCamp}) => {
    const [isProfessional] = useProfessional()
    const [isParticipant] = useParticipant()
    const {  _id,campName, image, campFees, dateAndTime, location } = upcomingCamp || {}
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
                    {
                        isParticipant &&
                        <Link to={`/upcoming-camp-details/${_id}`}>
                        <button className="badge badge-outline">View details</button>
                    </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default UpcomingCampCard;