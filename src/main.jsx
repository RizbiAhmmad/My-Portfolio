import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/routes';
import { SnowfallProvider } from './Snowfall/SnowfallContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnowfallProvider>
      <RouterProvider router={router} />
    </SnowfallProvider>
  </StrictMode>,
)
