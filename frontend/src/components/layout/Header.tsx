import { NavLink, useLocation } from 'react-router-dom';
import { Bell, CalendarDays } from 'lucide-react';

const navItems = [
  { to: '/dashboard', label: 'Overview' },
  { to: '/employees', label: 'Team' },
  { to: '/attendance', label: 'Time Logs' },
];

export default function Header() {
  const { pathname } = useLocation();
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <header className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
            AP
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-gray-900 truncate">AttendPro</p>
            <p className="text-[11px] text-gray-400 truncate">Attendance &amp; HR workspace</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center gap-1 px-1 py-1 rounded-full bg-gray-100 text-sm">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full font-medium transition-colors ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 text-xs text-gray-500">
            <CalendarDays size={14} className="text-primary-600" />
            <span>{today}</span>
          </div>
          <button className="relative p-2 rounded-full text-gray-500 hover:bg-gray-100">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-primary-600 rounded-full" />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="sm:hidden border-t border-gray-200 bg-white">
        <div className="flex justify-around px-1 py-1 text-xs">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-2 flex-1 text-center rounded-lg mx-0.5 font-medium transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
