import React from "react";
import Logo from "../assets/logo.png";
import PathStrip from "./LocationIndicator";
import UserProfileOptionsMenu from "./ProfileDropDown";
import { useState } from "react";
import FormalSidebar from "./Sidebar";

const AppShell = ({children}) => {

    const [path, setPath] = useState(['Dashboard', 'Users', 'User Details']);

    return <div className="h-screen">
        <div className="flex flex-col h-1/6">
            <header className="bg-white h-full w-full ">
                <nav>
                    <ul className="flex justify-between items-center p-4">
                        <li>
                            <div className="flex flex-col items-center justify-center" >
                                <img src={Logo} alt="logo" className="h-8" />
                                <p className=" text-blue-800 text-sm">Police Management System</p>
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
        <div className="flex flex-row h-5/6 w-full">
            <FormalSidebar />
            <div className="h-full w-5/6">
                {children}
            </div>
        </div>
    </div>;
}

export default AppShell;