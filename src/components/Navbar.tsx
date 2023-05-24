"use client";
import { useEffect, useState } from "react";
import SunIcon from '@/components/icons/SunIcon';
import MoonIcon from '@/components/icons/MoonIcon';

const initialThemeState = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") as "light" | "dark" ;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" ;
  }
  return "dark";
}

const Navbar = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">(initialThemeState());

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "dark"){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme)
  },[theme]);

  if (!hasMounted) {
    return <>Cargando...</>;
  }

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className='text-white flex items-center mb-10 space-x-2'>
      <h1 className='text-4xl font-semibold flex-grow text-blue-950 dark:text-white'>
        devfinder
      </h1>
      <span className="uppercase text-blue-950 dark:text-white">
        {theme === "light" ? "dark mode" : "light mode"}
      </span>
      <button onClick={() => handleTheme()}>
        {theme === "light" ? (
          <MoonIcon 
          className="fill-blue-950 dark:fill-white"
          height={25}
          />
        ) : (
          <SunIcon 
          className="fill-blue-950 dark:fill-white"
          width={25}
          />
        )}
      </button>
    </header>
  )
}

export default Navbar