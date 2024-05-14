import { FaArrowRight } from "react-icons/fa";

const BannerMessage = () => {


    return (
        <div className="space-y-4 text-black text-start">
            <div className="text-start flex flex-wrap items-center gap-3 text-2xl lg:text-5xl md:text-3xl  text-white font-bold">
                Welcome to
                <h1 to={'/'} className="flex items-center text-green-500 gap-1">Food<span className="text-blue-300">Unity</span></h1>

            </div>
            <p className="animate__animated animate__backInRight text-[#CCCC] mt-4 max-w-[750px]">
                Join FoodUnity in sharing goodness. From donating surplus food to helping those in need, let's make a difference together. Start your journey of giving today and help us feed communities. Together, we can ensure everyone has a meal on their plate.
            </p>
            <a data-aos-delay='400' className="animate__animated animate__bounce animate__delay-1s btn font-bold btn-accent btn-outline">
                Find Your Food
                <FaArrowRight />
            </a>
        </div>
    );
};

export default BannerMessage;
