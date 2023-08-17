"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-[#FFFFFF]">
      <div className="w-full container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 p-5">
        <div>
          <Link href={'/'}>
          <h1 class="text-2xl font-extrabold text-center lg:text-2xl 2xl:text-2xl">
            <span class="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
              File
            </span>
            <span class="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
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
              <Link href={""}>Pricing</Link>
            </li>
            <li>
              <Link href={""}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-3">
          <Link href={'/login'}>
          <button className="py-2 px-5 border border-black rounded-xl ">
            Login
          </button>
          </Link>
         <Link href={'/signup'}>
         <button className="py-2 px-5 border bg-cyan-500 rounded-xl ">
            Sign Up
          </button>
         </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
