import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const Feedback = () => {
    return (
        <div>
            <div>
                {/* <Swiper navigation={true} loop={true}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Autoplay, Pagination]}
                    className='mySwiper h-screen object-center object-cover'>
                    <SwiperSlide className="relative w-screen mx-auto h-[30vw]">
                        <img className='h-full w-full object-cover object-center' src="https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?q=80&w=1876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="relative w-screen mx-auto h-[30vw]">
                        <img className='rounded-xl h-full w-full object-cover object-center' src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="relative w-screen mx-auto h-[30vw]">
                        <img className='rounded-xl h-full w-full object-cover object-center' src="https://images.unsplash.com/photo-1539136788836-5699e78bfc75?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </SwiperSlide>
                </Swiper> */}
            </div>
        </div>
    );
};

export default Feedback;