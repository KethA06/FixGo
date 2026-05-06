import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../ui/Button';
import { Wrench } from 'lucide-react';

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardLink = () => {
    if (!user) return '/';
    if (user.roles.includes('ROLE_ADMIN')) return '/admin/dashboard';
    if (user.roles.includes('ROLE_COMPANY')) return '/company/dashboard';
    if (user.roles.includes('ROLE_SERVICE_PROVIDER')) return '/provider/dashboard';
    return '/customer/dashboard';
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">FixGo</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8 ml-10">
              <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium text-sm">Services</Link>
              <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium text-sm">How it Works</Link>
              <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium text-sm">Companies</Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to={getDashboardLink()}>
                  <Button variant="ghost" className="hidden sm:inline-flex">Dashboard</Button>
                </Link>
                <div className="flex items-center gap-3 border-l border-gray-200 pl-4 ml-2">
                  <span className="text-sm font-medium text-gray-700 hidden sm:block">
                    {user?.firstName || user?.email.split('@')[0]}
                  </span>
                  <Button variant="outline" size="sm" onClick={handleLogout}>Log out</Button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Log in</Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary">Sign up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
