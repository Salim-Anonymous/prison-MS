import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import AppShell from "./components/AppShell";
import Dashboard from "./pages/dashboard";
import InmateHome from "./pages/inmate";
import { Children } from "react";
import Search from "./pages/inmate/search";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppShell>
        <Dashboard />
      </AppShell>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <AppShell>
        <Dashboard />
      </AppShell>
    ),
  },
  {
    path: "/inmates",
    element: (
      <AppShell>
        <InmateHome />
      </AppShell>
    ),
  },
  {
    path: "/inmates/search/:queryType/:query",
    element: (
      <AppShell>
        <Search />
      </AppShell>
    ),
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
