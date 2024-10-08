import './assets/styles/reset.css'
import './assets/styles/index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { Router } from './router'
import { Store } from './store'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={Store}>
            <RouterProvider router={Router} />
        </Provider>
    </StrictMode>
)
