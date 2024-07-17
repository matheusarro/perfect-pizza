import NavBar from '@/components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="h-screen pt-16">
      <NavBar />
      <div className="flex h-full w-full flex-col items-center">
        <div className="container p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
