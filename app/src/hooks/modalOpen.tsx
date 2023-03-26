import { useState } from "react";

interface ModalOpen {
    modal: boolean;
    toggleModal: () => void;
    closeModal: () => void;
    openModal: () => void;
}

export const useModalOpen = () => {
    const [modal, setModalOpen] = useState(false);
    const toggleModal = ()=>setModalOpen(!modal);
    const closeModal = ()=>setModalOpen(false);
    const openModal = ()=>setModalOpen(true);

    const modalOpen: ModalOpen = {
        modal,
        toggleModal,
        closeModal,
        openModal,
    };

    return modalOpen;
}