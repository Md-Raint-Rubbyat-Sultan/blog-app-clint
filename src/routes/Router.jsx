import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home page/Home/Home";
import Main from "../layouts/Main";
import Blog from "../pages/blog page/Blog/Blog";
import Login from "../pages/login page/Login/Login";
import Register from "../pages/login page/Register/Register";

const route = createBrowserRouter ([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);

export default route;