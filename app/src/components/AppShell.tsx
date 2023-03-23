import React, { useContext, useEffect } from "react";
import logo from "../assets/logo.png";
import { useMediaQuery } from "react-responsive";
import sidebarLinks from "../fixtures/sidebarLinks";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });
  const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [menuVisible, setMenuVisible] = React.useState(false);
  const navigate = useNavigate();

  const { logout,isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isDesktop) {
      setSidebarOpen(true);
    }else if(isTablet) {
      setSidebarOpen(false);
    }
  }, [isDesktop, isTablet]);

  useEffect(() => {
    if(isLoggedIn){
      navigate("/dashboard")
    }else if(!isLoggedIn){
      navigate("/")
    }
  }, [isLoggedIn])

  return (
    <div>
      {isLoggedIn ? (<><div className="flex flex-row w-full">
        {/*Main Content*/}
        <div className="fixed bottom-0 right-0 flex flex-row w-full h-screen bg-gray-200 lg:w-3/4">
          <div className="w-full h-full px-4 pt-20 pb-10 overflow-y-scroll">
            {children}
          </div>
        </div>
        {/*Sidebar*/}
        {sidebarOpen && (
          <div className="fixed left-0 flex flex-row w-full mt-20 md:w-1/4">
            <div className="w-full h-screen bg-gray-900">
              <ul className="flex flex-col h-auto items-center justify-between">
                {sidebarLinks.map((link, index) => {
                  return (
                    <li
                      key={index + "sidebarLink"}
                      onClick={() => {
                        if (!isDesktop) {
                          setSidebarOpen(false);
                        }
                      }}
                      className="flex flex-row items-center justify-center w-2/3 px-4 py-2 my-5 text-white rounded-sm text-md hover:bg-gray-700"
                    >
                      <NavLink
                        to={link.link}
                        className="flex flex-row items-center justify-start w-full h-full"
                      >
                        <div>{link.icon}</div>
                        <div className="ml-2">{link.title}</div>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="fixed top-0 flex flex-row items-center justify-between w-full py-2 bg-white shadow-sm md:px-8">
        {/*logo with title*/}
        <div className="flex flex-row items-center justify-center ">
          <img className="h-16" src={logo} alt={"logo"} />
          <span className="ml-1 text-sm font-bold">
            Prison Management System
          </span>
        </div>
        <div className="">
          {
            <div className="flex flex-row items-center w-full justify-evenly">
              <div className="">
                <button
                  className="flex flex-row items-center justify-center h-12 px-4 py-2 text-lg font-medium rounded-full border border-[#002002] focus:outline-none"
                  onClick={() => setMenuVisible(!menuVisible)}
                >
                  <img
                    className="rounded-full shadow-sm md:mr-2"
                    src="https://avatars.githubusercontent.com/u/73750430?s=40&v=4"
                    alt="User"
                  />
                  {isTabletOrDesktop && (
                    <span className="px-2 py-1 ml-2">SALIM PRADHAN</span>
                  )}
                </button>
                {menuVisible && (
                  <div className="absolute right-0 z-0 w-48 px-4 py-6 mt-4 text-sm bg-white rounded-lg shadow-2xl lg:right-10 md:right-32">
                    <a
                      className="block px-4 py-2 font-medium text-gray-700 lg:text-lg hover:bg-gray-100"
                      href="#"
                      onClick={() => setMenuVisible(false)}
                    >
                      My Account
                    </a>
                    <a
                      className="block px-4 py-2 font-medium text-gray-700 lg:text-lg hover:bg-gray-100"
                      href="#"
                      onClick={() => setMenuVisible(false)}
                    >
                      Settings
                    </a>
                    <a
                      className="block px-4 py-2 font-medium text-red-500 lg:text-lg hover:bg-gray-100"
                      onClick={() => {
                        setMenuVisible(false)
                        logout()
                      }}
                    >
                      Log Out
                    </a>
                  </div>
                )}
              </div>
              {/* Button to enable sidebar*/}
              {isTablet && (
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className=""
                >
                  {!sidebarOpen ? (
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
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
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              )}
            </div>
          }
        </div>
      </div></>):<div>{children}</div>}
    </div>
  );
};

export default AppShell;
