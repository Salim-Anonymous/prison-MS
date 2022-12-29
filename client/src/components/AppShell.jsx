import React from "react";
import Logo from "../assets/logo.png";
import PathStrip from "./LocationIndicator";
import UserProfileOptionsMenu from "./ProfileDropDown";
import { useState } from "react";
import FormalSidebar from "./Sidebar";

const AppShell = ({children}) => {

    const [path, setPath] = useState(['Dashboard', 'Users', 'User Details']);

    return <div className="h-screen">
        <div className="flex flex-col h-[170px]">
            <header className="bg-white h-full w-full py-3">
                <nav>
                    <ul className="flex justify-between items-center p-4">
                        <li>
                            <div className="flex flex-col items-center justify-center" >
                                <img src={Logo} alt="logo" className="h-20" />
                                <p className=" text-blue-800 text-xs">Police Management System</p>
                            </div>
                        </li>
                        <li>
                            <UserProfileOptionsMenu />
                        </li>
                    </ul>
                </nav>
            </header>
            <PathStrip path={path}/>
        </div>
        <FormalSidebar />
        {children}
    </div>;
}

export default AppShell;