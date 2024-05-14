import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import axios from "axios";

const RequestedFood = () => {
    const { user } = useContext(AuthContext)
    const { isPending, data: foods } = useQuery({
        queryFn: async () => {
            const res = await fetch(`https://food-unity-server-gamma.vercel.app/requestedFood?email=${user.email}`, { credentials: 'include' });
            return res.json();
        }
    });
    // const [foods, setFoods] = useState([])
    // useEffect(() => {
    //     axios.get(`https://food-unity-server-gamma.vercel.app/requestedFood?email=${user.email}`, { withCredentials: true })
    //         .then(res => setFoods(res.data))

    // }, [user.email])
    if (isPending) {
        return (
            <div className="min-h-60 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                    <div className="flex justify-center">
                        <div className="animate-spin inline-block size-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (foods?.length == 0) {
        return (
            <>
                <div className="text-blue-600 font-bold text-center text-3xl pt-20 pb-6">
                    You haven&apos;t made any food requests yet.
                </div>
                <div className="w-full flex items-center justify-center pb-20">
                    <Link to={'/available'} className="btn btn-primary mx-auto">See Available Food</Link>
                </div>
            </>
        )
    }
    return (
        <div>
            <Helmet>
                <title>FoodUnity | Requested Food</title>
            </Helmet>
            <div className="overflow-x-auto max-w-[1500px] mx-auto w-11/12 md:w-[85%] py-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Donar Name</th>
                            <th>Request Date</th>
                            <th>Pickup Location</th>
                            <th>Expired Dare</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            foods?.map((food, idx) => <tr key={food._id}>
                                <th>{idx + 1}</th>
                                <td><img className="h-16 w-20 object-cover object-center" src={food.foodImage} alt="" /></td>
                                <td>{food.foodName}</td>
                                <td>{food.donarName}</td>
                                <td>{food.currentDate}</td>
                                <td>{food.pickupLocation}</td>
                                <td>{food.expiredDate}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestedFood;