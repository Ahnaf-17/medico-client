/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

const CampCard = ({camp}) => {
    const state = useLocation()
    const joinButton = state.pathname.includes('availableCamps')
    const {_id,campName,image,campFees,dateAndTime,location} = camp;
    return (
        <div className="card bg-base-100 shadow-xl  lg:flex">
            <div>
                <figure><img className="md:h-[300px] rounded-t-xl md:w-full" src={image} alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {campName}
                </h2>
                <p>Fee : {campFees}</p>
                <p>Camp Date :{dateAndTime}</p>
                <p>Location :{location}</p>
                {/* <p className="font-semibold">{category}</p> */}
                <div className="card-actions justify-end">
                    <Link to={`/camp-details/${_id}`}>
                        <button className="badge badge-outline">View details</button>
                    </Link>
                    {
                        joinButton && <button className="badge badge-outline">Join now</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default CampCard;