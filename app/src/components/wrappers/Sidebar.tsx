import sidebarLinks from "../../fixtures/sidebarLinks";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { BreakPointsContext } from "../../context/breakPointsContext";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import LogoWithTitle from "../common/LogoWithTitle";
import logo from "../../assets/logo.png";

const Sidebar = () => {

    const { sidebar, toggleSidebar } = useContext(SidebarContext);
    const { isDesktop } = useContext(BreakPointsContext);

    //creating a sidebar which is hidden and toggleable on mobile and tablets
    // and animates when toggled and is always visible in desktop

    return (
        <>
            {/*Sidebar animate*/}
            <div
                className={`fixed z-30 top-0 left-0 w-full md:w-3/4 lg:w-1/4 h-full bg-gray-200 transform duration-500 ease-in-out ${
                    isDesktop
                        ? "translate-x-0"
                        : sidebar
                        ? "translate-x-0"
                        : "-translate-x-full"
                }`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex flex-row items-center justify-between w-full h-20 px-4 py-10 bg-white shadow-lg lg:shadow-none">
                        <LogoWithTitle
                            title="Prison Management System"
                            logo={<img src={logo} alt="logo" className="w-10 h-10" />}
                        />
                        {!isDesktop && <button
                            className="text-4xl font-bold text-gray-600"
                            onClick={() => {
                                toggleSidebar();
                            }}
                        >
                            <BiMenuAltRight className="w-8 h-8" />
                        </button>}
                    </div>
                    <div className="flex flex-col w-full h-full px-8 py-4 overflow-y-scroll">
                        {sidebarLinks.map((item) => {
                            return (
                                <NavLink
                                    key={item.link+item.title}
                                    to={item.link}
                                    className="block px-4 py-2 font-medium text-gray-700 lg:text-lg hover:bg-gray-100"
                                    onClick={() => {
                                        toggleSidebar();
                                    }}
                                >
                                    {item.title}
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/*Sidebar animate*/}
        </>
    );
};

export default Sidebar;