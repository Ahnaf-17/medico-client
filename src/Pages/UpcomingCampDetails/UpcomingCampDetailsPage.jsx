/* eslint-disable react/prop-types */
import Umbrella from "../../components/Umbrella/Umbrella";

const UpcomingCampDetailsPage = ({selectCamp}) => {
    const { campName, image, campFees, dateAndTime, location, servicesProvided, healthcareProfessionals, targetAudience, longDescription } = selectCamp || {}
    return (
        <>
        <Umbrella></Umbrella>
            <div className="hero md:min-h-16 bg-base-100">

                <div className="hero-content flex-col lg:flex-row">
                    <div className="foo">
                            <img className="md:max-w-xl max-w-sm rounded-lg shadow-2xl" src={image} alt="" />
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold">{campName}</h1>
                        <p className="py-1"><span className="font-bold">Fee :</span> {campFees}</p>
                        <p className="py-1"><span className="font-bold">Date & Time :</span> {dateAndTime}</p>
                        <p className="py-1"><span className="font-bold">Location :</span> {location}</p>
                        <p className="py-1"><span className="font-bold">Targeted People :</span> {targetAudience}</p>
                        <p><span className="font-bold">Professionals : </span>{healthcareProfessionals} </p>
                        <p><span className="font-bold">Services : </span>{servicesProvided} </p>

                    </div>
                </div>
            </div>
            <div className="mg:px-20 md:py-16 p-5">
                <div>
                    
                </div>
                    <p>{longDescription}</p>
                </div>
        </>
    );
};

export default UpcomingCampDetailsPage;