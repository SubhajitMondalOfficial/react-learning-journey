import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { login as authLogin } from "../../features/authSlice";
import authService from "../../appwrite/auth";
import { Button, Input, Logo } from "../index";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");

    try {
      const session = await authService.login(data);

      if (session) {
        const userData = await authService.getCurrentUser();

        if (userData) {
          dispatch(authLogin(userData));
        }

        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] w-full items-center justify-center px-4 py-10">
      <div className="mx-auto w-full max-w-lg rounded-2xl border border-black/10 bg-gray-100 p-8 shadow-lg sm:p-10">
        <div className="mb-4 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight text-gray-900">
          Sign in to your account
        </h2>

        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-blue-600 transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {error && (
          <p className="mt-6 rounded-lg bg-red-100 px-4 py-3 text-center text-sm text-red-600">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                      value
                    ) || "Email address must be a valid address",
                },
              })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be at least 4 characters long",
                },
                maxLength: {
                  value: 20,
                  message: "Password must be at most 20 characters long",
                },
              })}
            />

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;