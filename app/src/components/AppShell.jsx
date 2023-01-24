import { SidebarMobile } from './SidebarMobile'
import { MenuDropDownList } from './MenuDropDownList'
import { Header } from './Header'
import logo from "../assets/logo2.png";
import { useState } from "react";
import MediaQuery from 'react-responsive';
import { links } from './links';
const AppShell = ({ children }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    let style = "flex items-center " + menuVisible ? "text-blue-500" : "text-gray-500";
    const [sidebar, setSidebar] = useState(false);


    return (
        <div className="h-screen w-full">
            
            <MediaQuery minWidth={769}>
                <div className="fixed left-0 px-1 py-5 pt-20 bg-gray-800 w-1/5 h-full overflow-y-auto overflow-x-clipp">
                    {
                        links.map((link, index) => {
                            const key = `sidekey-${index}`
                            return <button key={key} className="flex flex-row items-center justify-start mx-6 my-4 rounded-md px-2 py-3 text-white text-sm hover:cursor-pointer hover:bg-slate-700">
                                <span className="w-10">{link.icon}</span>
                                <p className="text-xs xl:text-sm">{link.name}</p>
                            </button>
                        })
                    }
                </div>
                <div className="fixed left-[20%] px-3 py-5 pt-20 w-4/5 h-full overflow-y-auto overflow-x-clipp">
                    {children}
                </div>

            </MediaQuery>
            <MediaQuery maxWidth={768}>
                <div className="fixed px-3 py-5 pt-20 w-full h-full overflow-y-auto overflow-x-clipp">
                    {sidebar && (
                        <SidebarMobile
                            logo={logo}
                            setSidebar={setSidebar}
                            sidebar={sidebar}
                        />
                    )}
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
                />
            )}


        </div>
    );
}


export default AppShell;

