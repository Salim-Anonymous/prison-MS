import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppShell from "./components/wrappers/AppShell";
import Dashboard from "./pages/dashboard";
import InmateHome from "./pages/inmate/index2";
import Search from "./pages/inmate/search";
import InmateViewPage from "./pages/inmate/view";
import AddNewInmatePage from "./pages/inmate/add";

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
  {
    path: "/inmates/view/:id",
    element: (
      <AppShell>
        <InmateViewPage />
      </AppShell>
    ),
  },
  {
    path: "/inmate/add",
    element: (
      <AppShell>
        <AddNewInmatePage />
      </AppShell>
    ),
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
