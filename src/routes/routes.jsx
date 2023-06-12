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
import ManageUSer from "../Pages/DashBoard/ManageUser/ManageUSer";
import ManageClasses from "../Pages/DashBoard/ManageClasses/ManageClasses";
import AddClass from "../Pages/DashBoard/AddClass/AddClass";
import MyClass from "../Pages/DashBoard/AddClass/MyClass/MyClass";
import FeedBack from "../Pages/DashBoard/ManageClasses/FeedBack";
import AllClass from "../Pages/AllClass/AllClass";
import StudentClass from "../Pages/DashBoard/StudentClass/StudentClass";
import EnrolledClass from "../Pages/DashBoard/EnrolledClass/EnrolledClass";
import Payment from "../Pages/DashBoard/AddClass/Payment/Payment";
import DashBoard from "../Layouts/DashBoard";


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
                element:<Instructors></Instructors>
            },
            {
                path:"/classes",
                element:<AllClass></AllClass>
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
               path:"studentClass",
               element:<StudentClass></StudentClass>
            },
            {
                path:"enrolled",
                element:<EnrolledClass></EnrolledClass>
            },
            {
                path:"feedback/:id",
                element:<FeedBack></FeedBack>
            },
            {
                path:"payment/:id",
                element:<Payment></Payment>
            }
        ]
    }
]);

export default router