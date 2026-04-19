import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/dashboard',     label: 'Dashboard' },
  { to: '/gastos',        label: 'Gastos' },
  { to: '/investimentos', label: 'Investimentos' },
  { to: '/ia',            label: 'IA Chat' },
]

export default function AppLayout() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">

      <aside className="w-52 shrink-0 border-r border-gray-200 bg-white flex flex-col">
        <div className="px-5 py-5 border-b border-gray-200">
          <span className="text-base font-medium">FinanceAI</span>
        </div>
        <nav className="flex flex-col gap-1 p-3 flex-1">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-gray-100 text-gray-900 font-medium'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

    </div>
  )
}