import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Header from "./Header";
import { BreakPointsContext } from "../../context/breakPointsContext";
import { SidebarContext } from "../../context/sidebarContext";
import Sidebar from "./Sidebar";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const { isDesktop } = useContext(BreakPointsContext);
  const { closeSidebar, openSidebar } = useContext(SidebarContext);

  useEffect(() => {
    if(isLoggedIn){
      navigate("/dashboard")
    }else if(!isLoggedIn){
      navigate("/")
    }
  }, [isLoggedIn])

  useEffect(() => {
    if (isDesktop) {
      openSidebar();
    } else {
      closeSidebar();
    }
  }, [isDesktop]);

  return (
    <main>
      {isLoggedIn ? (<><div className="flex flex-row w-full">
        {/*Main Content*/}
        <div className="fixed bottom-0 right-0 flex flex-row w-full h-screen bg-gray-200 lg:w-3/4">
          <div className="w-full h-full pt-20 pb-10 overflow-y-scroll">
            {children}
          </div>
        </div>
        {/*Sidebar animate*/}
        </div>
      <Sidebar />
      <Header />
      </>):<div>{children}</div>}
    </main>
  );
};

export default AppShell;
