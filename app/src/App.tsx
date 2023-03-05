import {useState} from 'react'
import Login from "./pages/Login";
import Routes from "./routes";

function App() {

    const [login, setLogin] = useState(false);

    return (
        <div className="">
            {login ? <Routes/> : <Login setAdminState={setLogin}/>}
        </div>
    )
}

export default App
