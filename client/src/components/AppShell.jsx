import React from "react";
import PathStrip from "./LocationIndicator";
import { useState } from "react";
import FormalSidebar from "./Sidebar";
import Header from "./Header";

const AppShell = ({ children }) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [path, setPath] = useState(window.location.pathname.split('/').filter((item) => item !== '/'));  

    return <div className="h-screen">
        <div className="fixed top-0 z-10 flex flex-col justify-between w-full h-40 m-0 lg:h-28">
            <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
            <PathStrip path={path} />
        </div>
        <div className="relative flex flex-row w-full h-auto top-28 lg:top-30">
            <FormalSidebar setPath={setPath} setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
            <div className="w-full h-full px-8 lg:w-5/6 lg:relative lg:left-44 xl:left-56 xl:p-4 xl:pt-2 xl:pl-8 2xl:left-[18%] ">
                {children}
            </div>
        </div>
    </div>;
}

export default AppShell;