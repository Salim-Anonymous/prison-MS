import { Login } from "./Pages/Login";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import Admin from "./Pages/Admin";
import { Routes } from "./Routes";
import AppShell from "./components/AppShell";

function App(props) {
  const { admin } = props;
  const [adminState, setAdminState] = useRecoilState(admin);

  return adminState ? <Login setAdminState={setAdminState} /> : <AppShell/>;
}

export default App;
