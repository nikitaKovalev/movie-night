import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { routes } from './routes.ts'
import { QueryClientProvider } from '@tanstack/react-query'
import { QUERY_CLIENT } from './core/constants/query-client.ts'
import { WatchlistProvider } from './core/hooks/watchlist/WatchlistProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={QUERY_CLIENT}>
      <WatchlistProvider>
        <RouterProvider router={routes}></RouterProvider>
      </WatchlistProvider>
    </QueryClientProvider>
  </StrictMode>,
)
