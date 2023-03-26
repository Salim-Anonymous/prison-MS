import sidebarLinks from "../../fixtures/sidebarLinks";
import {NavLink} from "react-router-dom";

const Dashboard = () => {
    const name = "John Doe";
    return (
        <div className="flex flex-col w-full justify-between mt-4 bg-white">
            <div className="p-5 mb-5 shadow-md z-2">
                <p className="text-2xl">Welcome, {name}</p>
            </div>
            <div className="px-1 py-5 rounded-lg shadow-md">
                <img className="w-full" src="/police.jpg" alt="police"/>
            </div>
            {/* grid the following links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {sidebarLinks.map((link, index) => {
                    return (
                        <div
                            key={index + "sidebarLink_dashboard"}
                            className="flex flex-row items-center p-5 m-2 text-xl md:p-2 md:m-1 md:text-lg lg:text-sm text-white"
                        >
                            <NavLink
                                to={link.link}
                                className="flex flex-row items-center justify-center w-full h-full px-2 py-4 rounded-sm hover:bg-gray-700 hover:cursor-pointer bg-[#00437A]"
                            >
                                <span className="w-10">{link.icon}</span>
                                {link.title}
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Dashboard