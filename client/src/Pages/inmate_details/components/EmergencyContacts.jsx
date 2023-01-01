import React from "react";

const EmergencyContacts = () => {
  return (
    <div>
      <h4 className="text-lg font-medium p-2 mt-5">Emergency Contact</h4>
      <div className="flex flex-row p-2 ">
        <div className="flex flex-col w-[70%] mr-6">
          <label className="text-base font-medium">Name</label>
          <input
            type="text"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full "
          />
        </div>
        <div className="flex flex-col w-1/3 "></div>
      </div>

      <div className="flex flex-row p-2 ">
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Contact Number</label>
          <input
            type="number"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
          />
        </div>
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Relation</label>
          <input
            type="text"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
          />
        </div>
        <div className="flex flex-col w-1/3 "></div>
      </div>
    </div>
  );
};

export default EmergencyContacts;
