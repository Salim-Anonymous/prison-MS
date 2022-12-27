import { useState } from "react";
import "./App.css";
import { Login } from "./Pages/Login";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import Admin from "./Pages/Admin";

function App(props) {
  const { admin } = props;
  const [adminState, setAdminState] = useRecoilState(admin);

  return !adminState ? <Login setAdminState={setAdminState} /> : <Admin/>;
}

export default App;
