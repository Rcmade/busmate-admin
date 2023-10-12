import Image from "next/image";
import Link from "next/link";
import React from "react";
import Searchbar from "../Inputs/SearchBar";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <header className="w-full px-2 md:px-20 bg-white border-gray-200 shadow-md dark:shadow-lg shadow-black/5 dark:bg-gray-900">
      <nav className=" mx-auto py-1  gap-2 md:gap-[20%] flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/logo.svg"
            width={60}
            height={60}
            alt="logo"
          />
          <span className="text-xl hidden md:block font-semibold">
            <span className="dark:text-white text-black">Bus</span>
            <span className="dark:text-orange-300 text-sky-500">Mate</span>
          </span>
        </Link>
        {/* search bar */}
        <Searchbar />
        {/* sidebar and menu icon bar */}
        <Sidebar />
      </nav>
    </header>
  );
};

export default Navbar;
