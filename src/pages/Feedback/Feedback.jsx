import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { BiSolidQuoteAltRight } from 'react-icons/bi';

export default function Feedback() {
    return (
        <div className='py-20 max-w-[1500px] w-11/12 space-y-6 md:w-[85%] mx-auto'>
            <h2 className='text-green-400 font-bold italic text-center text-2xl'>Testimonial</h2>
            <h2 className=' text-3xl md:text-5xl font-bold text-center'>What our Donar say</h2>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='text-center flex items-center justify-center space-y-6 flex-col'>
                        <h2 className='text-4xl md:text-7xl text-green-400 font-bold'><BiSolidQuoteAltRight /></h2>
                        <p className='max-w-[680px] italic text-xl text-black opacity-80 mx-auto text-center'>Your support means the world to us! With your generous contribution, we're able to provide nutritious meals to individuals and families in need. Together, we're making a tangible difference in the fight against hunger, spreading hope and nourishment to our community. Thank you for your compassion and for joining us in our mission to ensure no one goes to bed hungry. Your kindness truly makes a lasting impact!</p>
                        <img className='w-20 h-20 object-cover object-center rounded-full' src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <h2 className='text-xl font-black'>Ema John</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center flex items-center justify-center space-y-6 flex-col'>
                        <h2 className='text-4xl md:text-7xl text-green-400 font-bold'><BiSolidQuoteAltRight /></h2>
                        <p className='max-w-[680px] italic text-xl text-black opacity-80 mx-auto text-center'>In times of uncertainty, your generosity shines bright! Your donation fuels our efforts to alleviate hunger and provide sustenance to those who need it most. With each meal served, we're not just feeding bodies, but also lifting spirits and instilling hope. Thank you for your unwavering support and for being a beacon of compassion in our community. Together, we're making a real difference, one meal at a time!</p>
                        <img className='w-20 h-20 object-cover object-center rounded-full' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <h2 className='text-xl font-black'>John Doe</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center flex items-center justify-center space-y-6 flex-col'>
                        <h2 className='text-4xl md:text-7xl text-green-400 font-bold'><BiSolidQuoteAltRight /></h2>
                        <p className='max-w-[680px] italic text-xl text-black opacity-80 mx-auto text-center'>Every donation, big or small, makes a significant impact! Your contribution allows us to continue our vital work of feeding those facing food insecurity. With your support, we're able to provide nourishing meals and bring comfort to individuals and families in need. Thank you for your kindness and for standing with us in the fight against hunger. Together, we're creating a brighter, more hopeful future for all.</p>
                        <img className='w-20 h-20 object-cover object-center rounded-full' src="https://images.unsplash.com/photo-1583692331501-5339b76cbf1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <h2 className='text-xl font-black'>Wil Jacks</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center flex items-center justify-center space-y-6 flex-col'>
                        <h2 className='text-4xl md:text-7xl text-green-400 font-bold'><BiSolidQuoteAltRight /></h2>
                        <p className='max-w-[680px] italic text-xl text-black opacity-80 mx-auto text-center'>Your generosity is a lifeline for those in need! Your donation enables us to tackle food insecurity head-on, ensuring that no one in our community goes hungry. With each meal provided, we're not just addressing hunger, but also fostering a sense of dignity and belonging. Thank you for your compassionate heart and for making a tangible difference in the lives of others. Your support truly changes lives!</p>
                        <img className='w-20 h-20 object-cover object-center rounded-full' src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <h2 className='text-xl font-black'>Elis Perry</h2>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
