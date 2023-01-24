import React from 'react'

export const SidebarMobile = ({logo}) => (
    <div className="fixed top-0 left-0 h-screen w-72 bg-white shadow-xl">
        <div className="flex items-center px-8 justify-between h-[11%] shadow-lg w-full">
            <div className="flex justify-between items-center">
                <img src={logo} alt="logo" className="h-12 w-12"/>
                <span className=" w-32 text-xs font-bold text-gray-700 ml-2"> Prison Management System </span>
            </div>
            {/** close svg */}


        </div>
        <div className="flex flex-col items-center justify-center h-20">

        </div>
    </div>
)
