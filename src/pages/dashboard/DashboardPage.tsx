import { useAuthStore } from '@/store/useAuthStore';

export default function DashboardPage() {
    const { user } = useAuthStore();

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold mb-2">Welcome back!</h2>
                <p className="text-gray-600">
                    You are logged in as: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-primary-700">{user?.email}</span>
                </p>
                <p className="text-gray-600 mt-2">Active Roles: {user?.roles.join(', ')}</p>
            </div>
        </div>
    );
}
