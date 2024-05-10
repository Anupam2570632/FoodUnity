import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
    return (
        <div className="font-cabin">
            <NavBar/>
            <Outlet/>
            <Footer/>
            <ToastContainer />
        </div>
    );
};

export default Root;