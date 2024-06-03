import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import LoginLayout from "../layout/LoginLayout";
import Blog from "../pages/Home/Blog/Blog";
import Error from "../pages/Error/Error";
import AddAToy from "../pages/AddAToy/AddAToy";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
            
        ]
    },
    {
        path:'/',
        element:<LoginLayout/>,
        children:[
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'blog',
                element:<Blog/>
            },
            {
                path:'add-toy',
                element:<AddAToy/>
            }
        ]
    }
])

 export default router;
 