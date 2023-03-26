import { useState } from 'react';
import { createContext } from 'react';

interface SidebarContextValues{
    sidebar: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
    openSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextValues>({
    sidebar: false,
    toggleSidebar: () => {},
    closeSidebar: () => {},
    openSidebar: () => {},
});

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
    const [sidebar, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebar);
    const closeSidebar = () => setSidebarOpen(false);
    const openSidebar = () => setSidebarOpen(true);

    const contextValues: SidebarContextValues = {
        sidebar,
        toggleSidebar,
        closeSidebar,
        openSidebar
    }

    return (
        <SidebarContext.Provider value={contextValues}>
            {children}
        </SidebarContext.Provider>
    );
}

export { SidebarContext, SidebarProvider };