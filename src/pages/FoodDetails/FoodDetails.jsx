import { BiCalendar } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md"; // Added MdLocationOn icon
import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
    const food = useLoaderData();
    return (
        <div className="py-16">
            <div className="w-11/12 md:w-[70%] mx-auto border border-gray-300 rounded-md">
                <div className="p-4 border-b border-gray-300">
                    <h2 className="text-lg font-bold mb-2">Donor Name : {food.donarName}</h2>
                    <div className="flex items-center text-gray-600 mb-2">
                        <MdLocationOn className="mr-2" />
                        <span>Pickup Location : {food.pickupLocation}</span>
                    </div>
                </div>
                <div className="p-6 flex flex-col md:flex-row gap-6 items-start">
                    <img className="md:w-1/2 max-h-[350px] object-cover object-center rounded-md" src={food.foodImage} alt="" />
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-xl font-bold mb-2">{food.foodName}</h2>
                        <div className="flex items-center text-gray-600 mb-2">
                            <BiCalendar className="mr-2" />
                            <span>Expired : {food.expiredDate}</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-2">
                            <span>Available Quantity : {food.foodQuantity}</span>
                        </div>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-secondary">Request</button>
                    </div>
                </div>
            </div>

            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default FoodDetails;
