import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const NavLink = ({ to, label }) => (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        isActive(to)
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-serif font-bold text-slate-900 tracking-tight">
              Families Not Fees
            </Link>
          </div>

          {/* Desktop Menu - UPDATED LINKS */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/policy-basics" label="Policy Basics" />
            <NavLink to="/media" label="Media" />
            <NavLink to="/state-resources" label="State Resources" />
            <NavLink to="/research" label="Research" />
            <NavLink to="/how-to-help" label="How to Help" />
            <NavLink to="/about" label="About" />
            
            <Link 
              to="/map" 
              className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition shadow-sm"
            >
              View Maps
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - UPDATED LINKS */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/policy-basics" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Policy Basics</Link>
            <Link to="/media" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Media</Link>
            <Link to="/state-resources" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">State Resources</Link>
            <Link to="/research" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Research</Link>
            <Link to="/how-to-help" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">How to Help</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">About</Link>
            <Link to="/map" className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 font-bold bg-blue-50">View Maps</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;