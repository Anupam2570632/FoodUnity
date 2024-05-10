import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";


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
                element: <div>add food</div>
            },
            {
                path: '/requestedFood',
                element: <div>requestt</div>
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]
    },
]);


export default router;