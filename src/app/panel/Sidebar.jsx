"use client";
import { UserContext } from "@/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import { AiFillFolderAdd, AiFillHome, AiFillSetting } from "react-icons/ai";
const Sidebar = () => {
    return (
        <div className="w-full md:fixed md:w-[18%] bg-slate-50">
            <nav className="w-full  md:h-screen flex flex-col  items-center gap-5 px-5 py-5">
              <div className="text-center">
                <Link href="/">
                  <img
                    className="w-32 h-32 rounded-full cursor-pointer"
                    src={user?.photoURL}
                    alt=""
                  />
                </Link>
              </div>
              <h3 className="font-semibold text-center">
                Welcome To {user?.displayName}
              </h3>
              <div className="py-10">
                <ul className="flex flex-col gap-5 font-semibold">
                  <li>
                    <Link
                      href="/panel"
                      className="flex gap-2 items-cente"
                    >
                      <AiFillHome className="w-5 h-5"></AiFillHome>Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/myFile"
                      className="flex gap-2 items-center"
                    >
                      <AiFillFolderAdd className="w-5 h-5"></AiFillFolderAdd>My
                      Files
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/userHome"
                      className="flex gap-2 items-cente"
                    >
                      <AiFillSetting className="w-5 h-5"></AiFillSetting>Setting
                    </Link>
                  </li>
                </ul>
              </div>
              <hr />
              <Link href={"/"}>
                {" "}
                <button className="py-2 px-5 bg-cyan-500 rounded-lg">
                  Back to Home
                </button>
              </Link>
            </nav>
          </div>
    );
};

export default Sidebar;