import { FaArrowRight } from "react-icons/fa";

const BannerMessage = () => {


    return (
        <div className="space-y-4 text-black text-start">
            <div className="text-start flex flex-wrap items-center gap-3 text-2xl lg:text-5xl md:text-3xl  text-white font-bold">
                Welcome to
                <h1 to={'/'} className="flex items-center text-green-500 gap-1">Food<span className="text-blue-300">Unity</span></h1>

            </div>
            <p className="animate__animated animate__backInRight text-[#CCCC] mt-4 max-w-[750px]">
                Start your culinary venture with FoodUnity. From sourcing the finest ingredients to crafting delectable dishes, elevate your food business with us. Begin your journey to culinary success today!            </p>
            <a data-aos-delay='400' className="animate__animated animate__bounce animate__delay-1s btn font-bold btn-accent btn-outline">
                Find Your Flavor
                <FaArrowRight />
            </a>
        </div>
    );
};

export default BannerMessage;
