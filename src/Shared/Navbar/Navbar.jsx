import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }


    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/availableCamps">Available Camps</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>

        {/* {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        }
        <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>
        {
            user ? <>
  
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        } */}
    </>
    return (
        <>
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-white text-cyan-900 font-semibold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a> */}
                <img className="w-52" src="https://i.ibb.co/j3dnpCB/logo-transparent-png.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
            <div className="dropdown dropdown-end">
                    {
                        user ?
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                {
                                    user.photoURL ?
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} alt="https://i.ibb.co/fqgXySz/avater.png" />
                                        </div>
                                        :
                                        <div className="w-10 rounded-full">
                                            <img src='https://i.ibb.co/fqgXySz/avater.png' alt="" />
                                        </div>
                                }
                            </label>
                            :
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/ZBXgGBM/user.png" />
                                </div>
                            </label>
                    }

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-cyan-800 rounded-box w-52">
                        <li>
                            {
                                user ?
                                    <div className="flex flex-col  text-white items-start justify-start text-left">
                                        <p>Welcome,{user.displayName}</p>
                                        <button onClick={handleLogOut} className="btn">Log out</button>
                                    </div>
                                    :
                                    <div>
                                        <Link to='/login'>
                                            <button className="btn bg-stone-400 font-bold text-black">Login</button>
                                        </Link>
                                        <Link to='/register'>
                                            <button className="btn bg-stone-400 font-bold text-black">Register</button>
                                        </Link>
                                    </div>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    );
};

export default Navbar;