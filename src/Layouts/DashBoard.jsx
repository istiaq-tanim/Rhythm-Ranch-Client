import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUsers } from 'react-icons/fa';

const DashBoard = () => {
    const isAdmin = true;
    const isInstructor=false
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
                            isAdmin ? <>
                                <li className="text-lg"><NavLink to="manageClasses">Manage Classes</NavLink></li>
                                <li className="text-lg"><NavLink to="manageUser"><FaUsers></FaUsers>Manage Users</NavLink></li>
                            </> : isInstructor ? <>
                            
                            </> :
                            
                            
                            <></>
                            
                           
                        }

                        <div className="divider"></div>
                        <li className="text-lg"><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;