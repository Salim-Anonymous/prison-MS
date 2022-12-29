import React from 'react';
import { ArticleOutlined, DashboardOutlined, Diversity2Outlined, DocumentScannerOutlined, QueryStatsOutlined, RecentActorsOutlined, SecurityOutlined, TransferWithinAStationOutlined } from "@mui/icons-material"
import { Link, NavLink } from 'react-router-dom';
const FormalSidebar = () => {

    const links = [
        {
            name: 'Dashboard',
            path: '/',
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

    return (
        <aside className="z-10 w-1/6 h-full bg-gray-600 shadow-2xl">
            <nav className="py-4">
                <ul className="flex flex-col justify-center font-medium text-white">
                    {links.map((link, index) => (
                        <li key={index} 
                            className="flex flex-row items-center m-2 text-xs">
                            <NavLink 
                                to={link.path}
                                className="flex flex-row items-center w-full h-full px-6 py-2 rounded-xl hover:bg-gray-700 hover:cursor-pointer"
                            >
                                    <span className="mr-2">{link.icon}</span>
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