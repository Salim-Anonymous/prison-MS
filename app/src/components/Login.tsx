import { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import logo from "../assets/logo.png";
import { AuthContext } from "../context/authContext";

const Login = ({closeModal}:{closeModal:()=>void}) => {

  const { login } = useContext(AuthContext);

  return (
        <div className="flex flex-col items-center w-full py-10">
          <button
            className="absolute top-0 right-0 p-4"
            onClick={closeModal}
          >
            <FaWindowClose className="text-2xl text-[#00437A]"/>
          </button>

          <img src={logo} alt="logo" className="h-32" />
          <p className="my-4 text-sm text-[#00437A]">
            Prison Management System
          </p>
          <div className="w-3/4 ">
            <div className="-space-y-px shadow-sm rounded-xl">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-8 py-4 mb-5 text-sm text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none lg:text-lg focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-8 py-4 text-sm text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none lg:text-lg focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-center my-5">
              <button
                onClick={() => {
                  login("admin-dummy-jwt")
                }}
                className="relative flex justify-center w-3/5 px-4 py-2 text-xl font-medium text-white bg-[#00437A] border border-transparent group rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 flex items-center mr-4 left-1">
                  &#128274;
                </span>
                Login
              </button>
            </div>
          </div>
        </div>
  );
};

export default Login;
