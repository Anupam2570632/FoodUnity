import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
    const navigate = useNavigate()
    const { createAccount, logOut, updateUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = data => {
        createAccount(data.email, data.password)
            .then(result => {
                console.log(result.user)
                toast.success('Account created successfully!')
                updateUser(data)
                    .then(result => {
                        console.log(result)
                        logOut()
                        navigate('/login')
                    })
                    .catch(error => {
                        console.error(error)
                    })
            })
            .catch(error => {
                console.error(error)
            })
    };

    const password = watch("password");

    return (
        <div className="w-full py-16 bg-[#f3f4f6]">
            <div className="max-w-[450px] mx-auto bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                            Already have an account?
                            <Link className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" to={'/login'}>
                                Log in here
                            </Link>
                        </p>
                    </div>

                    <div className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm mb-2 dark:text-white">Your Name</label>
                                    <input {...register("name", { required: true })} placeholder="Enter your name" type="text" id="name" name="name" className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                    {errors.name && <p className="text-xs text-red-600 mt-2">Name is required</p>}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                                    <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Enter your email" type="email" id="email" name="email" className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                    {errors.email && <p className="text-xs text-red-600 mt-2">Please enter a valid email address</p>}
                                </div>

                                <div>
                                    <label htmlFor="photo" className="block text-sm mb-2 dark:text-white">Your photo URL</label>
                                    <input {...register("photo", { required: true })} placeholder="Enter your photo URL" type="text" id="photo" name="photo" className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                    {errors.photo && <p className="text-xs text-red-600 mt-2">Photo URl is required</p>}
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                                    <input {...register("password", { required: true, minLength: 6 })} type="password" placeholder="Enter your password" id="password" name="password" className="py-3 px-4 border block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                    {errors.password && <p className="text-xs text-red-600 mt-2">Password must be at least 6 characters long</p>}
                                </div>

                                <div>
                                    <label htmlFor="confirm-password" className="block text-sm mb-2 dark:text-white">Confirm Password</label>
                                    <input type="password" {...register("confirmPassword", { required: true, validate: value => value === password })} id="confirm-password" placeholder="Confirm your password" name="confirmPassword" className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                    {errors.confirmPassword && <p className="text-xs text-red-600 mt-2">Passwords do not match</p>}
                                </div>

                                <div className="flex items-center">
                                    <input name="acceptTerms" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                    <label htmlFor="remember-me" className="text-sm dark:text-white">I accept the <a className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="#">Terms and Conditions</a></label>
                                </div>

                                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
