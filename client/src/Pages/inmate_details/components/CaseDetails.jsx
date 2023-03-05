import React from "react";

const CaseDetails = ({setdata}) => {
  return (
    <div>
      <h4 className="text-lg font-medium p-2 mt-5">Case Details</h4>
      <div className="flex flex-row p-2 ">
        <div className="flex flex-col w-[70%] mr-6">
          <label className="text-base font-medium">Crimes Committed</label>
          <input
            type="text"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full "
            onChange={(e) => {
              setdata((prev) => {
                return {
                  ...prev,
                  CaseDetails: {
                    ...prev.CaseDetails,
                    CrimesCommitted: e.target.value,
                  },
                };
              });
            }}
          />
        </div>
        <div className="flex flex-col w-1/3 ">
          <label className="text-base font-medium">Sentence</label>
          <input
            type="text"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
            onChange={(e) => {
              setdata((prev) => {
                return {
                  ...prev,
                  CaseDetails: {
                    ...prev.CaseDetails,
                    Sentence: e.target.value,
                  },
                };
              });
            }}
          />
        </div>
      </div>

      <div className="flex flex-row p-2 ">
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Time Serve Starts</label>
          <input
            type="date"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
            onChange={(e) => {
              setdata((prev) => {
                return {
                  ...prev,
                  CaseDetails: {
                    ...prev.CaseDetails,
                    TimeServeStarts: e.target.value,
                  },
                };
              });
            }}
          />
        </div>
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Time Serve Ends</label>
          <input
            type="date"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
            onChange={(e) => {
              setdata((prev) => {
                return {
                  ...prev,
                  CaseDetails: {
                    ...prev.CaseDetails,
                    TimeServeEnds: e.target.value,
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

export default CaseDetails;
