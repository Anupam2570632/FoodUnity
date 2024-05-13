import Lottie from 'lottie-react';
import faq from '../../../public/faq.json'
const Faq = () => {
    return (
        <div className="flex gap-6 border max-w-[1500px] border-[#ccc] rounded-md my-10 min-h-[530px] flex-col lg:flex-row items-center justify-between w-11/12 md:w-[85%] mx-auto">
            <div className="lg:w-1/2">
                <Lottie style={{ height: '500px' }} animationData={faq} />
            </div>
            <div className="lg:w-1/2 p-6">
                <div className="collapse collapse-plus  rounded-none border border-blue-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Who can use the Community Food Sharing and Surplus Reduction Platform?                    </div>
                    <div className="collapse-content">
                        <p>The platform is designed for individuals and organizations interested in reducing food waste and sharing surplus food with those in need. This includes donors who have excess food to share, as well as individuals or groups seeking access to food resources.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus  rounded-none border border-blue-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How do I register as a user on the platform?
                    </div>
                    <div className="collapse-content">
                        <p>To register on the platform, simply navigate to the registration page and fill out the required fields, including your name, email, password, and optional photo URL. Once registered, you'll have access to features such as adding food donations and managing your food requests.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus  rounded-none border border-blue-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can I donate food items through the platform?                    </div>
                    <div className="collapse-content">
                        <p>Yes, you can contribute surplus food items by using the "Add Food" feature. Simply provide details about the food item, including its name, quantity, expiry date, and pickup location. Your donation will be visible to other users who may request it.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus  rounded-none border border-blue-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How can I request food items from the platform?                   </div>
                    <div className="collapse-content">
                        <p>If you're in need of food resources, you can browse available food items on the platform and submit a request for those that meet your requirements. Simply click on the "Request" button on the food details page and provide any additional information required.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus  rounded-none border border-blue-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Is my personal information protected on the platform?
                    </div>
                    <div className="collapse-content">
                        <p> Yes, we take the security and privacy of our users seriously. Your personal information, including your name and email address, is kept confidential and used only for platform-related purposes. We utilize secure authentication methods to ensure that only authorized users can access their accounts and interact with the platform's features.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;