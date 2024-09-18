import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/router.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  
  </StrictMode>,
)
