import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddFood from "../pages/AddFood/AddFood";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/available',
                element: <div>avilavl</div>
            },
            {
                path: '/manageFood',
                element: <div>manage food</div>
            },
            {
                path: '/addFood',
                element: <PrivateRoute><AddFood /></PrivateRoute>
            },
            {
                path: '/requestedFood',
                element: <div>requestt</div>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
]);


export default router;