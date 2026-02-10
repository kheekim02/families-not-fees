// frontend/src/pages/StateResources.jsx
import { useState } from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
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

  // Helper to turn "New York" into "new-york" for the URL
  const getStateSlug = (stateName) => stateName.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      <div className="relative bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://familiesnotfees.wordpress.com/wp-content/uploads/2024/10/image-1.jpeg" 
            className="w-full h-full object-cover opacity-20" 
            alt="State Resources Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/10" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            State Resources
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Resources on child support enforcement by state. Access detailed reports, legislation, and advocacy tools.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="max-w-xl mx-auto mb-16 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-4 border border-slate-200 rounded-full leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base shadow-sm transition-all"
            placeholder="Find your state..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredStates.map((state) => (
            <Link 
              key={state} 
              to={`/state/${getStateSlug(state)}`} // Dynamic Link
              className="group bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 text-slate-400 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <MapPin size={18} />
                </div>
                <span className="font-bold text-slate-700 group-hover:text-slate-900">{state}</span>
              </div>
              <ArrowRight size={16} className="text-slate-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>

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