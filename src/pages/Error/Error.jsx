import { Link } from "react-router-dom";
import image from '../../assets/errorLogo.jpg'

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <img src={image} alt="Error" className="max-w-full h-auto mb-8" />
            <Link to={'/'}>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Back to Home</button>
            </Link>
        </div>
    );
};

export default Error;
