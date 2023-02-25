import React from "react";

const PhysicalDetail = () => {
  return (
    <div>
      <h4 className="text-lg font-medium p-2 mt-5">Physical Details</h4>
      <div className="flex flex-row p-2 ">
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Height</label>
          <input
            type="text"
            placeholder="in meters"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full "
            onChange={(e) => {
              setdata((prev) => {
                return {
                  ...prev,
                  PhysicalDetail: {
                    ...prev.PhysicalDetail,
                    Height: e.target.value,
                  },
                };
              });
            }}
          />
        </div>
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Weight</label>
          <input
            type="text"
            placeholder="in kilograms"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
            onChange={(e) => {
              setdata((prev) => {
                return {
                  ...prev,
                  PhysicalDetail: {
                    ...prev.PhysicalDetail,
                    Weight: e.target.value,
                  },
                };
              });
            }}
          />
        </div>
        <div className="flex flex-col w-1/3 ">
          <label className="text-base font-medium">Color of Hair</label>
          <input
            type="text"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
            onChange={(e) => {
              setdata((prev) => {
                return {
                  ...prev,
                  PhysicalDetail: {
                    ...prev.PhysicalDetail,
                    ColorOfHair: e.target.value,
                  },
                };
              });
            }}
          />
        </div>
      </div>

      <div className="flex flex-row p-2 ">
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Color of Eyes</label>
          <input
            type="text"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
            onChange={(e) => {
              setdata((prev) => {
                return {
                  ...prev,
                  PhysicalDetail: {
                    ...prev.PhysicalDetail,
                    ColorOfEyes: e.target.value,
                  },
                };
              });
            }}
          />
        </div>
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Complexion</label>
          <input
            type="text"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
            onChange={(e) => {
              setdata((prev) => {
                return {
                  ...prev,
                  PhysicalDetail: {
                    ...prev.PhysicalDetail,
                    Complexion: e.target.value,
                  },
                };
              });
            }}
          />
        </div>
        <div className="flex flex-col w-1/3 "></div>
      </div>
    </div>
  );
};

export default PhysicalDetail;
