"use client";
import React from "react";
import { useTheme } from "./Context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 left-4 z-50 p-3 rounded-full bg-light-card dark:bg-zinc-800 border border-light-border dark:border-zinc-700 hover:bg-light-muted dark:hover:bg-zinc-700 transition-all duration-200 hover:scale-105 shadow-lg"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FiMoon className="w-5 h-5 text-light-text" />
      ) : (
        <FiSun className="w-5 h-5 text-mainWhite" />
      )}
    </button>
  );
};

export default ThemeToggle;
