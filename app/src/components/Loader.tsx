import React from "react";

const Loader = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-green-500 rounded-full";

  return (
    <div className="flex">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`} />
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`} />
      <div className={`${circleCommonClasses} animate-bounce400`} />
    </div>
  );
};

export default Loader;
