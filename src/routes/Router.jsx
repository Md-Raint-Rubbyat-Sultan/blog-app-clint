import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home page/Home/Home";
import Main from "../layouts/Main";
import Blog from "../pages/blog page/Blog/Blog";
import Login from "../pages/login page/Login/Login";
import Register from "../pages/login page/Register/Register";
import ErrorPage from "../pages/shared/Error/Error";
import PrivetRoute from "./PrivetRoute";
import ForgetPassword from "../pages/login page/ForgetPassword/ForgetPassword";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <PrivetRoute><Blog></Blog></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/forget-password',
                element: <ForgetPassword></ForgetPassword>
            },
        ]
    },
]);

export default route;