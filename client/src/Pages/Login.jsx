import React from "react";
import logo from "../assets/logo.png";
import login from "../styles/login.css";

export const Login = () => {
  return (
    <div className="form">
      <div id="line"></div>
      <form>
        <img src={logo} alt="logo" id="login_logo" />
        <h5>Prison Management System</h5>
        <h3>Log In</h3>
        <input type="email" placeholder="Enter your email address" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
