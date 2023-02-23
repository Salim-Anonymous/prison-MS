import React, {useState} from "react";
import PathStrip from "./LocationIndicator";
import FormalSidebar from "./Sidebar";
import Header from "./Header";

const AppShell = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [path, setPath] = useState(
    window.location.pathname.split("/").filter((item) => item !== "/")
  );

  return (
      <div className="h-screen">
          <div className="fixed top-0 z-10 flex flex-col justify-between w-full m-0">
              <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
              <PathStrip path={path}/>
          </div>
          <div className="relative flex flex-row w-full h-auto top-40 lg:top-30">
              <FormalSidebar
                  setPath={setPath}
                  setSidebarOpen={setSidebarOpen}
                  sidebarOpen={sidebarOpen}
              />
              <div className="w-full overflow-x-clip h-full px-8 mt-12">
                  {children}
              </div>
          </div>
      </div>
  );
};

export default AppShell;
