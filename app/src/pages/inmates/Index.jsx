import AppShell from "../../components/AppShell.jsx";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext.jsx";
import { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const InmatesSearch = () => {
  const navigate = useNavigate();
  const [searchTypeVisible, setSearchTypeVisible] = useState(false);
  const searchText = [
    { label: "CID NO", code: "cid" },
    { label: "Prison ID", code: "pid" },
    {
      label: "Name",
      code: "name",
    },
  ];
  const [selected, setSelected] = useState(searchText[0]);
  const [query, setQuery] = useState("");
  let buttonEnabled = query.length > 0;

  const { admin } = useContext(AuthContext);
  useEffect(() => {
    if (!admin.isAdmin) {
      navigate("/login");
    }
  }, [admin, navigate]);

  return (
    <AppShell>
      <div className="w-full md:w-3/5 ">
        <div className="bg-white p-2 rounded-xl shadow-2xl flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center my-4">
            <img src={logo} alt="Logo" className="w-32 h-32 mb-4" />
            <h2 className="text-sm font-medium">Prison Management System</h2>
          </div>
          <div className="flex flex-col md:flex-row mt-8">
            <button
              className=" text-xs hover:bg-[#00437A] text-[#00437A] font-semibold hover:text-white p-2 border-2 border-[#00437A] hover:border-transparent"
              onClick={() => {
                setSearchTypeVisible(!searchTypeVisible);
              }}
            >
              {selected.label}
              <span className="ml-6">&#9662;</span>
            </button>
            {searchTypeVisible && (
              <div className="absolute  w-40 py-2 mt-12 bg-white rounded-md shadow-lg">
                {searchText.map((text) => (
                  <option
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer"
                    key={text + Math.random()}
                    onClick={() => {
                      setSelected(text);
                      setSearchTypeVisible(false);
                    }}
                  >
                    {text.label}
                  </option>
                ))}
              </div>
            )}

            <input
              placeholder={selected.label}
              className="border-2 border-[#00437A] p-2 focus:outline-none"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
          <button
            id="search_inmate_button"
            className="text-white bg-[#00437A] hover:bg-blue-700 p-2 mt-8 w-40 disabled:opacity-50"
            onClick={() => {
              navigate(`/pms/inmate-details/${selected.code}/${query}`);
            }}
            disabled={!buttonEnabled}
          >
            Search
          </button>
          <p className="mt-4 mb-4 font-medium text-[#00437A]">OR</p>
          <button
            className="text-white bg-[#00437A] hover:bg-blue-700 p-2 w-40 mb-8"
            onClick={() => {
              navigate("/pms/inmate-details/add-new-inmate");
            }}
          >
            Add New Inmate
          </button>
        </div>
      </div>
    </AppShell>
  );
};

export { InmatesSearch };
