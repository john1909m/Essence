import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/slick.css'
import { routes } from './utils/routes';
import { RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import { ToastProvider } from './Context/ToastContext';
import { ThemeProvider } from './Context/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ToastProvider>
        <RouterProvider router={routes}/>
      </ToastProvider>
    </ThemeProvider>
  </StrictMode>,
)
