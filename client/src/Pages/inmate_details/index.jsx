import React from "react";
import logo from "../../assets/logo.png";
import { useState } from "react";

export default function Inmates() {
  const [searchTypeVisible, setSearchTypeVisible] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="h-full w-full">
      <div className="flex  justify-center items-center p-10 ">
        <div className="flex flex-col justify-center items-center  h-max w-1/2 shadow-2xl rounded-xl ">
          <img src={logo} alt="logo" className="h-28 mt-7" />
          <h1 className=" text-3xl mt-7 font-medium text-[#00437A]">
            Inmates Details
          </h1>
          <div className="flex flex-row mt-8">
            <button
              class="bg-transparent hover:bg-[#00437A] text-[#00437A] font-semibold hover:text-white p-2 border-2 border-[#00437A] hover:border-transparent w-40 "
              onClick={() => {
                setSearchTypeVisible(!searchTypeVisible);
              }}
            >
              Search Type
              <span className="ml-6">&#9662;</span>
            </button>
            {searchTypeVisible && (
              <div className="absolute  w-40 py-2 mt-12 bg-white rounded-md shadow-lg">
                <option
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelected("CID NO");
                    setSearchTypeVisible(false);
                  }}
                >
                  CID NO
                </option>
                <option
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelected("Prison ID");
                    setSearchTypeVisible(false);
                  }}
                >
                  Prison ID
                </option>
                <option
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelected("Name");
                    setSearchTypeVisible(false);
                  }}
                >
                  Another option
                </option>
              </div>
            )}

            <input
              placeholder={selected}
              className="border-2 border-[#00437A] p-2 w-60 focus:outline-none"
            />
          </div>
          <button className="text-white bg-[#00437A] p-2 mt-8 w-40 rounded-lg">
            Search
          </button>
          <p className="mt-4 mb-4 font-medium text-[#00437A]">OR</p>
          <button className="text-white bg-[#00437A] p-2 w-40 mb-8 rounded-lg">
            Add New Inmate
          </button>
        </div>
      </div>
    </div>
  );
}
