import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import Additionals from '@/pages/Additionals/Additionals';

import { ROUTES } from './routes';
import MainLayout from '@/layouts/MainLayout';
import Summary from '@/pages/Summary/Summary';
import Start from '@/pages/Start/Start';
import Home from '@/pages/Home/Home';

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
        {
          path: ROUTES.START,
          element: <Start />,
        },
        {
          path: ROUTES.CUSTOMIZATION,
          element: <Additionals />,
        },
        {
          path: ROUTES.SUMMARY,
          element: <Summary />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
