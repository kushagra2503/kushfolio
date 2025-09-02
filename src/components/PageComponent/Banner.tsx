"use client";

import React from "react";
import LocalTIme from "@/utils/LocalTime";
import StarButton from "../StarButton";
import ThemeToggle from "../ThemeToggle";

const Banner: React.FC = () => {
  return (
    <>
      <section className="md:fixed md:top-4 flex w-full items-center md:justify-between justify-end md:px-8 px-4 select-none">
        <a
          href="https://www.google.com/search?q=time"
          target="_blank"
          className="  flex gap-1 md:gap-2 items-center text-gray-600 dark:text-white/65 hover:text-gray-900 dark:hover:text-white/90 transition-all duration-100 font-medium"
        >
            <span className="hidden md:block">Local Time</span>
            <span className="md:text-sm text-base">
                <LocalTIme />
            </span>
        </a>
        <div className="flex gap-2.5 items-center">
            <ThemeToggle />
            <StarButton />
        </div>
      </section>
    </>
  );
};

export default Banner;