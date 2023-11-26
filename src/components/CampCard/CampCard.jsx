/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CampCard = ({camp}) => {
    const {campName,image,campFees,dateAndTime,location} = camp;
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
                    <Link to={`/details/`}>
                        <button className="badge badge-outline">View details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CampCard;