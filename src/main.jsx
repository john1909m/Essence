import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css'
import { routes } from './utils/routes';
import { RouterProvider } from 'react-router-dom';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={routes}/>
  </StrictMode>,
)
