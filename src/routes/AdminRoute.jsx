// import { useEffect, useState } from "react";
// import { Navigate, useLocation } from "react-router";
// import useAuth from "../hooks/useAuth";

// const AdminRoute = ({ children }) => {
//     const { user, loading } = useAuth();
//     const location = useLocation();
//     const [isAdmin, setIsAdmin] = useState(false);

//     useEffect(() => {
//         const fetchAdminRole = async () => {
//             try { 
//                 const response = await fetch(`https://summer-camp-server-steel.vercel.app/users/${user?.email}`);
//                 const data = await response.json();
//                 setIsAdmin(data.role === "admin");
//             } catch (error) {
//                 console.error("Error fetching admin role:", error);
//                 setIsAdmin(false); 
//             }
//         };

//         if (user && !isAdmin) {
//             fetchAdminRole();
//         }
//     }, [user, isAdmin]);

//     if (loading || (user && !isAdmin)) {
//         return <progress className="progress w-56"></progress>;
//     }

//     if (user && isAdmin) {
//         return children;
//     }

//     return <Navigate to="/" state={{ from: location }} replace />;
// };

// export default AdminRoute;
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
const AdminRoute = ({ children }) => {
    const { user, loader} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loader || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;