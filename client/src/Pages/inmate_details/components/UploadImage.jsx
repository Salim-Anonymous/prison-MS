import React from "react";

const UploadImage = () => {
  return (
    <div>
      <h4 className="text-lg font-medium p-2 mt-5">Upload Image</h4>
      <div className="flex flex-row p-2 ">
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Inmate Image</label>
          <input
            className=" w-[95%] text-lg mt-2 border-2 border-[#00437A]"
            type="file"
          />
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
