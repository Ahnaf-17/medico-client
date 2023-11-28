/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useProfessional from "../Hooks/useProfessional";

const ProfessionalRoute = ({children}) => {
    const {user,loading} = useAuth() 
    const [isProfessional,isProfessionalLoading] = useProfessional()
    const location = useLocation();

    if(loading || isProfessionalLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isProfessional){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default ProfessionalRoute;