import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddFood from "../pages/AddFood/AddFood";
import PrivateRoute from "./PrivateRoute";
import AvailableFood from "../pages/AvailableFood/AvailableFood";
import ManageMyFood from "../pages/ManageMyFood/ManageMyFood";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import RequestedFood from "../pages/RequestedFood/RequestedFood";
import UpdateFood from "../pages/UpdateFood/UpdateFood";


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
                element: <AvailableFood />
            },
            {
                path: '/manageFood',
                element: <PrivateRoute><ManageMyFood /></PrivateRoute>,
            },
            {
                path: '/addFood',
                element: <PrivateRoute><AddFood /></PrivateRoute>
            },
            {
                path: '/foodDetails/:id',
                element: <PrivateRoute><FoodDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-unity-server-gamma.vercel.app/food/${params.id}`)
            },
            {
                path: '/requestedFood',
                element: <PrivateRoute><RequestedFood /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path:'/updateFood/:id',
                element:<PrivateRoute><UpdateFood/></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-unity-server-gamma.vercel.app/food/${params.id}`)
            }
        ]
    },
]);


export default router;