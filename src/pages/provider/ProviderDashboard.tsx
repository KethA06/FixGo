import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../../components/ui/Button';

export default function ProviderDashboard() {
  const user = useAuthStore(state => state.user);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Provider Dashboard</h1>
          <p className="text-gray-500">Welcome back, {user?.firstName}!</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">Manage Services</Button>
            <Button>Update Availability</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Placeholder Stats */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center">
            <span className="text-sm text-gray-500 font-medium">Active Bookings</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">0</span>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center">
            <span className="text-sm text-gray-500 font-medium">Pending Quotes</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">2</span>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center">
            <span className="text-sm text-gray-500 font-medium">Profile Views</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">14</span>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center">
            <span className="text-sm text-gray-500 font-medium">Average Rating</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">0.0</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg font-bold mb-4">Urgent Local Emergencies</h2>
          <div className="text-center p-8 bg-gray-50 rounded-lg text-gray-500 border border-dashed border-gray-300">
            No active emergencies in your area.
          </div>
      </div>
    </div>
  );
}
