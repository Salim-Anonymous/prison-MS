import React from "react";
import Greetings from "../../components/Greetings";
import {links} from "../../components/Sidebar";
import {NavLink} from "react-router-dom";

export default function Dashboard() {
    return <div className="flex flex-col justify-between z-2">
        <Greetings/>
        <div className="px-10 py-5 rounded-lg shadow-md">
            <img className="w-full h-96" src="images/police.jpg"/>
        </div>
        {/* grid the following links */}
        <div className="grid grid-cols-2 gap-x-20 mt-8">
            {links.map((link, index) => {
                    return <div key={link.name + index}
                                className="flex flex-row justify-between items-center py-8 px-10 m-2 text-2xl text-white bg-blue-800 rounded-lg shadow-md hover:bg-black hover:cursor-pointer">
                        <NavLink to={
                            link.path
                        }
                                 className="flex flex-row justify-between items-center w-full h-full px-6 py-2 rounded-xl hover:bg-gray-700 hover:cursor-pointer">
                            <div className="flex flex-col">
                                <p className="">{link.name}</p>
                            </div>
                            <div className="flex flex-row">
                                <span className="w-10">{link.icon}</span>
                            </div>
                        </NavLink>
                    </div>
                }
            )}
        </div>
    </div>;
}
