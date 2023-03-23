import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/authContext";
import logo from "../assets/logo.png";

const Home = () => {

    const {isLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="bg-blue-900 w-full h-screen">
            {isLoggedIn ? <View isLoggedIn message="Welcome, Go to" onClick={()=>{
                navigate("/dashboard")
            }}/>
            : <View isLoggedIn message="Welcome, login to continue" onClick={()=>{
                navigate("/login")
            }}/>}
        </div>
    )
}

const View = ({message,onClick, isLoggedIn}: {message:string,onClick:()=>void,isLoggedIn:boolean}) => {
    return (
        <div className="flex flex-col h-full items-center justify-center">
            <img
            className="w-32 h-32 mb-12"
            src={logo} alt="logo"/>
            <span className="text-white font-bold text-3xl text-center">{message}</span>
            <button 
            className="bg-black text-white px-8 py-3 rounded-md mt-4 mb-32"
            onClick={onClick}>
                <span>
                    Go to
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>

                </span>
                {!isLoggedIn?"dashboard":"login"}</button>
        </div>
    )
}

export default Home