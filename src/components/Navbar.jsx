"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-[#FFFFFF]">
      <div className="w-full container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 p-5">
        <div>
          <h1 className="text-xl font-semibold">File-Fussion</h1>
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
