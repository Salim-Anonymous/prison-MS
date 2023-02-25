import React, { useState } from "react";
import CaseDetails from "./components/CaseDetails";
import IdentityParticular from "./components/IdentityParticular";
import PhysicalDetail from "./components/PhysicalDetail";
import PrisonDetails from "./components/PrisonDetails";
import EmergencyContacts from "./components/EmergencyContacts";
import UploadImage from "./components/UploadImage";

const AddNewInmate = () => {
  const [data, setdata] = useState({
    identityParticular: {
      FirstName: "",
      MiddleName: "",
      LastName: "",
      CIDNo: "",
      Dob: "",
      Sex: "",
      Village: "",
      Gewog: "",
      Dzongkhag: "",
      MaritalStatus: "",
      Nationality: "",
    },
    PhysicalDetail: {
      Height: "",
      Weight: "",
      ColorOfHair: "",
      ColorOfEyes: "",
      Complexion: "",
    },
    CaseDetails: {
      CrimesCommitted: "",
      Sentence: "",
      TimeServeStarts: "",
      TimeServeEnds: "",
    },
    PrisonDetails: {
      PrisonerId: "",
      PrisonLocation: "",
      PrisonCell: "",
    },
    EmergencyContacts: {
      Name: "",
      Relation: "",
      ContactNumber: "",
    },
    UploadImage: {
      Image: "",
    },
  });

  return (
    <div className="h-full w-full">
      <div className="flex justify-center items-center">
        <form className="h-full w-4/5 border border-black">
          <div className="h-10 w-full bg-[#00437A]">
            <h4 className="text-white text-lg font-medium p-2 ">
              New Inmate Entry
            </h4>
          </div>
          <IdentityParticular setdata={setdata} />
          <PhysicalDetail setdata={setdata} />
          <CaseDetails setdata={setdata} />
          <PrisonDetails setdata={setdata} />
          <EmergencyContacts setdata={setdata} />
          <UploadImage setdata={setdata} />

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
