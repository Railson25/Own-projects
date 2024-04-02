"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const SeacrhBox = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between px-5 max-w-6xl mx-auto"
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 placeholder-purple-800 dark:placeholder-purple-100 rounded-md outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        disabled={search === ""}
        className="text-purple-800 dark:text-purple-100 disabled:text-purple-400"
      >
        Search
      </button>
    </form>
  );
};
