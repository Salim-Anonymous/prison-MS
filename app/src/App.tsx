import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages'
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import InmateHome from "./pages/inmate";
import AppShell from './components/AppShell';

function App() {

    return <BrowserRouter>
        <main>
            <AppShell>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/inmate" element={<InmateHome/>} />
                </Routes>
            </AppShell>
        </main>
    </BrowserRouter>
}

export default App
