import React from "react";

interface Props {
  className?: string;
}

const LogoutIcon = ({ className }: Props) => {
  return (
    <svg
      className={`w-5 h-5 text-gray-500 transition duration-75 dark:text-red-400 group-hover:text-red-500 dark:group-hover:text-red-400 ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 16"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
      />
    </svg>
  );
};

export default LogoutIcon;
