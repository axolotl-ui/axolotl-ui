import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './routes/home'
import { AxolotlUIProvider } from '@axolotl-ui/core'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AxolotlUIProvider>
      <RouterProvider router={router} />
    </AxolotlUIProvider>
  </React.StrictMode>
)
