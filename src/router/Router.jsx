import React from 'react'
import * as ReactDOM from "react-dom/client";
import JobPostingPage from '../assets/pages/JobPostingPage';
import Home from '../assets/pages/HomePage';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },

    {
        path:"/Job/:id",
        element: <JobPostingPage/>
    }
]);

function Router() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}

export default Router