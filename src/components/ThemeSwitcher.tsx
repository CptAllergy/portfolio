"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "@/context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className="fixed right-5 bottom-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/80 shadow-2xl backdrop-blur-sm transition-all hover:scale-[1.15] hover:cursor-pointer active:scale-105 dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeSwitcher;
