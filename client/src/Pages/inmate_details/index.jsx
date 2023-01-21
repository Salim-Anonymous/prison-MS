import React, { useState } from "react";
import { useQuery } from "react-query";
import InmateHome from "./inmateHome";
import logo from "../../assets/logo.png";
function getInmates({ queryType, query }) {
  const { data, status } = useQuery(
    `${queryType}-${query}`,
    () => fetch(`http://localhost:3000/api/inmates?${queryType}=${query}`).then(res => res.json())
  )

  if (status === 'loading') {
    return 'Loading...';
  }

  if (status === 'error') {
    return 'Error fetching data';
  }

  //arrange the inmate cards in a grid
  return (<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
    {data.map((inmate, index) => {
      const key = `inmates-${index}`;
      return <InmateCard key={key} inmate={inmate} />
    })}
  </div>)
}

function InmateCard({ inmate }) {
  return (
    <div className="p-6 mb-3 rounded-lg">
      <div className="hover:cursor-pointer relative top-16 left-4 bg-gray-50 border-2 border-blue-400 shadow-lg rounded-lg p-12 pl-20" >
        <h2 className="relative left-12 bottom-8 text-lg font-medium">{inmate.name}</h2>
        <div className="flex items-center mt-2">
          <div className="text-gray-600">Prisoner ID:</div>
          <div className="ml-2 text-gray-800">{inmate.pid}</div>
        </div>
        <div className="flex items-center mt-2">
          <div className="text-gray-600">CID:</div>
          <div className="ml-2 text-gray-800">{inmate.cid}</div>
        </div>
        <div className="flex items-center mt-2">
          <div className="text-gray-600">DOB:</div>
          <div className="ml-2 text-gray-800">{inmate.dob}</div>
        </div>
        <div className="flex items-center mt-2">
          <div className="text-gray-600">Gender:</div>
          <div className="ml-2 text-gray-800">{inmate.gender}</div>
        </div>
      </div>
      <div className="relative bottom-60">
        <img src="https://avatars.githubusercontent.com/u/73750430?s=40&v=4" alt="inmate" className="w-32 h-32 bg-blue-500 shadow-lg rounded-full border-4 border-black" />
      </div>
    </div>
  )
}

function Results() {
  const [queryType, setQueryType] = useState('name');
  const [query, setQuery] = useState('John Doe');

  return (
    <div>
      <div>
        search
      </div>
      {getInmates("cid", "1234567890")}
    </div>
  )
}

export default function Inmates() {

  const [showResults, setShowResults] = useState(false);

  return (
    !showResults ? <InmateHome setShowResults={setShowResults} /> : <Results />
  );
} 