// frontend/src/pages/StateResources.jsx
import { useState } from 'react';
import { Search, MapPin, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming"
];

const StateResources = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStates = STATES.filter(state =>
    state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* Header Section */}
      <div className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            State Resources
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Access detailed reports, legislation, and advocacy tools for individual states.
          </p>
        </div>
      </div>

      {/* Search & Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-16 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-4 border border-slate-200 rounded-full leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm transition-all"
            placeholder="Search for your state..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* State Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredStates.map((state) => (
            <Link 
              key={state} 
              to="#" // Placeholder link - we can route this to specific state pages later
              className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 text-slate-400 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <MapPin size={20} />
                </div>
                <span className="font-bold text-slate-700 group-hover:text-slate-900">{state}</span>
              </div>
              <ArrowRight size={16} className="text-slate-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>

        {/* No Results State */}
        {filteredStates.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center p-4 bg-slate-100 rounded-full mb-4">
              <Search size={24} className="text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-900">No states found</h3>
            <p className="text-slate-500">Try adjusting your search term.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default StateResources;