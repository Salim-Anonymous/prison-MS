import Admin from './pages/admin'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'
function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/pms" element={<Dashboard />} />
          <Route path="/" element={<Admin />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
