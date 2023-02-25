import React from "react";
import Logo from "../assets/logo.png";
import UserProfileOptionsMenu from "./ProfileDropDown";

const Header = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <header className="z-0 w-full px-6 py-2 bg-white shadow-lg h-40 ">
      <nav>
        <ul className="flex items-center justify-between px-2 pt-4 m-0 md:pt-0">
          <li>
            <div className="flex flex-col items-center justify-center">
              <img src={Logo} alt="logo" className="h-28"/>
              <p className="text-xl text-[#00437A]">
                Prison Management System
              </p>
            </div>
          </li>
          <li className="relative right-8">
            <div className="flex flex-row items-center justify-center ">
              <UserProfileOptionsMenu />
              <button
                className="lg:hidden"
                onClick={() => {
                  setSidebarOpen(!sidebarOpen);
                  console.log(sidebarOpen);
                }}
              >
                {sidebarOpen ? (
                    <svg
                        className="w-28 h-28 text-[#00437A]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                ) : (
                    <svg
                        className="w-28 h-28 text-[#00437A]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                )}
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
