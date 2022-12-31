import React from "react";
import Greetings from "../../components/Greetings";
import { links } from "../../components/Sidebar";
export default function Dashboard() {
    return <div className="flex flex-col justify-between z-2">
        <Greetings />
        <div className="px-10 py-5 rounded-lg shadow-md">
            <img className="w-full" src="images/police.jpg" />
        </div>
        {/* grid the following links */}
        <div className="grid grid-cols-3 gap-3 mt-8 2xl:grid-cols-4">
            {links.map((link,index) => {
                return <div key={link.name+index} className="flex flex-row justify-between p-5 m-2 text-2xl text-white bg-blue-800 rounded-lg shadow-md">
                    <div className="flex flex-col">
                        <p className="text-2xl">{link.name}</p>
                    </div>
                    <div className="flex flex-row">
                        <span className="w-10">{link.icon}</span>
                    </div>
                </div>
            }
            )}
        </div>
    </div>;
}
