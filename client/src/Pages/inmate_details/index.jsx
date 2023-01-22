import React, { useState, useRef } from "react";
import { useQuery } from "react-query";
import InmateHome from "./inmateHome";
import { useNavigate } from "react-router-dom";
import InmateCard from "./InmateCard";

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

  console.log(data)

  //arrange the inmate cards in a grid
  return (<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
    {data.map((inmate, index) => {
      const key = `inmates-${index}`;
      return <InmateCard key={key} inmate={inmate} />
    })}
  </div>)
}


function Results() {
  const [searchTypeVisible, setSearchTypeVisible] = useState(false);
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const searchText = ["CID NO", "Prison ID", "Name"];
  // useref for the search input
  const searchInput = useRef("");
  // search the searchInput value in api with fetch
  return (
    <div className="relative flex items-center justify-center">
      <div className="fixed top-28 z-10 w-5/6 bg-white">
        <div className="flex flex-row shadow-lg px-8 items-center justify-between">
          <div>
            <button
              className="bg-transparent hover:bg-[#00437A] text-[#00437A] font-semibold hover:text-white p-2 border-2 border-[#00437A] hover:border-transparent w-40 "
              onClick={() => {
                setSearchTypeVisible(!searchTypeVisible);
              }}
            >
              Search Type
              <span className="ml-6">&#9662;</span>
            </button>
            {searchTypeVisible && (
              <div className="absolute  w-40 py-2 mt-12 bg-white rounded-md shadow-lg">
                {searchText.map((text) => (
                  <option className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer"
                    key={text + Math.random()}
                    onClick={() => {
                      setSelected(text)
                      setSearchTypeVisible(false)
                    }}>
                    {text}
                  </option>))
                }
              </div>
            )}

            <input
              placeholder={selected}
              className="border-2 border-[#00437A] p-2 w-60 focus:outline-none"
              ref={searchInput}
            />
            <button
              className="text-white border-2 border-[#00437A] bg-[#00437A] hover:bg-blue-700 p-2 w-24"
              onClick={() => {
                setShowResults(true);
              }}
            >
              Search
            </button>
          </div>


          <button
            className="relative top-3 text-white bg-[#00437A] hover:bg-blue-700 p-2 w-40 mb-8"
            onClick={() => {
              navigate("/inmate-details/add-new-inmate");
            }}
          >
            Add New Inmate
          </button>
        </div>
      </div>
      <div className="mt-20">
        {getInmates("cid", "1234567890")}
      </div>
    </div>
  )
}

export default function Inmates() {

  const [showResults, setShowResults] = useState(false);

  return (
    !showResults ? <InmateHome setShowResults={setShowResults} /> : <Results />
  );
} 