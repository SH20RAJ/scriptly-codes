"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if(savedTheme){
      if(savedTheme === 'dark'){
        document.documentElement.classList.add('dark');
        setIsDark(true);
      }else{
        document.documentElement.classList.remove('dark');
        setIsDark(false);
      }
    }else{
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      }
    }
  }, []);

  const toggleTheme = () => {
    if(isDark){
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    }else{
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center mr-4">
      <button
        className="w-8 h-4 mx-1 rounded-full relative cursor-pointer bg-blue-500 dark:bg-blue-900"
        onClick={toggleTheme}
      >
        <div
          className={`w-4 h-4 top-0 bg-neutral-100  border border-neutral-400 rounded-full absolute transition-all duration-500
         dark:left-0 right-0`}
        />
      </button>
      <div className="text-yellow-500">{isDark ? <FaMoon /> : <FaSun />}</div>
    </div>
  );
}
