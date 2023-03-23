import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { AuthContext } from "../context/authContext";

const Login = () => {

  const navigate = useNavigate();
  const { login, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="w-full h-full">
      <div className="flex justify-center bg-[#00437A] h-40">
        <div className="z-0 flex flex-col items-center w-4/5 py-10 mt-10 shadow-2xl md:w-3/5 lg:w-1/3 bg-gray-50 h-max rounded-xl">
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
      </div>
    </div>
  );
};

export default Login;
