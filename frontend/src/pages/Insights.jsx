// frontend/src/pages/Insights.jsx
import { useEffect, useState } from 'react';

const Insights = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your FastAPI backend

    const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

    fetch(`${API_URL}/api/summary`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Is the backend running?');
        setLoading(false);
      });
  }, []);

  // Format currency helper
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Loading insights...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Data Insights</h1>
      
      {/* KPI Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Card 1: Total Collected */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
          <p className="text-sm font-medium text-gray-500 uppercase">Total Fees Collected</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">
            {formatCurrency(data.total_collected)}
          </p>
          <p className="text-xs text-gray-400 mt-1">All states, 2016-{data.latest_year}</p>
        </div>

        {/* Card 2: Latest Year */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <p className="text-sm font-medium text-gray-500 uppercase">Latest Data Year</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{data.latest_year}</p>
          <p className="text-xs text-gray-400 mt-1">Dataset currency</p>
        </div>

        {/* Card 3: Placeholder for Future Stat */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <p className="text-sm font-medium text-gray-500 uppercase">States Tracked</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">50+</p>
          <p className="text-xs text-gray-400 mt-1">National coverage</p>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">About this Data</h3>
        <p className="text-blue-900">
          This dashboard tracks the collection of fees from families involved in the foster care system. 
          The data above is dynamically aggregated from our database of over 400 records.
        </p>
      </div>
    </div>
  );
};

export default Insights;