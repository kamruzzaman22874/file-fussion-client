"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-[#FFFFFF]">
      <div className="w-full container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 p-5">
        <div>
          <h1 class="text-2xl font-extrabold text-center lg:text-2xl 2xl:text-2xl">
            <span class="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
              File
            </span>
            <span class="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
              Fusion
            </span>
          </h1>
        </div>
        <div>
          <ul className="flex justify-between gap-8 font-semibold">
            <li>
              <Link href={""}>Storage</Link>
            </li>
            <li>
              <Link href={""}>Plans</Link>
            </li>
            <li>
              <Link href={""}>MyFiles</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="py-2 px-3 bg-black text-white rounded-2xl font-semibold">
            My Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
