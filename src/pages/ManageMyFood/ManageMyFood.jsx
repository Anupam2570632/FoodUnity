import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ManageMyFood = () => {
    const { user } = useContext(AuthContext)
    const { isPending, data: foods } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/food?email=${user.email}`);
            return res.json();
        }
    });

    if (isPending) {
        return <div className="min-h-60 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                <div className="flex justify-center">
                    <div className="animate-spin inline-block size-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    }


    return (
        <div>
            <div className="overflow-x-auto max-w-[1500px] mx-auto w-11/12 md:w-[85%] py-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Expired Date</th>
                            <th>Pickup Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            foods?.map((food, idx) => <tr key={food._id}>
                                <th>{idx + 1}</th>
                                <td><img className="h-16 w-20 object-cover object-center" src={food.foodImage} alt="" /></td>
                                <td>{food.foodName}</td>
                                <td>{food.expiredDate}</td>
                                <td>{food.pickupLocation}</td>
                                <td><button className="btn mr-4 btn-error">Delete</button><button className="btn btn-primary">Update</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMyFood;