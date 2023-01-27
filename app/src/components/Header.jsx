import { Menu } from "./Menu";
import React from "react";
import logo from "../assets/logo2.png";
import MediaQuery from "react-responsive";

function SidebarToggle({ setSidebar, sidebar }) {
  return (
    <div
      className="flex items-center mr-4"
      onClick={() => setSidebar(!sidebar)}
    >
      {!sidebar ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setSidebar(!sidebar)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </div>
  );
}

export const Header = ({
  setSidebar,
  sidebar,
  style,
  setMenuVisible,
  menuVisible,
}) => {
  const path = window.location.pathname;
  //replace '/' with ' >> ' and remove the first ' >> '
  const pathName = path.replace(/\//g, " >> ").slice(3);
  return (
    <div className="fixed top-0 flex flex-col w-full shadow-md">
      <div className="w-full h-16 bg-white flex items-center justify-between px-8">
        {/** sidebar toggle */}
        <div className="flex flew-row px-2 items-center justify-between w-64">
          <MediaQuery maxWidth={768}>
            <SidebarToggle setSidebar={setSidebar} sidebar={sidebar} />
          </MediaQuery>
          <MediaQuery minWidth={375}>
            <div className="flex justify-between items-center ml-2">
              <img src={logo} alt="logo" className="h-8 w-8" />
              <span className=" w-40 text-xs font-bold text-gray-700 ml-2">
                {" "}
                Prison Management System{" "}
              </span>
            </div>
          </MediaQuery>
        </div>
        <Menu
          style={style}
          setMenuVisible={setMenuVisible}
          menuVisible={menuVisible}
        />
      </div>
      <div className="bg-blue-900 w-full text-center text-sm text-white px-4">
        {`${pathName}`}
      </div>
    </div>
  );
};
