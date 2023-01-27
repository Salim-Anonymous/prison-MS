import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext.jsx";
import AppShell from "../../components/AppShell.jsx";
import { useQuery } from "react-query";

const getInmates = ({ queryType, query }) => {
  const { data, status } = useQuery(`${queryType}-${query}`, () =>
    fetch(`http://localhost:3000/api/inmates/${queryType}/${query}`).then(
      (res) => res.json()
    )
  );
  console.log(data);
  return data;
};
const InmatesResults = () => {
  const { type, query } = useParams();
  const navigate = useNavigate();
  const { admin } = useContext(AuthContext);
  useEffect(() => {
    if (!admin.isAdmin) {
      navigate("/login");
    }
  }, [admin, navigate]);
  getInmates({ queryType: type, query: query });
  return (
    <AppShell>
      <div>{`${type}=>${query}`}</div>
    </AppShell>
  );
};
export { InmatesResults };
