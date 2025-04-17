import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Spaces from './pages/spaces'
import LogIn from './pages/login'

const Routes = () => {
    const publicRoutes = [
        {
            id: 1,
            path: '/',
            element: <Home />
        },
        {
            id: 4,
            path: '/espacos',
            element: <Spaces />
        },
        {
            id: 5,
            path: '/login',
            element: <LogIn />
        },
    ];

    const router = createBrowserRouter([
        ...publicRoutes
    ])

    return (
        <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    )
}

export default Routes