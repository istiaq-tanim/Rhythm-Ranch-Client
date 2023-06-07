import { useContext } from "react";
import { UserContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user,loader}=useContext(UserContext);
    const location=useLocation();
    if(loader)
    {
      return  <progress className="progress w-56"></progress>
    }
    if(user)
    {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;