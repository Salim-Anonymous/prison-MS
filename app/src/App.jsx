import Login from "./pages/login/login.jsx";
import { AuthProvider } from "./context/AuthContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard/Index.jsx";
import { InmatesSearch } from "./pages/inmates/Index.jsx";
import { InmatesResults } from "./pages/inmates/InmatesResults.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <div>404</div>,
  },
  {
    path: "/pms",
    element: <Dashboard />,
    errorElement: <div>404</div>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <div>404</div>,
  },
  {
    path: "/pms/inmate-details",
    element: <InmatesSearch />,
    errorElement: <div>404</div>,
  },
  {
    path: "/pms/inmate-details/:type/:query",
    element: <InmatesResults />,
  },
  {
    path: "*",
    element: <Login />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </AuthProvider>
  );
}

export default App;
