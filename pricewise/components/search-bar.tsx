"use client";

import { AlertCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isValidAmazonProductURL = (url: string) => {
    try {
      const parseURL = new URL(url);
      const hostname = parseURL.hostname;

      if (
        hostname.includes("amazon.com") ||
        hostname.includes("amazon.") ||
        hostname.endsWith("amazon")
      ) {
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
    return false;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidLink = isValidAmazonProductURL(searchPrompt);

    if (!isValidLink) {
      return toast.error("Please provide a valid Amazon link", {
        icon: <AlertCircle />,
        position: "bottom-right",
        style: {
          backgroundColor: "#e43030",
          color: "white",
        },
      });
    }
    try {
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="flex-1 min-w-[200px] w-full p-3 border border-gray-300 rounded-lg shadow-xl text-base text-secondary focus:outline-none"
      />
      <button
        type="submit"
        disabled={searchPrompt === ""}
        className="bg-gray-900 border border-gray-900 rounded-lg shadow-xl px-5 py-3 text-white text-base font-semibold hover:opacity-90 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40"
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};
