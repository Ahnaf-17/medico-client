
const CampSkull = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="flex flex-col gap-4 w-52">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        </div>

    );
};

export default CampSkull;