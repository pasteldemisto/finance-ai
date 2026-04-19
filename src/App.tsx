import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import Dashboard from './pages/Dashboard'
import Gastos from './pages/Gastos'
import Investimentos from './pages/Investimentos'
import IAChat from './pages/IAChat'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="gastos" element={<Gastos />} />
        <Route path="investimentos" element={<Investimentos />} />
        <Route path="ia" element={<IAChat />} />
      </Route>
    </Routes>
  )
}