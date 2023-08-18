"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import LoginLotti from "../../../../public/Lottifiles/Signup.json";
import React, { useContext } from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { UserContext } from "@/context/AuthContext";
import Swal from "sweetalert2";
import { analyticsId } from "../../../../next.config";

const SignUp = () => {

  const { userSignUp, updateUserProfile } = useContext(UserContext)
  

  // Signup with email and password 

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    if (password !== confirm) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Wrong password',
        showConfirmButton: false,
        timer: 1500
      })

    }
    else {

      userSignUp(email, password)
        .then(result => {
          const loggedUser = result.user;
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Use create has been success',
            showConfirmButton: false,
            timer: 1500
          })
          updateUserProfile(name, photo)
            .then(result => { })
            .catch(err => console.error(err));

        })
        .catch(err => console.log(err.message))
      form.reset();
    }
  }







  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-5">
        <div className="w-full md:max-w-[60%] text-center lg:text-left">
          <Lottie animationData={LoginLotti} loop={true} />
        </div>
        <div className="w-full md:max-w-[40%] card flex-shrink-0  max-w-sm  bg-base-100 py-10">
          <form onSubmit={handleSignUp} className="w-4/5 mx-auto relative">
            <h3 className="text-center text-2xl font-semibold text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
              Sign Up To File Fusion
            </h3>
            <div className="flex gap-5 justify-center py-8">
              <div className="py-2 px-5 bg-rose-500 rounded-lg">
                <button className="flex items-center gap-2 text-white"><BsGoogle className="mt-1" />Google</button>
              </div>
              <div className="py-2 px-5 bg-cyan-500 rounded-lg">
                <button className="flex items-center gap-2 text-white"> <BsFacebook /> <h3>Facebook</h3> </button>
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
              <label className="label">
                <span>Confirm Password</span>
              </label>
              <input
                className="w-full py-2  px-3  border rounded-full"
                type="password"
                name="confirm"
                placeholder="Enter Your Confirm Password"
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
                    name="photo"
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
