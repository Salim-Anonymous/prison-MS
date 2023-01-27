import { MdDashboard, MdPeopleOutline } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { GiPrisoner } from "react-icons/gi";
import { TbPrison } from "react-icons/tb";
import { BiStats } from "react-icons/bi";

export const links = [
  {
    name: "Dashboard",
    path: "/pms",
    icon: <MdDashboard size={32} />,
  },
  {
    name: "Statistics",
    path: "/pms/statistics",
    icon: <BiStats size={32} />,
  },
  {
    name: "Inmate Details",
    path: "/pms/inmate-details",
    icon: <GiPrisoner size={32} />,
  },
  {
    name: "Prison Details",
    path: "/pms/prison-details",
    icon: <TbPrison size={32} />,
  },
  {
    name: "Visitor Details",
    path: "/pms/visitor-list",
    icon: <MdPeopleOutline size={32} />,
  },
  {
    name: "Prison Act 2009",
    path: "/pms/prison-act-2009",
    icon: <GoLaw size={32} />,
  },
];
