import { useAuthStore } from '../../store/useAuthStore';

export default function CustomerDashboard() {
  const user = useAuthStore(state => state.user);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome, {user?.firstName || 'Customer'}!</h1>
          <p className="text-gray-500">Manage your bookings, quotes, and profile here.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 col-span-2">
          <h2 className="text-lg font-bold mb-4">Recent Bookings</h2>
          <div className="text-center p-12 bg-gray-50 rounded-lg text-gray-500 border border-dashed border-gray-300">
            No active bookings right now.
            <br/>(This component will map booking data from the backend)
          </div>
        </div>
        
        <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 flex flex-col items-center text-center justify-center space-y-4">
           <h3 className="text-lg font-bold text-primary-900">Need immediate help?</h3>
           <p className="text-sm text-primary-700">Use our emergency broadcast system to alert nearby professionals.</p>
           <button className="bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 w-full">
             Raise Emergency
           </button>
        </div>
      </div>
    </div>
  );
}
