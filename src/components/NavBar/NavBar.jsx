import { useState } from 'react';
import logo from '../../assets/logoFood1.png';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='w-full bg-[#e6feff] sticky z-10 top-0'>
            <header className="flex  max-w-[1500px] flex-wrap md:py-3 lg:justify-start lg:flex-nowrap z-50 w-11/12 mx-auto xl:w-4/5">
                <nav className="relative w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center mx-auto" aria-label="Global">
                    <div className="lg:col-span-2">
                        <Link className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="../templates/creative-agency/index.html" aria-label="Preline">
                            <img src={logo} className="w-28 lg:w-[60%]" alt="" />
                        </Link>
                    </div>

                    <div className="flex items-center gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-2">
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
                            LogIn
                        </button>
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500">
                            SignUp
                        </button>

                        <div className="lg:hidden">
                            <button type="button" onClick={toggleDropdown} className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                                <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                                <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>
                    </div>

                    <div id="navbar-collapse-with-animation" className={`hs-collapse overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-8 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
                            <div>
                                <NavLink to={'/'} className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" aria-current="page">Home</NavLink>
                            </div>
                            <div>
                                <NavLink to={'/available'} className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" >Available Foods</NavLink>
                            </div>
                            <div>
                                <NavLink to={'/addFood'} className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" >Add Food</NavLink>
                            </div>
                            <div>
                                <NavLink to={'/manageFood'} className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" >Manage My Foods</NavLink>
                            </div>
                            <div>
                                <NavLink to={'/requestedFood'} className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" >My Food Request</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;
