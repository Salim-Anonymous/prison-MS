import AuthContext from "../../context/AuthContext"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const { admin } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!admin.isAdmin) {
            navigate("/")
        }
    }, [admin, navigate])

    return <div>Dashboard</div>
}

export default Dashboard