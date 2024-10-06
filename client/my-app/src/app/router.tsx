import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Auth = lazy(() => import('@/pages/Auth/Auth'))
const Home = lazy(() => import('@/pages/Home/Home'))
const Registration = lazy(() => import('@/pages/Registration/Registration'))

export const Router = createBrowserRouter([
    {
        path: '/auth',
        element: (
            <Suspense>
                <Auth />
            </Suspense>
        )
    },
    {
        path: '/registration',
        element: (
            <Suspense>
                <Registration />
            </Suspense>
        )
    },
    {
        path: '/',
        element: (
            <Suspense>
                <Home />
            </Suspense>
        )
    }
])
