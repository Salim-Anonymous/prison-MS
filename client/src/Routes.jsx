import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Admin  from "./Pages/Admin";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Admin />,
            
        }
    ]
)

export const Routes = () => {
    return (
        <RouterProvider router={router} />
    );
}
