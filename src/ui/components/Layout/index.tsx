import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen w-full bg-[var(--bg-light-color)] dark:bg-[var(--bg-dark-color)]">
      <Outlet />
    </div>
  );
}
