import 
{
createBrowserRouter,
} 
from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "./Home/Home/home";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:
        [
            {
                path:"/",
                element:<Home></Home>
             
            }
        ]
    },
]);

export default router