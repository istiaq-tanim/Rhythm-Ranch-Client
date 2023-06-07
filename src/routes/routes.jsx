import 
{
createBrowserRouter,
} 
from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import SignUp from "../Register/SignUp";

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
                path:"/signUp",
                element:<SignUp></SignUp>
            },
            

        ]
    },
]);

export default router