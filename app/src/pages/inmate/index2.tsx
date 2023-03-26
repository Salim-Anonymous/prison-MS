import { useRef } from "react";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
const InmateHome = () => {
  const query = useRef<HTMLInputElement>(null);
  const queryType = useRef<HTMLSelectElement>(null);
  //which component to use to route to the add inmate page
  const navigate = useNavigate();

  function Search(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (query.current?.value === "" || query.current?.value === undefined)
      return;
    navigate(
      `/inmates/search/${queryType.current?.value}/${query.current?.value}`
    );
  }

  return (
    <div className="flex flex-row items-center justify-center h-full">
      <div className="flex flex-col items-center justify-start w-4/5 md:w-1/2 px-4 py-6 bg-white rounded-lg shadow-md h-11/12">
        <img src={logo} alt="logo" className="w-20" />
        <span className="text-xl font-bold text-gray-700">Search Inmates</span>
        <div className="flex flex-col items-center justify-center w-full mt-4 text-sm md:flex-row">
          <select
            ref={queryType}
            className="w-2/3 px-4 py-2 text-white bg-blue-900 border border-gray-300 rounded-sm md:w-1/3 focus:outline-none focus:border-gray-500"
          >
            <option value="name">Name</option>
            <option value="id">ID</option>
          </select>
          <input
            ref={query}
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                Search(e as any);
              }
            }}
            placeholder="Search"
            className="w-2/3 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
          />
        </div>
        <button
          className="w-1/3 px-4 py-2 mt-4 text-white bg-blue-900 rounded-sm hover:bg-blue-600 focus:outline-none"
          onClick={Search}
        >
          Search
        </button>
        <NavLink
          to="/inmate/add"
          className="w-2/3 px-4 py-2 mt-4 text-center text-white bg-blue-900 rounded-sm hover:bg-blue-600 focus:outline-none"
        >
          Add New Inmate
        </NavLink>
      </div>
    </div>
  );
};

export default InmateHome;
