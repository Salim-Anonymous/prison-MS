import React from "react";
import Greetings from "../../components/Greetings";
import { links } from "../../components/Sidebar";
import { NavLink } from "react-router-dom";
export default function Dashboard() {
  return (
    <div className="flex flex-col justify-between z-2">
      <Greetings />
      <div className="px-10 py-5 rounded-lg shadow-md">
        <img className="w-full" src="images/police.jpg" />
      </div>
      {/* grid the following links */}
      <div className="grid grid-cols-3 gap-x-20 mt-8 2xl:grid-cols-4">
        {links.map((link, index) => {
          return (
            <div
              onClick={() => {
                setPath(link.path.split("/").filter((item) => item !== "/"));
                setSidebarOpen(false);
              }}
              className="flex flex-row items-center p-5 m-2 text-3xl md:p-2 md:m-1 md:text-lg lg:text-sm text-white"
            >
              <NavLink
                to={link.path}
                className="flex flex-row items-center w-full h-full px-6 py-2 rounded-xl hover:bg-gray-700 hover:cursor-pointer bg-[#00437A]"
              >
                <span className="w-10">{link.icon}</span>
                {link.name}
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
