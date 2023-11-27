import { AiOutlineMenuUnfold } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaListAlt, FaMobileAlt, FaRegEdit, FaUser } from "react-icons/fa";
import { FaCalendarPlus, FaCashRegister } from "react-icons/fa6";
import useOrganizer from "../Hooks/useOrganizer";

const Dashboard = () => {
    const [isOrganizer] = useOrganizer()
    return (
        <div className="flex">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-start justify-start">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn  drawer-button text-2xl lg:hidden mt-2"><AiOutlineMenuUnfold /></label>
                    <div className="ml-4 mt-4 w-full"><Outlet></Outlet></div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-cyan-800  text-white">

                        {/* role based (organizer) */}

                        {
                            isOrganizer ? 
                            <>
                            <li>
                            <NavLink to='/dashboard/organizer-profile'><FaUser></FaUser> Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/add-a-camp'><FaCalendarPlus></FaCalendarPlus>Add a camp</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/manage-camps'><FaRegEdit></FaRegEdit>Manage camp</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/manage-registered-camps'><FaCashRegister></FaCashRegister> Registered camp</NavLink>
                        </li>
                            </> 
                            :
                            <>
                            <li>
                            <NavLink to='/dashboard/participant-profile'><FaUser></FaUser> participant Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/add-a-camp'><FaCalendarPlus></FaCalendarPlus>destroy a camp</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/manage-camps'><FaRegEdit></FaRegEdit>Manage camp</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/manage-registered-camps'><FaCashRegister></FaCashRegister> Registered camp</NavLink>
                        </li>
                            </>
                        }


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