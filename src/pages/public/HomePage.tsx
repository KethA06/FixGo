import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Search, ShieldCheck, Clock, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-12">
      {/* Hero Section */}
      <section className="text-center pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight sm:text-6xl mb-6">
          Sri Lanka's Intelligent <span className="text-primary-600">Service</span> Marketplace
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto mb-10">
          Find trusted professionals, book urgent repairs, or hire companies for complex projects all in one reliable platform.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/register">
            <Button size="lg">Find a Professional</Button>
          </Link>
          <Link to="/register">
            <Button variant="outline" size="lg">Become a Provider</Button>
          </Link>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
            <Search className="h-12 w-12 text-primary-500 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Matching</h3>
            <p className="text-gray-600">AI-driven search connects you with the exact right professional for your task.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
            <ShieldCheck className="h-12 w-12 text-primary-500 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Verified Experts</h3>
            <p className="text-gray-600">All providers pass strict platform verification before offering services.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
            <Clock className="h-12 w-12 text-primary-500 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Emergency Hub</h3>
            <p className="text-gray-600">Urgent requests are blasted out for immediate response from nearby experts.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
            <Star className="h-12 w-12 text-primary-500 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Review System</h3>
            <p className="text-gray-600">Transparent complaints and review system to ensure high quality standards.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
