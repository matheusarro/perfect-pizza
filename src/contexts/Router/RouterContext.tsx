import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import Home from '@/pages/Home/Home';

import { ROUTES } from './routes';
import MainLayout from '@/layouts/MainLayout';

const AppRouterProvider = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: ROUTES.CATCH_ALL,
          element: <Navigate to={ROUTES.HOME} replace />,
        },
        {
          path: ROUTES.HOME,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
