// frontend/src/pages/StateDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertCircle } from 'lucide-react';

const StateDetail = () => {
  const { stateId } = useParams();
  
  // Convert "new-york" back to "New York" for display
  const stateName = stateId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/state-resources" className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to All States
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            {stateName}
          </h1>
          <p className="text-lg text-slate-600">
            Resources, legislation, and data specific to child support recovery in {stateName}.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Empty State Placeholder */}
        <div className="bg-white p-12 rounded-xl border border-slate-200 text-center shadow-sm">
          <div className="inline-flex items-center justify-center p-4 bg-blue-50 text-blue-600 rounded-full mb-6">
            <FileText size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Resources Coming Soon</h2>
          <p className="text-slate-600 max-w-lg mx-auto mb-8">
            We are currently compiling specific legal documents, policy briefs, and advocacy tools for {stateName}. 
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg inline-flex items-center text-blue-800 text-sm max-w-md mx-auto text-left">
            <AlertCircle size={20} className="mr-3 flex-shrink-0" />
            <span>
              If you have resources or legislative updates for {stateName}, please <a href="mailto:dberrick@berkeley.edu" className="underline font-bold hover:text-blue-950">contact our research team</a>.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StateDetail;