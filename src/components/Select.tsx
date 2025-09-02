"use client";
import { useState } from "react";

interface Option {
  value: string;
  label: string;
}

const Select = ({ options }: { options: Option[] }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  return (
    <div>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="w-full px-3 py-1 bg-light-card dark:bg-zinc-900 border border-light-border dark:border-zinc-700 rounded-md
                   focus:outline-none focus:border-light-muted dark:focus:border-zinc-500 hover:border-light-muted dark:hover:border-zinc-500 appearance-none cursor-pointer transition duration-100 text-light-text dark:text-mainWhite"
      >
        <option value="Show all"></option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="hover:bg-light-muted dark:hover:bg-zinc-800 text-light-text dark:text-mainWhite"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
