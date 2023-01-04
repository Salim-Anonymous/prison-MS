import React from "react";

const AddVisitorForm = (props) => {
  function cancelHandler() {
    props.onCancel();
  }

  return (
    <div className="w-full">
      <form className="flex flex-col h-auto  justify-center  p-3">
        <div>
          <h1 className="font-semibold text-lg mt-1">
            Add New Visitor's Details
          </h1>
        </div>
        <div className="flex flex-col w-full mt-5">
          <label className="font-medium">Date of Vist</label>
          <input type="date" className="border-2 border-[#00437A] mt-3 p-1" />
        </div>
        <div className="flex flex-col w-full mt-5">
          <label className="font-medium">Visitor's Name</label>
          <input type="text" className="border-2 border-[#00437A] mt-3 p-1" />
        </div>
        <div className="flex flex-col w-full mt-5">
          <label className="font-medium">Inmate's Name</label>
          <input type="text" className="border-2 border-[#00437A] mt-3 p-1" />
        </div>
        <div className="flex flex-col w-full mt-5">
          <label className="font-medium">CID NO</label>
          <input type="text" className="border-2 border-[#00437A] mt-3 p-1" />
        </div>
        <div className="flex flex-col w-full mt-5">
          <label className="font-medium">Contact No</label>
          <input type="text" className="border-2 border-[#00437A] mt-3 p-1" />
        </div>
        <div className="flex flex-row w-full mt-5 justify-center">
          <button className="bg-[#00437A] text-white font-medium text-sm p-2 w-1/3 rounded-md mb-3 mr-2 outline-none hover:bg-blue-700 ">
            Save
          </button>
          <button
            className="bg-[#00437A] text-white font-medium text-sm p-2 w-1/3 rounded-md mb-3 ml-2 outline-none hover:bg-blue-700 "
            onClick={cancelHandler}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVisitorForm;
