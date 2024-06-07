import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import LoginLayout from "../layout/LoginLayout";
import Blog from "../pages/Home/Blog/Blog";
import Error from "../pages/Error/Error";
import AddAToy from "../pages/AddAToy/AddAToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";
import AllToys from "../pages/AllToys/AllToys";
import SingleToy from "../pages/SingleToy/SingleToy";

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
                path:'login',
                element:<Login/>
            },
            {
                path:'register',
                element:<Register/>
            },
            {
                path:'blog',
                element:<Blog/>
            },
            {
                path:'add-toy',
                element:<PrivateRoute><AddAToy/></PrivateRoute>
            },
            {
                path:'my-toys',
                element:<PrivateRoute><MyToys/></PrivateRoute>
            },
            {
                path:'all-toy',
                element:<AllToys/>,
                loader:()=>fetch('https://glitter-tidy-gondola.glitch.me/cars')
            },
            {
                path:'toy/:id',
                element:<SingleToy/>,
                loader:({params})=>fetch(`https://glitter-tidy-gondola.glitch.me/car/${params.id}`)
            }
        ]
    }
])

 export default router;
 