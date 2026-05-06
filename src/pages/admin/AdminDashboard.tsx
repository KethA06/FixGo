

export default function AdminDashboard() {

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-red-600">Global Admin Dashboard</h1>
          <p className="text-gray-500">Platform overview and moderation control.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Moderation Queue */}
          <div className="bg-white p-5 rounded-xl border border-red-100 shadow-sm lg:col-span-2">
            <h2 className="text-lg font-bold mb-4 text-gray-800 border-b pb-2">Pending Verifications</h2>
            <div className="text-center py-6 text-gray-500">
              No providers waiting for verification.
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold mb-2 text-gray-800 border-b pb-2">System Health</h2>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total Users</span>
              <span className="font-bold text-gray-900">0</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Active Complaints</span>
              <span className="font-bold text-red-600">0</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">System Status</span>
              <span className="font-bold text-green-600 text-xs bg-green-100 px-2 py-1 rounded">ALL SYSTEMS ONLINE</span>
            </div>
          </div>
      </div>
    </div>
  );
}
