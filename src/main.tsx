import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'

import { Directions } from './routes.tsx'
import { AuthProvider } from './providers/AuthProvider.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <AuthProvider>
        <Directions />
      </AuthProvider>
    </StrictMode>
  </BrowserRouter>
)
