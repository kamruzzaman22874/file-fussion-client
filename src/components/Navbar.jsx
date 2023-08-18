"use client";

import { UserContext } from "@/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(UserContext);

  const handleLogOut = () => {
    logOut().then((result) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Logout has been success",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  return (
    <nav className="w-full h-20 bg-[#FFFFFF]">
      <div className="w-full container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 p-5">
        <div>
          <Link href={"/"}>
            <h1 className="text-2xl font-extrabold text-center lg:text-2xl 2xl:text-2xl">
              <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
                File
              </span>
              <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                Fusion
              </span>
            </h1>
          </Link>
        </div>
        <div>
          <ul className="flex justify-between gap-8 ">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={""}>About</Link>
            </li>
            <li>
              <Link href={"/pricing"}>Pricing</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar mr-20"
              >
                <div className="w-16 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 space-y-3 ml-3 border border-black py-5 shadow menu menu-sm dropdown-content z-30 bg-white rounded-box w-52"
              >
                <label tabIndex={0} className="avatar ">
                  <div className="w-14 mx-auto rounded-full">
                    <img className="" src={user?.photoURL} />
                  </div>
                </label>
                <h2 className="text-center font-semibold">
                  {user?.displayName}
                </h2>
                <div className="flex justify-center">
                  <Link href={'/panel'}>
                    <button className="py-2 px-5 bg-cyan-500 rounded-xl">
                      View Profile
                    </button>
                  </Link>
                </div>
                <li onClick={handleLogOut}>
                  <a className="font-semibold py-2 px-5">Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className="flex gap-3">
            <Link href={"/login"}>
              <button className="py-2 px-5 border border-black rounded-xl ">
                Login
              </button>
            </Link>
            <Link href={"/signup"}>
              <button className="py-2 px-5 border bg-cyan-500 rounded-xl ">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
