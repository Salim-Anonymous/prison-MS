import {BiStats, GiPrisoner, MdDashboard, GoLaw, TbPrison} from "react-icons/all";

const sidebarLinks = [
    {
        title: "Dashboard",
        link: "/dashboard",
        icon: <MdDashboard size={30} />
    },
    {
        title: "Prison Act 2009",
        link: "/prison-act-2009",
        icon: <GoLaw size={30} />
    },
    {
        title: "Inmates",
        link: "/inmates",
        icon: <GiPrisoner size={30} />
    },
    {
        title: "Prison",
        link: "/prison",
        icon: <TbPrison size={30} />
    },
    {
        title: "Statistics",
        link: "/statistics",
        icon: <BiStats size={30} />
    }];

export default sidebarLinks;