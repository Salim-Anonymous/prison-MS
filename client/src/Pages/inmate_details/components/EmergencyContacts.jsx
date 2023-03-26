import React from "react";

const EmergencyContacts = ({setdata}) => {
  return (
    <div>
      <h4 className="text-lg font-medium p-2 mt-5">Emergency Contact</h4>
      <div className="flex flex-row p-2 ">
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Name</label>
          <input
            type="text"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full "
            onChange={(e) => {
              setdata((prev) => {
                return {
                  ...prev,
                  EmergencyContact: {
                    ...prev.EmergencyContact,
                    Name: e.target.value,
                  },
                };
              });
            }}
          />
        </div>
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Contact Number</label>
          <input
            type="number"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
            onChange={(e) => {
              setdata((prev) => {
                return {
                  ...prev,
                  EmergencyContact: {
                    ...prev.EmergencyContact,
                    ContactNumber: e.target.value,
                  },
                };
              });
            }}
          />
        </div>
        <div className="flex flex-col w-1/3 ">
          <label className="text-base font-medium">Relation</label>
          <input
            type="text"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
            onChange={(e) => {
              setdata((prev) => {
                return {
                  ...prev,
                  EmergencyContact: {
                    ...prev.EmergencyContact,
                    Relation: e.target.value,
                  },
                };
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EmergencyContacts;
