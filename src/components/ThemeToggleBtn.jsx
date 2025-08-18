import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-schema:dark)"
    ).matches;
    setTheme(theme || (prefersDarkMode ? "dark" : "light"));
  });
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <button className=" cursor-pointer">
        {theme === "dark" ? (
          <img
            onClick={() => setTheme("light")}
            src={assets.sun_icon}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            alt=""
          />
        ) : (
          <img
            src={assets.moon_icon}
            onClick={() => setTheme("dark")}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            alt=""
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggleBtn;
