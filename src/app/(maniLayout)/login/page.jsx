'use client'
import Link from 'next/link';
import Lottie from "lottie-react";
import LoginLotti from "../../../../public/Lottifiles/Signup.json";
import React, { useContext, useState } from 'react';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { UserContext } from '@/context/AuthContext';
// import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  FaLock,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";

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
                <span className="text-xl">Email</span>
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
            <div className="form-control my-2">
              <label className="label">
                <span className="text-xl">Password</span>
              </label>
              <div className='flex items-center relative'>
                {/* <FaLock className="ml-2"></FaLock> */}
                <input
                  className="w-full py-2  px-3  border rounded-full"
                  type={!show ? "password" : "text"}
                  name="password"
                  placeholder="Enter Your Password"
                  required
                />
                <div onClick={hnadleShow} className="right-5 absolute">
                  {!show ? (
                    <FaRegEye className="text-xl"></FaRegEye>
                  ) : (
                    <FaRegEyeSlash className="text-xl"></FaRegEyeSlash>
                  )}
                </div>
              </div>
            </div>
            {error ? <p className="text-red-600">incorrent password</p> : ""}
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