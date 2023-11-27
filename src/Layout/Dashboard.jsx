import { AiOutlineMenuUnfold } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { FaHome, FaListAlt, FaMobileAlt } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-start justify-start">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn  drawer-button text-2xl lg:hidden mt-2"><AiOutlineMenuUnfold /></label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-cyan-800  text-white">

                        {/* role based */}
                        <li>
                            <NavLink></NavLink>
                        </li>


                        {/* common */}
                        <div className="divider divider-neutral"></div>
                        <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to='/contact'><FaMobileAlt></FaMobileAlt> Contact Us</NavLink></li>
                        <li><NavLink to='/availableCamps'><FaListAlt></FaListAlt> Available Camps</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;