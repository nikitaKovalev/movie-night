import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { routes } from './routes.ts'
import { QueryClientProvider } from '@tanstack/react-query'
import { QUERY_CLIENT } from './core/constants/query-client.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={QUERY_CLIENT}>
      <RouterProvider router={routes}></RouterProvider>
    </QueryClientProvider>
  </StrictMode>,
)
