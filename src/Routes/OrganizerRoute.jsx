/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useOrganizer from "../Hooks/useOrganizer";

const OrganizerRoute = ({children}) => {
    const {user,loading} = useAuth() 
    const [isOrganizer,isOrganizerLoading] = useOrganizer()
    const location = useLocation();

    if(loading || isOrganizerLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isOrganizer){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};


export default OrganizerRoute;