import { useState } from "react";

interface MenuOpen {
    menu: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
    openMenu: () => void;
}

export const useMenuOpen = () => {
    const [menu, setMenuOpen] = useState(false);
    const toggleMenu = ()=>setMenuOpen(!menu);
    const closeMenu = ()=>setMenuOpen(false);
    const openMenu = ()=>setMenuOpen(true);

    const menuOpen: MenuOpen = {
        menu,
        toggleMenu,
        closeMenu,
        openMenu,
    };

    return menuOpen;
}
