import React from "react";

interface Props {
  className?: string;
}

const MoonIcon = ({ className }: Props) => {
  return (
    <svg
      className={`w-5 h-5 text-gray-500 transition duration-75 dark:text-white ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 18 20"
    >
      <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z" />
    </svg>
  );
};

export default MoonIcon;
