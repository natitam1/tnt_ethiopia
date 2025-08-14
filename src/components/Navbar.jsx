import React from "react";
import assets from "../assets/assets";

const Navbar = ({ theme, setTheme }) => {
  return (
    <div className="flex items-center justify-between px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      <div className="flex items-center justify-center ">
        <img
          src={theme === "dark" ? assets.logo_dark : assets.logo}
          alt=""
          className="w-8 sm:w-11 "
        />
        <h3 class="text-2xl font-extrabold bg-gradient-to-r from-[#147AFF] to-[#5044E5] bg-clip-text text-transparent">
          TNT Ethiopia
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
