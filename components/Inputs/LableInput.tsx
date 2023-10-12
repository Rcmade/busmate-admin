interface CommontProps {
  lable: string;
  name: string;
  placeholder: string;
  type: "text" | "email" | "password" | "submit";
  Icon?: any;
}
const LableInput = <T extends {}>({
  lable,
  name,
  placeholder,
  type = "text",
  Icon,
  ...rest
}: CommontProps & T) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
      >
        {lable}
      </label>
      <div className="relative  flex items-center">
        <input
          className=" text-md bg-gray-50 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-white dark:placeholder-gray-400 rounded-lg block w-full p-2.5 pr-6 sm:pr-8 outline-none focus:shadow-md focus:border-blue-500 focus:dark:border-white focus:dark:shadow-white/50  dark:shadow-sm transition-all"
          {...rest}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
        />
        {Icon && (
          <span className="absolute right-2 sm:right-4 text-lg dark:text-white text-gray-800 pointer-events-none">
            <Icon />
          </span>
        )}
      </div>
    </div>
  );
};

export default LableInput;
