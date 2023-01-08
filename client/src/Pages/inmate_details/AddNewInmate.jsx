import React from "react";
import CaseDetails from "./components/CaseDetails";
import IdentityParticular from "./components/IdentityParticular";
import PhysicalDetail from "./components/PhysicalDetail";
import PrisonDetails from "./components/PrisonDetails";
import EmergencyContacts from "./components/EmergencyContacts";
import UploadImage from "./components/UploadImage";

const AddNewInmate = () => {
  return (
    <div className="h-full w-full">
      <div className="flex justify-center items-center">
        <form className="h-full w-4/5 border border-black">
          <div className="h-10 w-full bg-[#00437A]">
            <h4 className="text-white text-lg font-medium p-2 ">
              New Inmate Entry
            </h4>
          </div>
          <IdentityParticular />
          <PhysicalDetail />
          <CaseDetails />
          <PrisonDetails />
          <EmergencyContacts />
          <UploadImage />

          <div className="flex justify-center items-center">
            <button className="bg-[#00437A] text-white font-medium text-lg p-2 mt-5 w-1/5 rounded-lg mb-4">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewInmate;
