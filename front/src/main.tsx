import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import PigChain from './App' // Importe seu componente PigChain
import Login from './page/login' // Importe seu componente de Login (você precisará criar este arquivo)
import DashboardPage from './page/dashboard'

// Configuração das rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <PigChain />,
  },
  {
    path: "/login",
    element: <Login />, // Você precisará criar este componente
  },
  {
    path: "/dashboard",
    element: <DashboardPage/>
  }
  // Adicione outras rotas conforme necessário
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)