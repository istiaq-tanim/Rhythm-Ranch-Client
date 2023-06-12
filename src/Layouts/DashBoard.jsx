import { NavLink, Outlet } from "react-router-dom";
import { FaBookReader, FaHome, FaUsers } from 'react-icons/fa';
import { HiUserGroup } from "react-icons/hi2";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";



const DashBoard = () => {
    const {user}=useAuth()
    const [role,setRole]=useState("")

    useEffect(()=>{
     
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setRole(data.role))

    },[user.email])

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-cyan-200 text-base-content">
                        {
                            role === "admin" ? <>
                                <li className="text-lg"><NavLink to="/dashboard/manageClasses">Manage Classes</NavLink></li>
                                <li className="text-lg"><NavLink to="/dashboard/manageUser"><FaUsers></FaUsers>Manage Users</NavLink></li>
                            </> : role === "instructor" ? <>
                            <li className="text-lg"><NavLink to="/dashboard/addClass">Add a Classes</NavLink></li>
                            <li className="text-lg"><NavLink to="/dashboard/myClass">My Class</NavLink></li>
                            </> :
                            <>
                             <li className="text-lg"><NavLink to="/dashboard/studentClass">My Selected Class</NavLink></li>
                             <li className="text-lg"><NavLink to="/dashboard/enrolled">My Enrolled Course</NavLink></li>
                             <li className="text-lg"><NavLink to="/dashboard/paymentHistory">Payment History</NavLink></li>
                            </> 
                        }
                        <div className="divider"></div>
                        <li className="text-lg"><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                        <li className="text-lg"><NavLink to="/instructor"><HiUserGroup></HiUserGroup>Instructors</NavLink></li>
                        <li className="text-lg"><NavLink to="/classes"><FaBookReader></FaBookReader>Classes</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;