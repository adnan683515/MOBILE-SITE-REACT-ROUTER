import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../LayOuts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Favrioutes from '../pages/Favrioutes';
import PhoneDetails from '../pages/PhoneDetails';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <h1>Page Not Found 404 </h1>,
        children: [
            {
                index: true,
                loader: () => fetch('phone.json'),
                Component: Home
            },
            {
                path: "about",
                Component: About
            },
            {
                path: "favrioutes",
                Component: Favrioutes
            },
            {
                path: "phonedetails",
                Component: PhoneDetails
            }
        ]
    }
])
