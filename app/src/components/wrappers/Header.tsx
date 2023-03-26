import { useContext } from "react";
import logo from "../../assets/logo.png";
import { BreakPointsContext } from "../../context/breakPointsContext";
import LogoWithTitle from "../common/LogoWithTitle";
import { UserDropDown } from "../common/UserMenuDropDown";

const Header = () => {
    const { isDesktop } = useContext(BreakPointsContext);
    return (
        <header className="fixed top-0 left-0 w-full px-2 md:px-10 h-20 flex items-center justify-between lg:justify-end bg-white">
            {!isDesktop &&<LogoWithTitle
                title="Prison Management System"
                logo={<img src={logo} alt="logo" className="w-10 h-10" />}
            /> }
            <UserDropDown />
        </header>
    );
};

export default Header;