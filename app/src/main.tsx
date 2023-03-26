import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClientProvider, QueryClient } from 'react-query';
import { AuthProvider } from './context/authContext';
import { Providers } from './context/Provider';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <Providers>
        <App />
      </Providers>
    </QueryClientProvider>
  </React.StrictMode>,
)
