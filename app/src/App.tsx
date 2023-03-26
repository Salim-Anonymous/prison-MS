import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages'
import Login from "./components/Login";
import Dashboard from "./pages/dashboard";
import InmateHome from "./pages/inmate";
import AppShell from './components/wrappers/AppShell';

function App() {

    return <BrowserRouter>
            <AppShell>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/inmates" element={<InmateHome/>} />
                </Routes>
            </AppShell>
    </BrowserRouter>
}

export default App
