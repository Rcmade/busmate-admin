import { ChangeEvent, ReactNode } from "react";

interface CommonProps {
  id: string;
  lable: string;
  children: ReactNode;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const LableSelectInput = <T extends {}>({
  id,
  lable,
  children,
  onChange,
  ...rest
}: CommonProps & T) => {
  return (
    <>
      <div>
        <label
          htmlFor={id}
          className="block font-semibold mb-2 text-sm  text-gray-900 dark:text-white"
        >
          {lable}
        </label>
        <select
          id={id}
          className="bg-gray-50 border border-gray-400 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white pr-6 sm:pr-8 outline-none focus:border-blue-700 focus:shadow-md focus:dark:shadow-white dark:shadow-sm text-md "
          required
          onChange={onChange}
          {...rest}
        >
          {children}
        </select>
      </div>
    </>
  );
};

export default LableSelectInput;
