import { path } from 'motion/react-client'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const MainLayout = React.lazy(() => import('./components/mainLayout'))
const BlankLayout = React.lazy(() => import('./components/blankLayout'))
const Home = React.lazy(() => import('./pages/home'))
const About = React.lazy(() => import('./pages/about'))
const Activities = React.lazy(() => import('./pages/activities'))
const Contacts = React.lazy(() => import('./pages/contact'))
const LogIn = React.lazy(() => import('./pages/login'))

const Routes = () => {
    const publicRoutes = [
        {
            id: 1,
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    id: 1,
                    path: '',
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
                    element: <Contacts />,
                    errorElement: <Error />
                },
            ]
        },
        {
            id: 2,
            element: <BlankLayout />,
            children: [
                {
                    path: '/login',
                    element: <LogIn />,
                    errorElement: <Error />
                }
            ]
        }
    ];

    const router = createBrowserRouter([
        ...publicRoutes
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default Routes