import 
{
createBrowserRouter,
} 
from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import SignUp from "../Register/SignUp";
import Login from "../Register/Login";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Layouts/Dashboard";
import ManageUSer from "../Pages/DashBoard/ManageUser/ManageUSer";
import ManageClasses from "../Pages/DashBoard/ManageClasses/ManageClasses";
import AddClass from "../Pages/DashBoard/AddClass/AddClass";
import MyClass from "../Pages/DashBoard/AddClass/MyClass/MyClass";
import FeedBack from "../Pages/DashBoard/ManageClasses/FeedBack";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:
        [
            {
                path:"/",
                element:<Home></Home>
             
            },
            {
                path:"/instructor",
                element:<PrivateRoutes><Instructors></Instructors></PrivateRoutes>
            },
            {
                path:"/signUp",
                element:<SignUp></SignUp>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    },

    {
        path:"dashboard",
        element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children:
        [
            {
               path:"manageUser",
               element:<ManageUSer></ManageUSer>
            },
            {
               path:"manageClasses",
               element:<ManageClasses></ManageClasses>
            },
            {
                path:"addClass",
                element:<AddClass></AddClass>
            },
            {
                path:"myClass",
                element:<MyClass></MyClass>
            },
            {
                path:"feedback/:id",
                element:<FeedBack></FeedBack>
            }
        ]
    }
]);

export default router