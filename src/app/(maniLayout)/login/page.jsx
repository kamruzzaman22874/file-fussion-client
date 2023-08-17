'use client'
import Link from 'next/link';
import Lottie from "lottie-react";
import LoginLotti from "../../../../public/Lottifiles/Signup.json";
import React from 'react';
import { BsGithub, BsGoogle } from 'react-icons/bs';

const Login = () => {
    return (
        <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-5">
          <div className="w-full md:max-w-[60%] text-center lg:text-left">
            <Lottie animationData={LoginLotti} loop={true} />
          </div>
          <div className="w-full md:max-w-[40%] card flex-shrink-0  max-w-sm  bg-base-100 py-10">
            <form className="w-4/5 mx-auto relative">
            <h3 className="text-center text-2xl font-semibold">Login To Fill Fussion</h3>
            <div className='flex gap-5 justify-center py-8'>
                <div className='py-2 px-5 bg-rose-500 rounded-lg'>
                   <h3>Google</h3> 
                </div>
                <div className='py-2 px-5 bg-cyan-500 rounded-lg'>
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
                    type='password'
                    name="password"
                    placeholder="Enter Your Password"
                    required
                  />
              </div>
              <button className="bg-cyan-500 w-full text-white text-sm uppercase rounded-full  px-6 py-4 my-4">
                Login
              </button>
              <div className="text-center  py-2">
                <h2>
                  Do not have an accoutn? Please{" "}
                  <Link className="text-blue-600" href="/signup">
                    Create an account
                  </Link>
                </h2>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;