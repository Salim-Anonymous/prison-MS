import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdDashboard, MdPeopleOutline } from 'react-icons/md'
import { GoLaw } from 'react-icons/go'
import {GiPrisoner} from 'react-icons/gi'
import { TbPrison } from 'react-icons/tb'
import { BiStats } from 'react-icons/bi'

const links = [
    {
        name: 'Dashboard',
        path: '/pms',
        icon: <MdDashboard size={32}  />
      
    },
    {
        name: 'Prison Act 2009',
        path: '/prison-act-2009',
        icon: <GoLaw size={32}/>
      
    },
    {
        name: 'Inmate Details',
        path: '/inmate-details',
        icon: <GiPrisoner size={32} />
    },
    {
        name: 'Prison Details',
        path: '/prison-details',
        icon: <TbPrison size={32} />
    },
    {
        name: 'Statistics',
        path: '/statistics',
        icon: <BiStats size={32} />
    },
    {
        name: 'Visitor Details',
        path: '/visitor-list',
        icon: <MdPeopleOutline size={32}/>
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