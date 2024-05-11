import { useQuery } from "@tanstack/react-query";
import { GoLocation } from "react-icons/go";
import { BiSearch } from 'react-icons/bi';
import './food.css';
import { useState } from "react";
import { Link } from "react-router-dom";

const AvailableFood = () => {
    const { isPending, data: foods } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/foods');
            return res.json();
        }
    });

    const [isLayout, setIsLayout] = useState(true)

    const [searchInput, setSearchInput] = useState('');
    const [selectedFood, setSelectedFood] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
        setSelectedFood(null); // Reset selected food when input changes
    };

    const handleFoodSelect = (food) => {
        setSelectedFood(food);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    let filteredFoods = foods;

    if (searchInput) {
        filteredFoods = foods.filter(food =>
            food.foodName.toLowerCase().includes(searchInput.toLowerCase())
        );
    }

    if (sortBy === 'expiryDateAsc') {
        filteredFoods.sort((a, b) => new Date(a.expiredDate) - new Date(b.expiredDate));
    } else if (sortBy === 'expiryDateDesc') {
        filteredFoods.sort((a, b) => new Date(b.expiredDate) - new Date(a.expiredDate));
    }

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

    return (
        <div className="w-11/12 md:w-[85%] mx-auto max-w-[1500px] py-16">
            <div className="search flex gap-6 items-center h-14 justify-center mb-10">
                <div className="searchDiv h-14">
                    <div className='flex w-fit h-full items-center'>
                        <div className='border border-gray-400 border-r-0 h-full text-xl rounded-l-full p-4 text-gray-500' >
                            <BiSearch />
                        </div>
                        <input
                            type="text"
                            placeholder="Search food..."
                            value={searchInput}
                            onChange={handleSearchInputChange}
                            className="searchInput border outline-blue-500 border-gray-400 flex-1 h-full rounded-r-full p-3"
                        />
                    </div>
                </div>
                <div className="h-14 flex items-center gap-5 border text-xl rounded-full pl-4">
                    <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 dark:text-neutral-300">SortBy:</label>
                    <select
                        id="sortBy"
                        name="sortBy"
                        onChange={handleSortChange}
                        className="h-full bloc py-2 w-full border rounded-r-full bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="">Expiry Date</option>
                        <option value="expiryDateAsc">Expiry Date (Ascending)</option>
                        <option value="expiryDateDesc">Expiry Date (Descending)</option>
                    </select>
                </div>
                <button className="btn bg-green-600 hover:bg-green-700 duration-300 text-white font-bold" onClick={() => setIsLayout(!isLayout)}>Change LayOut</button>
            </div>
            {filteredFoods.length === 0 ? (
                <div className="text-center text-gray-500 dark:text-gray-400">No food found.</div>
            ) : (
                <div className={`grid grid-cols-1 md:grid-cols-2 ${isLayout ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-6`}>
                    {filteredFoods.map((food, idx) => (
                        <div className="card mx-auto flex flex-col border shadow-lg p-5 rounded-[10px] space-y-6 w-full" key={idx}>
                            {/* Render food card */}
                            <div className="relative w-full overflow-hidden">
                                <img className="cardImg h-[250px] rounded-[6px] w-[100%] object-cover object-center" src={food.foodImage} alt="" />
                                <h2 className=" absolute inset-0 rounded-[6px] flex items-start justify-end p-6 bg-black bg-opacity-40"><span className="token rounded-sm bg-orange-400 text-[#1E3A8A] font-bold px-4 py-2">Available : {food.foodQuantity}</span></h2>
                            </div>
                            <div className="space-y-4 flex-1">
                                <h2 className="text-[#1E3A8A] font-bold text-2xl">{food.foodName}</h2>
                                <p className="text-[#1E3A8A]"><span className="text-[18px]">Expired Date : </span>{food.expiredDate}</p>
                                <p className="text-[#1E3A8A] flex items-center gap-1"><span className="text-[18px] flex gap-1 items-center"> Pickup <GoLocation /> : </span>{food.pickupLocation}</p>
                                <hr />
                                <p className="text-black italic text-[14px]">
                                    {food.additionalNotes.slice(0, 100)}...
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
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AvailableFood;
