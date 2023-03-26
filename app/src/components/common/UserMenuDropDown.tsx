import { useMenuOpen } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { BreakPointsContext } from "../../context/breakPointsContext";
import { SidebarContext } from "../../context/sidebarContext";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";

export const UserDropDown = () => {
    const { logout } = useContext(AuthContext);
    const { menu, toggleMenu, closeMenu } = useMenuOpen();
    const { isMobileOrTablet,isTablet, isDesktopOrTablet, isMobile } = useContext(BreakPointsContext);
    const navigate = useNavigate();
    const { sidebar, toggleSidebar } = useContext(SidebarContext);
    
    return <div className="">
    {
      <div className="flex flex-row items-center w-full justify-evenly">
        <div className="">
          <button
            className="flex flex-row items-center justify-center md:h-12 md:px-4 md:py-2 text-lg font-medium rounded-full border border-[#002002] focus:outline-none"
            onClick={() => {toggleMenu()}}
          >
            <img
              className="rounded-full shadow-sm md:mr-2"
              src="https://avatars.githubusercontent.com/u/73750430?s=40&v=4"
              alt="User"
            />
            {isDesktopOrTablet && (
              <span className="px-2 py-1 ml-2">SALIM PRADHAN</span>
            )}
          </button>
          {menu && (
            <div className="absolute right-0 z-0 w-48 px-4 py-6 mt-4 text-sm bg-white rounded-lg shadow-2xl lg:right-10 md:right-32">
              <a
                className="block px-4 py-2 font-medium text-gray-700 lg:text-lg hover:bg-gray-100"
                href="#"
                onClick={closeMenu}
              >
                My Account
              </a>
              <a
                className="block px-4 py-2 font-medium text-gray-700 lg:text-lg hover:bg-gray-100"
                href="#"
                onClick={closeMenu}
              >
                Settings
              </a>
              <a
                className="block px-4 py-2 font-medium text-red-500 lg:text-lg hover:bg-gray-100"
                onClick={() => {
                  closeMenu();
                  logout();
                }}
              >
                Log Out
              </a>
            </div>
          )}
        </div>
        {/* Button to enable sidebar*/}
        {isMobileOrTablet && (
          <button
            onClick={toggleSidebar}
            className=""
          >
        {/** smoothly animate icon when change sidebar toggles */}
            {sidebar ? (
              <BiMenuAltRight className="w-12 h-12" />
            ) : (
              <BiMenu className="w-12 h-12" />
            )}
          </button>
        )}
      </div>
    }
  </div>
}