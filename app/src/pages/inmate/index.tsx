import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Inmate = () => {

    return (
        <div>
            <SearchBar />
        </div>
    );
}

const SearchBar = () => {
    const query = useRef<HTMLInputElement>(null);
    const queryType = useRef<HTMLSelectElement>(null);

    const navigate = useNavigate();

    function Search(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (query.current?.value === "" || query.current?.value === undefined)
            return;
        navigate(
            `/inmates/search/${queryType.current?.value}/${query.current?.value}`
        );
    }
    return <div className="w-full bg-white py-3 flex items-center justify-evenly">
        <select
            ref={queryType}
            className="w-1/3 px-4 py-2 text-white bg-blue-900 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
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
            className="w-3/5 mr-4 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
        />
        {/* <button
            className="w-1/6 mr-4 px-4 py-2 text-white bg-blue-900 rounded-sm hover:bg-blue-600 focus:outline-none"
            onClick={Search}
        >
            Search
        </button>
        <NavLink
            to="/inmate/add"
            className="w-1/3 px-4 py-2 text-center text-white bg-blue-900 rounded-sm hover:bg-blue-600 focus:outline-none"
        >
            Add New Inmate
        </NavLink> */}
    </div>
}


export default Inmate;