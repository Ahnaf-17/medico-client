/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const CampDetailsPage = ({selectCamp}) => {
    const {campName,image,campFees,dateAndTime,location,servicesProvided,healthcareProfessionals,targetAudience,longDescription} = selectCamp || {}
    return (
        <div>
            <p>{campName}</p>
            {longDescription}
        </div>
    );
};

export default CampDetailsPage;