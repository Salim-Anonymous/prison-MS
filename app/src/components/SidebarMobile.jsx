import React from 'react'
import {links} from "./links.jsx";
import {useNavigate} from "react-router-dom";

export const SidebarMobile = () => {
    const navigate = useNavigate()
    return (
        <div className="fixed top-0 left-0 h-screen w-72 bg-white shadow-xl">
            <div className="flex flex-col bg-gray-800 items-center justify-center h-full">
                {
                    links.map((link, index) => {
                        const key = `side-mobile-key-${index}`
                        return <button
                            key={key}
                            onClick={() => navigate(link.path)}
                            className="flex flex-row items-center justify-start w-full my-2 px-2 py-3 text-white text-sm hover:cursor-pointer hover:bg-slate-700">
                            <span className="w-10 mx-4">{link.icon}</span>
                            <p className="text-xs xl:text-sm">{link.name}</p>
                        </button>
                    })
                }
            </div>
        </div>
    )
}
