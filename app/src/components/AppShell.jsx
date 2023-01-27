import { SidebarMobile } from "./SidebarMobile";
import { MenuDropDownList } from "./MenuDropDownList";
import { Header } from "./Header";
import { useContext, useState } from "react";
import MediaQuery from "react-responsive";
import { links } from "./links";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext.jsx";

const AppShell = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  let style =
    "flex items-center " + menuVisible ? "text-blue-500" : "text-gray-500";
  const [sidebar, setSidebar] = useState(false);
  const { setAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full">
      <MediaQuery minWidth={769}>
        <div className="fixed left-0 pt-24 bg-gray-800 w-1/5 h-full overflow-y-auto">
          {links.map((link, index) => {
            const key = `side-key-${index}`;
            return (
              <button
                key={key}
                onClick={() => navigate(link.path)}
                className="flex flex-row items-center justify-start w-full my-6 px-2 py-3 text-white text-sm hover:cursor-pointer hover:bg-slate-700"
              >
                <span className="w-10 mx-4">{link.icon}</span>
                <p className="text-xs xl:text-sm">{link.name}</p>
              </button>
            );
          })}
        </div>
        <div className="fixed flex items-center justify-center left-[20%] px-3 py-5 pt-20 w-4/5 h-full overflow-y-auto overflow-x-clipp">
          {children}
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <div className="fixed px-3 flex items-center justify-center py-5 pt-20 w-full h-full overflow-y-auto overflow-x-clipp">
          {sidebar && <SidebarMobile />}
          {children}
        </div>
      </MediaQuery>
      <Header
        setSidebar={setSidebar}
        sidebar={sidebar}
        style={style}
        setMenuVisible={setMenuVisible}
        menuVisible={menuVisible}
      />

      {menuVisible && (
        <MenuDropDownList
          setMenuVisible={setMenuVisible}
          menuVisible={menuVisible}
          setAdmin={setAdmin}
        />
      )}
    </div>
  );
};

export default AppShell;
