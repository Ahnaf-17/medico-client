/* eslint-disable react/prop-types */

const SectionHeading = ({heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-cyan-700-600 mb-2">--- MEDICO ---</p>
            <h3 className="text-3xl text-cyan-950 font-semibold uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionHeading;