import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex gap-6">
          {/* Main content */}
          <main className="flex-1 min-w-0">
            <div className="page-enter">
              <Outlet />
            </div>
          </main>

          {/* Right insight rail (new aside) */}
          <aside className="hidden xl:flex w-72 flex-col gap-4">
            <section className="card p-4">
              <h2 className="text-sm font-semibold text-gray-900 mb-1">Today at a glance</h2>
              <p className="text-xs text-gray-500">
                Use the overview, team, and time logs pages to keep track of check-ins and
                attendance patterns across your organization.
              </p>
            </section>
            <section className="card p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Shortcuts</h3>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Go to <span className="font-medium">Time Logs</span> to review attendance.</li>
                <li>• Open <span className="font-medium">Team</span> to add or update members.</li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
