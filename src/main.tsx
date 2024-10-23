import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createMemoryRouter([{
  path: '/',
  lazy: async () => ({ Component: (await import('./App.tsx')).default })
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
