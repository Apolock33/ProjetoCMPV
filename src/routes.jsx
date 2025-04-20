import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import LogIn from './pages/login'
import About from './pages/about'
import Activities from './pages/activities'
import Error from './pages/error'

const Routes = () => {
    const publicRoutes = [
        {
            id: 1,
            path: '/',
            element: <Home />,
            errorElement: <Error />
        },
        {
            id: 2,
            path: '/sobrenos',
            element: <About />,
            errorElement: <Error />
        },
        {
            id: 3,
            path: '/atividades',
            element: <Activities />
        },
        {
            id: 4,
            path: '/contatos',
            element: <About />,
            errorElement: <Error />
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