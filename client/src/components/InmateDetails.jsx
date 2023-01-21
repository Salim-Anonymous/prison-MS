import React from "react";
import head_shot from "../assets/ben.jpg";

const InmateDetails = () => {
  let text_props = "text-black text-left font-bold text-xl p-4";
  const details = [
    { title: "Name" },
    { title: "CID No" },
    { title: "Age/Gender" },
    { title: "Crime" },
    { title: "Tenure" },
  ];
  const data = ["John Doe", "xxxxxxxxxxx", "22/Male", "Battery Case", "5 Years"];

  return (
    <div className="grid mx-auto">
      <div className="mt-20 mb-[110px]">
        <select className="h-11 text-center w-100 border-2 border-solid border-[#00437A] bg-[#00437A] text-white">
          <option> Search Type</option>
          <option> CID No</option>
          <option> Prisoner ID</option>
          <option> Other search Type</option>

        </select>
        <input type="text" placeholder="   CID NO*" className="md:w-[500px] w-[305px] h-11 border-solid border-2 border-[#00437A] hover:bg-transparent  hover:text-[#00437A]" />
        <button
          className=" py-2 px-10 
                    border-solid border-2 border-[#00437A]
                    hover:text-[#00437A] hover:bg-white bg-[#00437A] text-white ease-in-out duration-75"
        >
          Search
        </button>
      </div>

      <div
        className="z-0 border-solid border-2 border-[#00437A] rounded-[30px]
                 md:h-[500px] md:w-[550px] w-[80%] h-auto pl-20 pt-10 pb-7  mx-auto"
      >
        <div
          className=" mt-[-100px] mb-[-100px] ml-[-150px] border-white border-2 border-solid
       z-20 h-[225px] w-[225px]"
        >
          <img src={head_shot} alt="headshot" className="rounded-[120px]" />
        </div>
        <div className="z-0 ml-20">
          {details.map((item, index) => {
            return (<div className={"grid grid-cols-1 sm:grid-cols-2"}>
              <p className={text_props}>{item.title} :</p>
              <p className={text_props}>{data[index]}</p>
            </div>);
            
          })}
      
              <button className="w-[250px] mt-[10px] ml-[-50px] py-3 text-white text-xl bg-[#00437A] hover:border-dashed hover:border-[#00437A] ">
                More Details
              </button>
           
        </div>
      </div>
    </div>
  );
};

export default InmateDetails;

import React from "react";
import { FaEdit, FaTrashAlt, FaPrint } from "react-icons/fa";
import head_shot from "../assets/ben.jpg";

const InmateMDetail = () => {
  const detailTitle = [
    {
      title: "Identity Particulars",
      items: [
        "CID No",
        "Age/Sex",
        "Village",
        "Gewog",
        "Dzongkhag",
        "DoB",
        "Nationality",
        "Marital status",
      ],
    },
    {
      title: "Physical Details",
      items: [
        "Height",
        "Weight",
        "Color of hair",
        "Color of eyes",
        "Complexion",
      ],
    },
    {
      title: "Case Details",
      items: [
        "Crime committed",
        "Sentence",
        "Time serve starts",
        "Time serve ends",
      ],
    },
    {
      title: "Prison Details",
      items: ["Prison ID", "Prison Address", "Cell No"],
    },
    {
      title: "Emergency Contact",
      items: ["Name", "Relationship", "Address", "Phone No"],
    },
  ];
  return (
    <div className=" py-10">
      <div className="h-[20vh]">
        <div className="flex flex-row justify-end pr-5">
          <button className="text-white w-[80px] py-2 pl-1  bg-[#00437A]">
            <FaPrint className="mb-[-18px] ml-1 mr-3"/> &nbsp;Print
          </button>
          <button className="text-white w-[80px] py-2 pl-2 ml-3 bg-[#00437A]">
            <FaEdit className="mb-[-19px]"/> Edit
         
         
          </button>
          <button className="text-white w-[100px] pl-2 pr-1 py-2 ml-3 bg-[#de1919]">
            <FaTrashAlt className="mb-[-19px]"  /> Delete
          </button>
        </div>
        <div className="text-[#00437A] pt-7 text-center text-4xl h-[120px] font-bold shadow-black shadow-sm">
          Inmate Details
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <img
            src={head_shot}
            alt="head_shot"
            className="w-[250px] h-[250px] rounded-[120px] ml-5 md:mt-[-120px] mt-0 z-20 transition ease-in-out duration-75"
          />
          <div className="flex">
            <h1 className="text-xl font-bold text-left ml-7 mt-5 mr-5">
              Inmate's Status :
            </h1>
            {true ? (
              <h1 className="text-xl font-bold text-left ml-7 mt-5 text-[#188b24]">
                Active
              </h1>
            ) : (
              <h1 className="text-xl font-bold text-left ml-7 mt-5 text-[#d81f25]">
                In-active
              </h1>
            )}
          </div>
        </div>
        <div className="pt-5 pl-5">
          {detailTitle.map((item, index) => {
            return (
              <div>
                <h1 className="text-3xl font-bold text-left">{item.title}</h1>
                <div>
                  {item.items.map((item, index) => {
                    return (
                      <div className="grid grid-cols-1 sm:grid-cols-2">
                        <p className="text-left text-xl p-4">{item}</p>
                        <p className="p-4"> xxxxxxxxxxx</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InmateMDetail;
