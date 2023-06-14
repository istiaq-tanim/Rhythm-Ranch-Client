import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'
import SocialLogin from "../Shared/SocialLogin";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { useState } from "react";



const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useAuth();
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [open, setOpen] = useState(true)
    const handleClick = () =>
    {
        setOpen(!open)
    }

    const onSubmit = data => {

        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User logged in Successfully',
                    showConfirmButton: false,
                    timer: 1000
                })
                navigate(from, { replace: true });

            })
            .catch(error => console.log(error.message))
    };
    return (
        <div>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                        Sign in
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <div className="mb-2">
                            <label

                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"

                                {...register("email", { required: true })}
                            />

                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>
                        <div className="mb-2 relative">
                            <label

                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type={open ? "password" : "text" }
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                {...register("password", { required: true })}

                            />{errors.password && <span className="text-red-500">Password is required</span>}
                            <p className="absolute top-10 right-5 text-lg"><button onClick={handleClick}>{open ? <HiEye></HiEye> : <HiEyeSlash></HiEyeSlash>}</button></p>
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Login
                            </button>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Do not have an account?{" "}
                        <Link
                            to="/signUp"
                            className="font-medium text-purple-600 hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;