import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (user) {
        return children
    }
    if (loading) {
        return 'loading....'
    }
    else {
        return (
            <Navigate state={location.pathname} to={'/login'}></Navigate>
        )
    }
};

export default PrivateRoute;