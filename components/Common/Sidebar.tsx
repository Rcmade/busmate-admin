"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import DashboardIcon from "../icons/DashboardIcon";
import VersionIcon from "../icons/VersionIcon";
import UsersIcon from "../icons/UsersIcon";
import ContributorIcon from "../icons/ContributorIcon";
import Create from "../icons/Create";
import LogoutIcon from "../icons/LogoutIcon";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import { useSession } from "next-auth/react";
import { getUser, userLogoutAction } from "@/lib/actions/authActions";
import { toast } from "react-toastify";

const sidebarLinks = [
  { Icon: DashboardIcon, title: "DashBoard", link: "/" },
  {
    title: "Create User",
    Icon: Create,
    link: "/create-user",
  },
  {
    title: "Availability",
    Icon: DashboardIcon,
    link: "/app-available",
  },
  {
    title: "Version",
    Icon: VersionIcon,
    link: "/version-update",
  },
  {
    title: "Users",
    Icon: UsersIcon,
    link: "/all-users",
  },
  {
    title: "Contributor",
    Icon: ContributorIcon,
    link: "c/urrent-contributor",
  },
];

const Sidebar = () => {
  const [isSidebarShow, setIsSidebarShow] = useState(false);

  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSidebar = () => {
    setIsSidebarShow(!isSidebarShow);
  };

  useEffect(() => {
    const getUserData = async () => {
      const get = await getUser();
      if (get) {
        setUserInfo(get);
      } else {
        setUserInfo({});
      }
    };

    getUserData();
    return () => {};
  }, []);

  const deviceTheme = () => {
    // Check if the user has a theme preference in localStorage
    const storedTheme = localStorage.getItem("theme");
    // Check if the browser supports the 'prefers-color-scheme' media query
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    // Set the initial theme based on the user's preference or device preference
    const initialTheme = storedTheme || (prefersDarkMode ? "dark" : "light");
    // Apply the initial theme to the HTML tag
    document.documentElement.classList.add(initialTheme);
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    const currentTheme = html.classList.contains("dark") ? "dark" : "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    // Toggle the theme class on the HTML tag
    html.classList.remove(currentTheme);
    html.classList.add(newTheme);

    // Store the theme preference in localStorage
    localStorage.setItem("theme", newTheme);
    handleSidebar();
  };
  useEffect(() => {
    deviceTheme();
  }, []);

  const logout = async () => {
    try {
      setIsLoading(true);
      const data = await userLogoutAction();
      if (data.message) {
        toast.success(data.message);
        handleSidebar();
        setUserInfo({});
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setIsLoading(true);
    }
  };

  return (
    <>
      <button
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={handleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <Image
          className="object-contain cursor-pointer dark:invert "
          src="/assets/icons/three-line.svg"
          width={22}
          height={22}
          alt="menu"
        />
      </button>
      <aside
        id="default-sidebar"
        className={` ${
          isSidebarShow ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 z-40 w-64 h-screen transition-transform  `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {Object.keys(userInfo).length > 0 && (
              <>
                {sidebarLinks.map(({ link, title, Icon }) => (
                  <li key={link}>
                    <Link
                      href={link}
                      onClick={handleSidebar}
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <Icon />
                      <span className="ml-3">{title}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={logout}
                    className="flex items-center p-2 text-gray-900 w-full rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-red-500"
                  >
                    <LogoutIcon />
                    <span className="ml-3">Logout</span>
                  </button>
                </li>
              </>
            )}

            <li>
              <button
                onClick={toggleTheme}
                disabled={isLoading}
                className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {/* Dark theme */}
                <MoonIcon className="dark:block hidden" />
                <span className="ml-3 dark:block hidden">Dark</span>
                {/* Light theme */}
                <SunIcon className="dark:hidden block" />
                <span className="ml-3 dark:hidden block">Light</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <div
        onClick={handleSidebar}
        className={` ${
          isSidebarShow ? "block" : "hidden"
        } w-[calc(100vw-16rem)] cursor-pointer z-30 absolute top-0 bottom-0 right-0 bg-black/5`}
      ></div>
    </>
  );
};

export default Sidebar;
