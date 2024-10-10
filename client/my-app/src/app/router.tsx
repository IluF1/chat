import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { RedirectToHomePage } from '@/components/Helpers/redirectToHomePage'
import { Spinner } from '@/components/Ui/Spinner'

const Auth = lazy(() => import('@/pages/Auth/Auth'))
const Home = lazy(() => import('@/pages/Home/Home'))
const Registration = lazy(() => import('@/pages/Registration/Registration'))

export const Router = createBrowserRouter([
    {
        path: '/auth',
        element: (
            <Suspense fallback={<Spinner />}>
                <RedirectToHomePage>
                    <Auth />
                </RedirectToHomePage>
            </Suspense>
        )
    },
    {
        path: '/registration',
        element: (
            <Suspense fallback={<Spinner />}>
                <RedirectToHomePage>
                    <Registration />
                </RedirectToHomePage>
            </Suspense>
        )
    },
    {
        path: '/',
        element: (
            <Suspense fallback={<Spinner />}>
                <Home />
            </Suspense>
        )
    }
])
