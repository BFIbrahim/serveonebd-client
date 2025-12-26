import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleGoogleSignIn = () => {
        console.log("Google Sign In clicked");
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
                            className="input w-full text-base-content border-none"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">{errors.email.message}</span>
                        )}
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: "Password is required" })}
                            className="input w-full text-base-content border-none"
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
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline w-full mt-4 flex items-center justify-center gap-2 text-base-content border-secondary hover:border-primary hover:text-primary"
                    >
                        <FcGoogle size={20} />
                        Sign in with Google
                    </button>
                    <p className="text-center md:text-left text-accent mt-4">
                        Don't have an account?{" "}
                        <span className="text-primary font-semibold cursor-pointer hover:underline">
                            Sign Up
                        </span>
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
