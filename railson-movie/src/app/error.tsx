"use client";

import { useEffect } from "react";

export default function Error(error: any) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <button className="text-purple-800 dark:text-purple-100 hover:text-purple-100  dark:hover:text-purple-800">
        Try again
      </button>
    </div>
  );
}
