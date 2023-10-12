import { ReactNode } from "react";

interface CommonProps {
  isLoading: boolean;
  children?: ReactNode;
  title: string;
  type?: string;
  className?: string;
  loadingText?: string;
}

// Create the LoadingButton arrow function with a generic type
const LoadingButton = <T extends {}>({
  isLoading,
  loadingText,
  children,
  title,
  type = "submit",
  className = "",
  ...rest
}: CommonProps & T) => {
  return (
    <button
      {...rest}
      type="submit"
      disabled={isLoading}
      className={`w-full text-white bg-blue-700 disabled:bg-blue-800/50 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${className} `}
    >
      {isLoading ? loadingText : title}
      {children}
    </button>
  );
};
export default LoadingButton;
