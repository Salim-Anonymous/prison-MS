import React from "react";
import Greetings from "../../components/Greetings";

export default function Dashboard() {
    return <div className="flex flex-col justify-between overflow-y-scroll">
        <Greetings />
        <div className="px-10 shadow-md  py-5rounded-lg">
            <img src="images/police.jpg" />
        </div>
    </div>;
}
