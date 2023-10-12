"use client";
import React, { MouseEventHandler, useEffect } from "react";
import LoadingButton from "./LoadingButton";
import GoogleIcon from "../icons/GoogleIcon";
import { signIn, useSession } from "next-auth/react";
import { loginRoute } from "@/app/api/auth/api";

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement> | any; // Specify the correct type here
}
const GoogleButton = ({ onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 w-full justify-center "
    >
      <GoogleIcon /> <span className="ml-4"> Login with google</span>
    </button>
  );
};

export default GoogleButton;
