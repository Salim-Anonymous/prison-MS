import React from "react";
import Table from "./components/Table";
import AddVisitorForm from "./components/AddVisitorForm";
import { useState } from "react";

const VisitorList = () => {
  const [visitorFormVisible, setVisitorFormVisible] = useState(false);
  const [visitors, setVisitors] = useState([]);

  function closeForm() {
    setVisitorFormVisible(false);
  }

  return (
    <div className="p-2">
      <div>
        <div className="flex flex-row">
          <h1 className="text-2xl font-semibold">List of Visitors</h1>
          <button
            className="bg-[#00437A] text-white font-medium text-sm p-2 w-1/12 rounded-md mb-4 ml-auto outline-none hover:bg-blue-700 "
            onClick={() => {
              setVisitorFormVisible(!visitorFormVisible);
            }}
          >
            Add New
          </button>
        </div>
        <div className="mt-3 flex flex-row justify-end">
          <input
            type="text"
            placeholder="visitor's CID NO"
            className="border border-[#00437A] p-1 "
          />
          <button className="bg-[#00437A] text-white font-medium text-sm p-2 w-1/12 rounded-r-md outline-none hover:bg-blue-700 ">
            Search
          </button>
        </div>
        <Table />
        <div className="w-1/3 mx-auto -mt-72">
          {visitorFormVisible && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 ">
              <div className="relative mx-auto  rounded-lg bg-white shadow-lg py-8 px-8 w-1/3">
                <AddVisitorForm onCancel={closeForm} onConfirm={closeForm} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisitorList;
