import React from "react";

const PrisonDetails = () => {
  return (
    <div>
      <h4 className="text-lg font-medium p-2 mt-5">Prison Details</h4>
      <div className="flex flex-row p-2 ">
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Prisoner's ID</label>
          <input
            type="text"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full "
          />
        </div>

        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Prison Location</label>
          <select className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full">
            <option disabled selected>
              -- Select Prison Location --
            </option>
            <option value="">location 1</option>
            <option value="">location 2</option>
            <option value="">location 3</option>
            <option value="">location 4</option>
          </select>
        </div>
        <div className="flex flex-col w-1/3 ">
          <label className="text-base font-medium">Cell Number</label>
          <input
            type="text"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PrisonDetails;
