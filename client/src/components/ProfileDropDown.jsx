import React, { useState } from "react";

const UserProfileOptionsMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="">
      <button
        className="flex flex-row items-center justify-center px-8 py-2 text-3xl font-medium text-[#00437A] rounded-lg xl:border xl:border-[#00437A] xl:p-1 lg:px-1 lg:py-0 md:px-2 md:py-1 hover:outline outline-1 outline-blue-800 hover:bg-blue-300 hover:cursor-pointer"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <img
          className="w-32 h-32 rounded-full md:h-16 md:w-16 lg:h-12 lg:w-12 xl:w-8 xl:h-8"
          src="https://avatars.githubusercontent.com/u/73750430?s=40&v=4"          alt="Your avatar"
        />
        <div className="invisible w-0 h-0 lg:visible lg:w-64 lg:h-16 xl:h-8">
          <div className="flex flex-row items-center justify-center px-2 py-5 xl:py-2">
            <p className="w-0 h-0 ml-2 lg:w-full lg:h-10 lg:text-lg xl:text-sm">
              Adminstrator Admin
            </p>
            <p className="w-0 h-0 ml-2 lg:w-4 lg:h-10 lg:text-lg xl:text-sm">
              &#9662;
            </p>
          </div>
        </div>
      </button>
      {menuVisible && (
        <div className="absolute right-0 z-0 w-64 px-4 py-6 mt-4 bg-white rounded-lg shadow-2xl">
          <a
            className="block px-4 py-2 text-2xl font-medium text-gray-700 lg:text-lg hover:bg-gray-100"
            href="#"
          >
            My Account
          </a>
          <a
            className="block px-4 py-2 text-2xl font-medium text-gray-700 lg:text-lg hover:bg-gray-100"
            href="#"
          >
            Settings
          </a>
          <a
            className="block px-4 py-2 text-2xl font-medium text-gray-700 lg:text-lg hover:bg-gray-100"
            href="#"
          >
            Log Out
          </a>
        </div>
      )}
    </div>
  );
};

export default UserProfileOptionsMenu;
