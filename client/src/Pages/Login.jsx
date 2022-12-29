import React from "react";
import logo from "../assets/logo.png";

export const Login = (props) => {
  const { setAdminState } = props;

  return (<div className="h-full w-full">
    <div className="flex justify-center h-32 bg-blue-800">
      <div className="flex flex-col z-0 shadow-2xl mt-20 bg-gray-50 h-max w-1/3 pb-10 pt-10 items-center rounded-md">
        <img src={logo} alt="logo" className="h-24" />
        <h6 className="text-blue-800 m-6">Prison Management System</h6>
        <form className=" w-3/4">
          <div className="-space-y-px rounded-md shadow-sm">
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
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-5">
              <button
                type="submit"
                className="group relative flex w-3/5 justify-center rounded-xl border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                  &#128274;
                </span>
                Login
              </button>
            </div>
        </form>
      </div>
    </div>
  </div>
  );

};
