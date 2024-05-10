import { useForm } from 'react-hook-form';
import { BsGithub } from 'react-icons/bs';
import { CgGoogle } from 'react-icons/cg';

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        console.log("Hello");
    };
    console.log(errors);

    return (
        <div className='w-full bg-[#f3f4f6] py-16'>
            <div className="max-w-[400px] mx-auto bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                            Don&apos;t have an account yet?
                            <a className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="../examples/html/signup.html">
                                Sign up here
                            </a>
                        </p>
                    </div>

                    <div className="mt-5">
                        <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                            <CgGoogle/>
                            Sign in with Google
                        </button>
                        <button type="button" className="w-full mt-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                            <BsGithub/>
                            Sign in with Github
                        </button>

                        <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or</div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                                    <div className="relative">
                                        <input placeholder='Email' type="email" id="email" {...register("email")} className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" required aria-describedby="email-error" />
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                            {/* Error SVG */}
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center">
                                        <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                                        <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium">Forgot password?</a>
                                    </div>
                                    <div className="relative">
                                        <input placeholder='Password' type="password" id="password" {...register("password")} className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" required aria-describedby="password-error" />
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                            {/* Error SVG */}
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                                </div>

                                <div className="flex items-center">
                                    <div className="flex">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                    </div>
                                    <div className="ms-3">
                                        <label htmlFor="remember-me" className="text-sm dark:text-white">Remember me</label>
                                    </div>
                                </div>

                                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
