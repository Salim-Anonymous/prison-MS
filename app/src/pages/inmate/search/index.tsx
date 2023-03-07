import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useQuery } from "react-query";
import Loader from "../../../components/Loader";
import Spinner from "../../../components/Spinner";
import InmateCard from "../../../components/InmateResultCard";

type QueryParams = {
  queryType: string;
  query: string;
};

const Search = () => {
  const { queryType, query } = useParams<QueryParams>();
  const [queryText, setQueryText] = useState<string | undefined>(query);
  const [queryTypeText, setQueryType] = useState<string | undefined>(queryType);
  const isBiggerThanTablet = useMediaQuery({ query: "(min-width: 768px)" });
  localStorage.setItem("token", "token");

  const { isLoading, isRefetching, error, data, refetch } = useQuery(
    "inmatesQuery",
    () =>
      fetch(`http://localhost:3000/api/inmates/${queryTypeText}/${queryText}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json())
  );

  return (
    <div>
      <div className="fixed right-0 flex items-center justify-start w-full h-12 bg-white shadow-md lg:w-3/4 top-20">
        <div className="flex items-center justify-between w-full px-4 py-2">
          <select
            value={queryTypeText}
            onChange={(e) => {
              setQueryType(e.target.value);
              console.log(e.target.value);
              queryText?.length !== 0 && refetch();
            }}
            className="w-1/3 px-2 py-1 text-white bg-blue-900 border border-gray-300 rounded-sm md:w-2/12 focus:outline-none"
          >
            <option>name</option>
            <option>id</option>
          </select>
          <input
            value={queryText}
            type="search"
            onChange={(e) => {
              setQueryText(e.target.value);
              console.log(e.target.value);
              // @ts-ignore
              queryText?.length > 0 && refetch();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // @ts-ignore
                queryText?.length >= 1 && refetch();
              }
            }}
            className="w-2/3 px-2 py-1 ml-2 border border-gray-300 rounded-sm md:w-7/12 focus:outline-none"
            placeholder="Search"
          />
          {isBiggerThanTablet && (
            <button className="w-3/12 px-2 py-1 ml-2 text-black bg-white border border-black rounded-sm hover:bg-black hover:text-white">
              <span className="mr-2 text-xl">+</span>
              Add New Inmate
            </button>
          )}
        </div>
      </div>
      <div className="mt-16 flex items-center justify-center">
        {isLoading && <Loader />}
        {data && Array.isArray(data) && (
          <div className="flex flex-col items-center justify-center w-full h-full">
            {isRefetching ? (
              <Spinner />
            ) : data.length === 0 ? (
              <div>No Records</div>
            ) : (
              <div className="grid grid-cols-1 gap-10">
                {data.map((inmate) => (
                  <InmateCard key={inmate.CIDNo} inmate={inmate} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
