import { useNavigate } from "react-router-dom";
import Inmate from "../types/Inmates";

const InmateCard = ({ inmate }: { inmate: Inmate }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/inmates/view/${inmate.CIDNo}`);
      }}
      className="flex p-4 flex-col mt-10 h-auto w-auto bg-white rounded-md border-2 border-black"
    >
      <div className="flex items-center">
        <img
          src="https://avatars.githubusercontent.com/u/73750430?s=40&v=4"
          className="w-20 h-20 mr-4 rounded-full shadow-sm md:mr-2 border-2 border-blue-900"
          alt="inmate image"
        />
        <h1 className="text-md font-bold text-blue-900">
          {`${inmate.FirstName} ${inmate.MiddleName.charAt(0)}. ${
            inmate.LastName
          }`}
        </h1>
      </div>
      <div className="flex flex-col mt-4">
        <div className="flex items-center justify-start">
          <h1 className="text-sm font-bold text-gray-400 mr-4">CID No:</h1>
          <h1 className="text-sm font-bold text-blue-900">{inmate.CIDNo}</h1>
        </div>
        <div className="flex items-center justify-start mt-4">
          <h1 className="text-sm font-bold text-gray-400 mr-4">Gender:</h1>
          <h1 className="text-sm font-bold text-blue-900">{inmate.Sex}</h1>
        </div>
      </div>
    </div>
  );
};

export default InmateCard;
