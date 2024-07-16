import NavBar from '@/components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="pt-16">
      <NavBar />
      <div className="flex flex-col items-center">
        <div className="container p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
