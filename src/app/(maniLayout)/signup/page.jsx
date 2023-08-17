"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import LoginLotti from "../../../../public/Lottifiles/Signup.json";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const SignUp = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-5">
        <div className="w-full md:max-w-[60%] text-center lg:text-left">
          <Lottie animationData={LoginLotti} loop={true} />
        </div>
        <div className="w-full md:max-w-[40%] card flex-shrink-0  max-w-sm  bg-base-100 py-10">
          <form className="w-4/5 mx-auto relative">
            <h3 className="text-center text-2xl font-semibold">
              Sign Up To Fill Fussion
            </h3>
            <div className="flex gap-5 justify-center py-8">
              <div className="py-2 px-5 bg-rose-500 rounded-lg">
                <h3>Google</h3>
              </div>
              <div className="py-2 px-5 bg-cyan-500 rounded-lg">
                <h3>Facebook</h3>
              </div>
            </div>
            <div className="text-center flex justify-center items-center gap-3">
              <div className="w-full h-0.5 bg-slate-600"></div>
              <h2 className="font-semibold">or</h2>
              <div className="w-full h-0.5  bg-slate-600"></div>
            </div>
            <div className="form-control">
              <label className="label">
                <span>Name</span>
              </label>
              <div className="">
                <input
                  className="w-full py-2  px-3  border rounded-full"
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span>Email</span>
              </label>
              <div className="">
                <input
                  className="w-full py-2  px-3  border rounded-full"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span>Password</span>
              </label>
              <input
                className="w-full py-2  px-3  border rounded-full"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <div className="form-control">
              <div className="flex items-center justify-center w-full pt-5">
                <label className="flex flex-col items-center justify-center w-full h-16 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Upload Your Photo</span>
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    name="image"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <button className="bg-cyan-500 w-full text-white text-sm uppercase rounded-full  px-6 py-4 my-4">
              Create Account
            </button>
            <div className="text-center  py-2">
              <h2>
                Already have an account?{" "}
                <Link className="text-blue-600" href="/login">
                  Login
                </Link>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
