import React from "react";

const Greetings = (name) => {
    name  ="John Doe"
    return <div className="p-5 mb-5 shadow-md">
        <p className="text-2xl">Welcome, {name}</p>
    </div>;
}

export default Greetings;