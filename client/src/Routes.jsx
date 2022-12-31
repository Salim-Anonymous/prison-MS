import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/dashboard";
import Inmate from "./Pages/inmate_details";
import PrisonAct from "./Pages/PrisonAct";
import PrisonDetails from "./Pages/prison_details";
import Statistics from "./Pages/statistics";
import UserList from "./Pages/user_list";
import VisitorList from "./Pages/visitor_details";

import AppShell from "./components/AppShell";
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppShell><Dashboard/></AppShell>,
            errorElement: <div>404</div>
            
        },
        {
            path: "/pms",
            element: <AppShell><Dashboard/></AppShell>,
            errorElement: <div>404</div>
            
        },
        {
            path: "/prison-act-2009",
            element: <AppShell><PrisonAct/></AppShell>,
            errorElement: <div>404</div>
        },
        {
            path: "/inmate-details",
            element: <AppShell><Inmate /></AppShell>,
        },
        {
            path: "/prison-details",
            element: <AppShell><PrisonDetails /></AppShell>,
        },
        {
            path: "/statistics",
            element: <AppShell><Statistics /></AppShell>,
        },
        {
            path: "/user-list",
            element: <AppShell><UserList /></AppShell>,
        },
        {
            path: "/visitor-list",
            element: <AppShell><VisitorList /></AppShell>,
        },
    ]
)

export const Routes = () => {
    return (
        <RouterProvider router={router} />
    );
}
