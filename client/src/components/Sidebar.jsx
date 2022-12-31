import React from 'react';
import { ArticleOutlined, DashboardOutlined, Diversity2Outlined, DocumentScannerOutlined, QueryStatsOutlined, RecentActorsOutlined, SecurityOutlined, TransferWithinAStationOutlined } from "@mui/icons-material"
import { Link, NavLink } from 'react-router-dom';

const links = [
    {
        name: 'Dashboard',
        path: '/pms',
        icon: <DashboardOutlined />
      
    },
    {
        name: 'Prison Act 2009',
        path: '/prison-act-2009',
        icon: <ArticleOutlined />
      
    },
    {
        name: 'Inmate Details',
        path: '/inmate-details',
        icon: <RecentActorsOutlined />
    },
    {
        name: 'Prison Details',
        path: '/prison-details',
        icon: <SecurityOutlined />
    },
    {
        name: 'Statistics',
        path: '/statistics',
        icon: <QueryStatsOutlined />
    },
    {
        name: 'Visitor Details',
        path: '/visitor-list',
        icon: <TransferWithinAStationOutlined />
    },
    {
        name: 'User List',
        path: '/user-list',
        icon: <Diversity2Outlined />
    },
]

const FormalSidebar = ({setPath,sidebarOpen,setSidebarOpen}) => {

    return (
        <aside className={sidebarOpen?"z-10 w-3/6 overflow-y-auto md:w-2/6 h-full bg-gray-600 shadow-2xl fixed":"invisible lg:visible z-10 w-1/6 overflow-y-auto h-full bg-gray-600 shadow-2xl fixed"}>
            <nav className="py-10 md:py-2">
                <ul className="flex flex-col justify-center font-medium text-white">
                    {links.map((link, index) => (
                        <li key={index}
                            onClick={() => {setPath(link.path.split('/').filter((item) => item !== '/')); setSidebarOpen(false) }} 
                            className="flex flex-row items-center p-5 m-2 text-3xl md:p-2 md:m-1 md:text-lg lg:text-sm">
                            <NavLink 
                                to={link.path}
                                className="flex flex-row items-center w-full h-full px-6 py-2 rounded-xl hover:bg-gray-700 hover:cursor-pointer"
                            >
                                    <span className="w-10">{link.icon}</span>
                                    {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default FormalSidebar;
export { links };