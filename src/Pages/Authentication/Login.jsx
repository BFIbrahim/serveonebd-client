import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import GoogleLogin from "./GoogleLogin";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {

    const fillAdminCredential = () => {
        setValue("email", "admin@serveone.com");
        setValue("password", "admin#@33205");
    };

    const fillVolunteerCredential = () => {
        setValue("email", "serveonevolunteer@gmail.com");
        setValue("password", "volunteer#@33205");
    };

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const { signIn } = useAuth()
    const navigate = useNavigate()


    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Welcome Back",
                    text: "Login Successfull",
                    icon: "success"
                });
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg w-full max-w-4xl overflow-hidden">
                <div className="w-full md:w-2/4 p-8">
                    <Link to="/" className="text-secondary text-xl font-bold">SERVEONE<span className='text-primary'>BD</span></Link>
                    <div className="w-24 h-1 bg-primary rounded-full"></div>
                    <h2 className="text-3xl font-bold text-primary mt-3 mb-6 text-center md:text-left">
                        Login
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: "Email is required" })}
                            className="input w-full text-base-content border-none bg-gray-100"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">{errors.email.message}</span>
                        )}
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: "Password is required" })}
                            className="input w-full text-base-content border-none bg-gray-100"
                        />
                        {errors.password && (
                            <span className="text-red-500 text-sm">{errors.password.message}</span>
                        )}
                        <button
                            type="submit"
                            className="btn bg-primary text-base-100 hover:bg-green-600 border-none mt-2"
                        >
                            Login
                        </button>
                    </form>
                    <div className="divider">OR</div>
                    <GoogleLogin></GoogleLogin>

                    <div className="mt-6 flex flex-col">
                        <button
                            type="button"
                            onClick={fillAdminCredential}
                            className="btn btn-outline btn-primary w-full mb-4"
                        >
                            Admin Credential
                        </button>

                        <button
                            type="button"
                            onClick={fillVolunteerCredential}
                            className="btn btn-outline btn-secondary w-full"
                        >
                            Volunteer Credential
                        </button>
                    </div>

                    <p className="text-center md:text-left text-accent mt-4">
                        Don't have an account?{" "}
                        <Link to="register" className="text-primary font-semibold cursor-pointer hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
                <div className="w-full md:w-2/4 p-4 flex justify-center items-center">
                    <img
                        src="https://i.ibb.co.com/7dW90gbZ/auth-Image.png"
                        alt="Login Illustration"

                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
