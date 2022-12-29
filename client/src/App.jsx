import { Login } from "./Pages/Login";
import { useRecoilState } from 'recoil';
import user from "./recoil/user";
import { Routes } from "./Routes";

function App(props) {

  const [adminState, setAdminState] = useRecoilState(user);

  return !adminState ? <Login setAdminState={setAdminState} /> : <Routes />;
}

export default App;
