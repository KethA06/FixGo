import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../../components/ui/Button';

export default function CompanyDashboard() {
  const user = useAuthStore(state => state.user);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Company Portal</h1>
          <p className="text-gray-500">Managing projects and contractors as {user?.firstName}.</p>
        </div>
        <Button>Post a New Project</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold mb-4">Active Projects</h2>
            <div className="text-center p-8 bg-gray-50 rounded-lg text-gray-500 border border-dashed border-gray-300">
              You haven't posted any B2B projects yet.
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold mb-4">Recent Applications</h2>
            <div className="text-center p-8 bg-gray-50 rounded-lg text-gray-500 border border-dashed border-gray-300">
              No service providers have applied to your projects.
            </div>
          </div>
      </div>
    </div>
  );
}
