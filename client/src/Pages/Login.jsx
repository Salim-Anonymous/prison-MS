import React from "react";
import logo from "../assets/logo.png";

export const Login = (props) => {
  const { setAdminState } = props;

  return (
    <div className="w-full h-full">
      <div className="flex justify-center bg-[#00437A] h-96 sm:h-36">
        <div className="z-0 flex flex-col items-center w-4/5 pt-10 pb-10 mt-24 shadow-2xl sm:w-3/5 lg:w-2/5 bg-gray-50 h-max rounded-xl">
          <img src={logo} alt="logo" className="h-96 sm:h-32" />
          <h6 className="m-6 text-3xl text-[#00437A] sm:text-xl">
            Prison Management System
          </h6>
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
                  className="relative block w-full px-12 py-8 text-3xl text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none sm:text-xl sm:px-6 sm:py-2 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 mb-5"
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
                  className="relative block w-full px-12 py-8 text-3xl text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none sm:text-xl sm:px-6 sm:py-2  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-5">
              <button
                onClick={() => {
                  setAdminState(true);
                }}
                className="relative flex justify-center w-3/5 px-16 py-6 text-3xl font-medium text-white bg-[#00437A] border border-transparent sm:text-xl sm:w-2/5 sm:px-10 sm:py-3 group rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
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
