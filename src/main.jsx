import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/slick.css'
import { routes } from './utils/routes';
import { RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import { ToastProvider } from './Context/ToastContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
      <RouterProvider router={routes}/>
    </ToastProvider>
  </StrictMode>,
)
