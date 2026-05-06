import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';

// Public Pages
import HomePage from '../pages/public/HomePage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';

// Dashboards (Role protected)
import CustomerDashboard from '../pages/customer/CustomerDashboard';
import ProviderDashboard from '../pages/provider/ProviderDashboard';
import CompanyDashboard from '../pages/company/CompanyDashboard';
import AdminDashboard from '../pages/admin/AdminDashboard';

// Shared Layout
import AppLayout from '../components/layout/AppLayout';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/unauthorized" element={
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <h1 className="text-4xl font-bold text-gray-800">403</h1>
              <p className="text-gray-600 mt-2">You do not have permission to view this page.</p>
            </div>
        } />

        {/* Customer Routes */}
        <Route path="/customer">
          <Route path="dashboard" element={
            <ProtectedRoute allowedRoles={['ROLE_CUSTOMER']}>
              <CustomerDashboard />
            </ProtectedRoute>
          } />
          {/* Add more customer routes here */}
        </Route>

        {/* Provider Routes */}
        <Route path="/provider">
          <Route path="dashboard" element={
            <ProtectedRoute allowedRoles={['ROLE_SERVICE_PROVIDER']}>
              <ProviderDashboard />
            </ProtectedRoute>
          } />
        </Route>

        {/* Company Routes */}
        <Route path="/company">
          <Route path="dashboard" element={
            <ProtectedRoute allowedRoles={['ROLE_COMPANY']}>
              <CompanyDashboard />
            </ProtectedRoute>
          } />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin">
          <Route path="dashboard" element={
            <ProtectedRoute allowedRoles={['ROLE_ADMIN']}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
