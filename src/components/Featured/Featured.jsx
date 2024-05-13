import { useQuery } from "@tanstack/react-query";
import { GoLocation } from "react-icons/go";
import './featured.css'
import { Link } from "react-router-dom";

const Featured = () => {

    const { isPending, data: foods } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/foods')
            const data = await res.json();

            const filteredFoods = data.filter(food => food.foodStatus !== 'requested')

            const sortedFoods = filteredFoods.sort((a, b) => b.foodQuantity - a.foodQuantity);

            return sortedFoods;

        }
    })
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
    console.log(foods)

    return (
        <div className="w-11/12 md:w-[85%] mx-auto max-w-[1500px] space-y-6 py-10">
            <div className="mb-4">
                <h2 className="text2xl md:text-4xl font-bold mb-6 text-[#131313] text-center">Featured Food</h2>
                <p className="max-w-[800px] text-center mx-auto text-[#333333]">Discover our Featured Foods! Dive into deliciousness with our top picks, curated just for you. From classics to unique flavors, explore our best offerings. Treat yourself to culinary excellence today!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    foods?.slice(0, 6).map((food, idx) => <div className="card mx-auto flex flex-col border shadow-lg p-5 rounded-[10px] space-y-6 w-full" key={idx}>
                        <div className="relative w-full overflow-hidden">
                            <img className="cardImg h-[250px] rounded-[6px] w-[100%] object-cover object-center" src={food?.foodImage} alt="" />
                            <h2 className=" absolute inset-0 rounded-[6px] flex items-start justify-end p-6 bg-black bg-opacity-40"><span className="token rounded-sm bg-orange-400 text-[#1E3A8A] font-bold px-4 py-2">Available : {food.foodQuantity}</span></h2>
                        </div>
                        <div className="space-y-4 flex-1">
                            <h2 className="text-[#1E3A8A] font-bold text-2xl">{food?.foodName}</h2>
                            <p className="text-[#1E3A8A]"><span className="text-[18px]">Expired Date : </span>{food.expiredDate}</p>
                            <p className="text-[#1E3A8A] flex items-center gap-1"><span className="text-[18px] flex gap-1 items-center"> Pickup <GoLocation /> : </span>{food.pickupLocation}</p>
                            <hr />
                            <p className="text-black italic text-[14px]">
                                {food?.additionalNotes.length > 100 ? `${food.additionalNotes.slice(0, 100)}...` : food?.additionalNotes}
                            </p>
                            <hr />

                            <div className="flex gap-4 items-center">
                                <img className="w-10 rounded-full h-10 object-cover object-center" src={food.donarImage} alt="" />
                                <div>
                                    <h1 className="text-[#006400] text-[18px] font-bold">{food.donarName}</h1>
                                    <h1>{food.donarEmail}</h1>
                                </div>
                            </div>
                        </div>
                        <Link to={`/foodDetails/${food._id}`}>
                            <button className="btn bg-[#1E3A8A] hover:bg-[#006BB3] text-white duration-300 btn-block">View Details</button>
                        </Link>
                    </div>)
                }
            </div>
            <div className="flex items-center justify-center">
                <Link to={'/available'}>
                    <button className="btn w-32 bg-[#4CAF50] hover:bg-[#45a049] duration-300 text-white">Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default Featured;