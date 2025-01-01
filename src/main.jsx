import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import  router  from './routers/router'; // Import the router
import { RouterProvider } from 'react-router-dom'; // Import RouterProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
