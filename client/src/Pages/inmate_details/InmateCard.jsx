import { React } from "react";

function InmateCard({ inmate }) {
    return (
        <div className="p-6 mb-3 rounded-lg">
            <div className="hover:cursor-pointer relative top-16 left-1 bg-gray-50 border-2 border-blue-400 shadow-lg rounded-lg p-12  px-20" >
                <h2 className="relative left-2 px-2 bottom-8 text-lg font-medium">{inmate.name}</h2>
                <div className="relative right-16 ">
                    <div className="flex items-center mt-4 w-64">
                        <div className="text-gray-500">Prisoner ID:</div>
                        <div className="ml-2 text-gray-800">{inmate.pid}</div>
                    </div>
                    <div className="flex items-center mt-2 w-64">
                        <div className="text-gray-500">CID:</div>
                        <div className="ml-2 text-gray-800">{inmate.cid}</div>
                    </div>
                    <div className="flex items-center mt-2 w-64">
                        <div className="text-gray-500">DOB:</div>
                        <div className="ml-2 text-gray-800">{inmate.dob}</div>
                    </div>
                    <div className="flex items-center mt-2 w-64">
                        <div className="text-gray-500">Gender:</div>
                        <div className="ml-2 text-gray-800">{inmate.gender}</div>
                    </div>
                </div>
            </div>
            <div className="relative bottom-64 right-8">
                <img src="http://react.com/favicon.ico" alt="inmate" className="w-32 h-32 bg-white shadow-lg rounded-full border-4 border-black" />
            </div>
        </div>
    )
}

export default InmateCard