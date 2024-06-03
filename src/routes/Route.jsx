import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import LoginLayout from "../layout/LoginLayout";
import Blog from "../pages/Home/Blog/Blog";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
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
            }
        ]
    }
])

 export default router;
 