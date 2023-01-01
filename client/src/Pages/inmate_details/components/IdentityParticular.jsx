import React from "react";
``;
const IdentityParticular = () => {
  return (
    <div>
      <h4 className="text-lg font-medium p-2 mt-2">Identity Particular</h4>
      <div className="flex flex-row p-2 ">
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">First Name</label>
          <input
            type="text"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
          />
        </div>
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Middle Name</label>
          <input
            type="text"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
          />
        </div>
        <div className="flex flex-col w-1/3 ">
          <label className="text-base font-medium">Last Name</label>
          <input
            type="text"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
          />
        </div>
      </div>

      <div className="flex flex-row p-2 ">
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">CID Number</label>
          <input
            type="number"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
          />
        </div>
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">DOB</label>
          <input
            type="date"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
          />
        </div>
        <div className="flex flex-col w-1/3 ">
          <label className="text-base font-medium">Sex</label>
          <div className="flex flex-row mt-5">
            <label>Female</label>
            <input type="radio" name="sex" className="ml-4" />

            <label className="ml-4">Male</label>
            <input type="radio" name="sex" className="ml-4" />
          </div>
        </div>
      </div>
      <div className="flex flex-row p-2 ">
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Village</label>
          <input
            type="text"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
          />
        </div>
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Gewog</label>
          <input
            type="text"
            className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full"
          />
        </div>
        <div className="flex flex-col w-1/3 ">
          <label className="text-base font-medium">Dzongkhag</label>
          <select className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full">
            <option disabled selected>
              -- Select Dzongkhag --
            </option>
            <option value="Bumthang">Bumthang</option>
            <option value="Chukha">Chukha</option>
            <option value="Dagana">Dagana</option>
            <option value="Gasa">Gasa</option>
            <option value="Haa">Haa</option>
            <option value="Lhuntse">Lhuntse</option>
            <option value="Mongar">Mongar</option>
            <option value="Paro">Paro</option>
            <option value="Pemagatshel">Pemagatshel</option>
            <option value="Punakha">Punakha</option>
            <option value="Samdrup Jongkhar">Samdrup Jongkhar</option>
            <option value="Samtse">Samtse</option>
            <option value="Sarpang">Sarpang</option>
            <option value="Thimphu">Thimphu</option>
            <option value="Trashigang">Trashigang</option>
            <option value="Trashiyangtse">Trashiyangtse</option>
            <option value="Trongsa">Trongsa</option>
            <option value="Tsirang">Tsirang</option>
            <option value="Wangdue Phodrang">Wangdue Phodrang</option>
            <option value="Zhemgang">Zhemgang</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row p-2 ">
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Marital Status</label>
          <select className="border-2 border-[#00437A] mt-2 focus:outline-none p-1 w-full">
            <option disabled selected>
              -- Select Marital Status --
            </option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>
        <div className="flex flex-col w-1/3 mr-6">
          <label className="text-base font-medium">Nationality</label>
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

export default IdentityParticular;
