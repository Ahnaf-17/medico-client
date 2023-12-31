/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useParticipant from "../Hooks/useParticipant";

const ParticipantRoute = ({children}) => {
    const {user,loading} = useAuth() 
    const [isParticipant,isParticipantLoading] = useParticipant()
    const location = useLocation();

    if(loading || isParticipantLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isParticipant){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default ParticipantRoute;