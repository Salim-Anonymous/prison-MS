
interface ModalProps {
    children: React.ReactNode;
    className?: string;
    open: boolean;
    closeModal: () => void;
}

const Modal = ({ children, className, open, closeModal }: ModalProps) => {
    
    return (
        <div className={`fixed top-0 left-0 w-full h-full z-50 transform transition-all duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" onClick={closeModal}></div>
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-1/2 h-3/4 bg-white rounded-lg shadow-lg ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default Modal;