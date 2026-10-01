import './main.css'

import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const rootElement = document.getElementById('root')
createRoot(rootElement).render(
  <StrictMode>
    <Suspense fullback={null}>
      <App />
    </Suspense>
  </StrictMode>
)
