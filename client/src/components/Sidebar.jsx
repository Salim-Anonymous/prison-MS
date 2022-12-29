import React from 'react';
import { ArticleOutlined, DashboardOutlined, Diversity2Outlined, DocumentScannerOutlined, QueryStatsOutlined, RecentActorsOutlined, SecurityOutlined, TransferWithinAStationOutlined } from "@mui/icons-material"
import { Link } from 'react-router-dom';
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
            path: '/stats',
            icon: <QueryStatsOutlined />
        },
        {
            name: 'Visitor Details',
            path: '/visitor-details',
            icon: <TransferWithinAStationOutlined />
        },
        {
            name: 'User List',
            path: '/user-list',
            icon: <Diversity2Outlined />
        },
    ]

    return (
        <aside className="bg-gray-600 h-5/6 w-[300px] z-10 shadow-2xl">
            <nav className="py-4">
                <ul className="flex flex-col justify-center text-white font-medium">
                    {links.map((link, index) => (
                        <li key={index} 
                            className="flex flex-row items-center px-6 py-2 m-2 text-xs hover:bg-gray-700 hover:cursor-pointer">
                            <span className="mr-2">{link.icon}</span>
                            {link.name}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default FormalSidebar;