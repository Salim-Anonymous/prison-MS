import { useParams } from "react-router-dom";
import Inmate from "../../../types/Inmates";
import { useQuery } from "react-query";

const InmateViewPage = () => {
  const { id } = useParams<{ id: string }>();
  let prison;
  // @ts-ignore
  const {
    data: inmate,
    isLoading,
    error,
  } = useQuery<Inmate>("inmateQuery", () =>
    fetch(`http://localhost:3000/api/inmates/view/id/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="my-4 bg-white border-2 border-black px-2 py-3 flex flex-col items-start justify-start w-full h-auto">
        {/** Identity Particulars */}
        <div className="flex items-start justify-start w-full">
          <img
            src="https://avatars.githubusercontent.com/u/73750430?s=40&v=4"
            className="w-20 h-20 mr-4 rounded-full shadow-sm md:mr-2 border-2 border-blue-900"
            alt="inmate image"
          />
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-md font-bold text-blue-900">{`${
              inmate?.FirstName
            } ${inmate?.MiddleName.charAt(0)}. ${inmate?.LastName}`}</h1>
            <h1 className="text-sm font-bold text-gray-400 mt-2">{`CID No: ${inmate?.CIDNo}`}</h1>
          </div>
        </div>
        <span className="text-sm font-bold text-blue-900 mt-4">
          Identity Particulars
        </span>
        <div className="text-sm font-bold text-gray-600 grid border border-black px-2 py-3 grid-cols-2 gap-x-4 w-full mt-4">
          <h1>
            <span className="text-gray-400 mr-2">DOB:</span>
            {`01-10-1998`}
          </h1>
          <h1>
            <span className="text-gray-400 mr-2">Gender:</span>
            {`${inmate?.Sex}`}
          </h1>
          <h1>
            <span className="text-gray-400 mr-2">Village:</span>
            {`${inmate?.Village}`}
          </h1>
          <h1>
            <span className="text-gray-400 mr-2">Gewog:</span>
            {`${inmate?.Gewog}`}
          </h1>
          <h1>
            <span className="text-gray-400 mr-2">Dzongkhag:</span>
            {`${inmate?.Dzongkhag}`}
          </h1>
          <h1></h1>
          <h1>
            <span className="text-gray-400 mr-2">Marital Status:</span>
            {`${inmate?.MaritalStatus}`}
          </h1>
          <h1>
            <span className="text-gray-400 mr-2">Nationality:</span>
            {`${inmate?.Nationality}`}
          </h1>
        </div>
        <span className="text-sm font-bold text-blue-900 mt-4">
          Physical Particulars
        </span>
        <div className="text-sm font-bold text-gray-600 grid border border-black px-2 py-3 grid-cols-2 gap-x-4 w-full mt-4">
          <h1>
            <span className="text-gray-400 mr-2">Height:</span>
            {`${inmate?.Height} cm`}
          </h1>
          <h1>
            <span className="text-gray-400 mr-2">Weight:</span>
            {`${inmate?.Weight} Kg`}
          </h1>
          <h1>
            <span className="text-gray-400 mr-2">Color of Eyes:</span>
            {`${inmate?.ColorOfEyes}`}
          </h1>
          <h1>
            <span className="text-gray-400 mr-2">Color of Hair:</span>
            {`${inmate?.ColorOfHair}`}
          </h1>
          <h1>
            <span className="text-gray-400 mr-2">Complexion:</span>
            {`${inmate?.Complexion}`}
          </h1>
        </div>
        <span className="text-sm font-bold text-blue-900 mt-4">
          Case Particulars
        </span>
        <div className="text-sm font-bold text-gray-600 grid border border-black px-2 py-3 grid-cols-2 gap-x-4 w-full mt-4">
          <h1>
            <span className="text-gray-400 mr-2">Sentence:</span>
            {`${inmate?.Sentence} years`}
          </h1>
          <h1>
            <span className="text-gray-400 mr-2">Serve Start:</span>
            {`01-10-2010`}
          </h1>
          <h1>
            <span className="text-gray-400 mr-2">Serve End:</span>
            {`01-10-2022`}
          </h1>
          <span></span>
          <h1>
            <span className="text-gray-400 mr-2">Crimes:</span>
            {`${inmate?.CrimesCommitted}`}
          </h1>
        </div>
        <span className="text-sm font-bold text-blue-900 mt-4">
          Emergency Contact
        </span>
        <div className="text-sm font-bold text-gray-600 grid border border-black px-2 py-3 grid-cols-2 gap-x-4 w-full mt-4">
          <h1>
            <span className="text-gray-400 mr-2">Name:</span>
            {`${inmate?.EmergencyPersonName}`}
          </h1>
          <h1>
            <span className="text-gray-400 mr-2">Contact:</span>
            {`${inmate?.EmergencyPersonContact}`}
          </h1>
          <h1>
            <span className="text-gray-400 mr-2">Relationship:</span>
            {`${inmate?.EmergencyPersonRelationship}`}
          </h1>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default InmateViewPage;
