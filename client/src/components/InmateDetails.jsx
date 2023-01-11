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
