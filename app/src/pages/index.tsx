import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/authContext";
import logo from "../assets/logo.png";
import Modal from "../components/common/Modal";
import { useModalOpen } from "../hooks/modalOpen";
import Login from "../components/Login";
import { BiLogInCircle } from "react-icons/bi";

const Home = () => {

    const {isLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const {openModal,closeModal,modal,toggleModal} = useModalOpen();

    return (
        <div
         className="bg-blue-900 w-full h-screen"
        >
            <div className="flex flex-col items-center justify-center h-full">
                <img
                    src={logo}
                    alt="logo"
                    className="w-32 h-32"
                />
                <p className="text-2xl text-white">
                    Prison Management System
                </p>
                <button
                    onClick={toggleModal}
                    className="px-3 py-2 mt-10 text-lg font-medium text-white bg-[#111d27] rounded-md hover:bg-blue-700"
                >
                    <span className="text-white text-2xl">
                        <BiLogInCircle className="mr-2 inline"/>
                        Login
                    </span>
                        
                </button>

            </div>
            <Modal open={modal} closeModal={closeModal}>
                <Login
                    closeModal={closeModal}
                />
            </Modal>
        </div>
    )
}



export default Home