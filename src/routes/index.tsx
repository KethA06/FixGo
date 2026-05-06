import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import ProtectedRoute from '@/components/common/ProtectedRoute';
import Home from '@/pages/Home';
import LoginPage from '@/pages/auth/LoginPage';
import DashboardPage from '@/pages/dashboard/DashboardPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            // Protected Routes
            {
                path: 'dashboard',
                element: <ProtectedRoute />,
                children: [
                    {
                        index: true,
                        element: <DashboardPage />
                    }
                ]
            }
        ]
    }
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
