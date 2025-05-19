import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <Outlet />
    </div>
  );
}
