"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // // const isValidLink = isValidAmazonProductURL(searchPrompt);

    // // if (!isValidLink) return alert("Please provide a valid Amazon link");

    // try {
    //   setIsLoading(true);

    //   // Scrape the product page
    //   const product = await scrapeAndStoreProduct(searchPrompt);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <form className="flex-1">
      <div className="relative ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Image
            alt="search"
            className="dark:invert"
            src="/assets/icons/search.svg"
            width={20}
            height={20}
          />
        </div>
        <input
          type="search"
          className="block w-full outline-none p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search users"
          onChange={(e) => setSearchPrompt(e.target.value)}
          required
        />
      </div>
    </form>
  );
};

export default Searchbar;
