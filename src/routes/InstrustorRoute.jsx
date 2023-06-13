import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [isInstructor, setIsInstructor] = useState(false);

    useEffect(() => {
        const fetchAdminRole = async () => {
            try { 
                const response = await fetch(`http://localhost:5000/users/${user?.email}`);
                const data = await response.json();
                setIsInstructor(data.role === "instructor");
            } catch (error) {
                console.error("Error fetching instructor role:", error);
                setIsInstructor(false); 
            }
        };

        if (user && !isInstructor) {
            fetchAdminRole();
        }
    }, [user, isInstructor]);

    if (loading || (user && !isInstructor)) {
        return <progress className="progress w-56"></progress>;
    }

    if (user && isInstructor) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace />;
};

export default InstructorRoute;