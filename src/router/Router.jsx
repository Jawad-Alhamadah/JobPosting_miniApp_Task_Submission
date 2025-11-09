import React from 'react'
import * as ReactDOM from "react-dom/client";
import JobPostingPage from '../assets/pages/JobPostingPage';
import Home from '../assets/pages/HomePage';
import ErrorPage from '../assets/pages/ErrorPage';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage />,
    },

    {
        path:"/Job/:id",
        element: <JobPostingPage/>,
        errorElement: <ErrorPage />
    }
    ,{
       
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