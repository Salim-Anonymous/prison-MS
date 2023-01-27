import AuthContext from "../../context/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../../components/AppShell";
import { links } from "../../components/links";

const Dashboard = () => {
  const navigate = useNavigate();
  const { admin } = useContext(AuthContext);
  useEffect(() => {
    if (!admin.isAdmin) {
      navigate("/login");
    }
  }, [admin, navigate]);
  return (
    <AppShell>
      <div className="flex flex-col justify-between z-2">
        <div className="px-10 py-5 rounded-lg shadow-md">
          <img className="w-full" src="images/police.jpg" alt="logo" />
        </div>
        <div className="grid grid-cols-2 gap-2 mt-8 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4">
          {links.map((link, index) => {
            return (
              <div
                onClick={() => navigate(link.path)}
                key={link.name + index}
                className="flex flex-row justify-between items-center py-3 px-5 m-2  text-white bg-blue-800 rounded-lg shadow-md hover:bg-black hover:cursor-pointer"
              >
                <div className="flex flex-col">
                  <p className="text-xs xl:text-xl">{link.name}</p>
                </div>
                <div className="flex flex-row">
                  <span className="w-10">{link.icon}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
};

export default Dashboard;
