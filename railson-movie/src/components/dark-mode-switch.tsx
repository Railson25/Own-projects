"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { MdDarkMode, MdLightMode } from "react-icons/md";

export function DarkModeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  return (
    <div>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="text-xl text-purple-800 cursor-pointer hover:text-purple-200"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className="text-xl text-purple-800 cursor-pointer hover:text-purple-200"
        />
      )}
    </div>
  );
}
