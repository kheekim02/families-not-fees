// frontend/src/components/TableauViz.jsx
import { useEffect, useRef, useState } from 'react';
import { TableauViz as TableauVizElement, TableauEventType } from '@tableau/embedding-api';

const TableauViz = ({ url }) => {
  const vizRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let viz = null;

    // 1. Cleanup function to ensure we don't have duplicate maps
    const cleanup = () => {
      if (vizRef.current) {
        vizRef.current.innerHTML = ''; // Clear the container
      }
    };

    if (vizRef.current) {
      cleanup(); // clear any existing viz before creating a new one
      setIsLoading(true);

      // 2. Configure the Tableau Element
      viz = new TableauVizElement();
      
      // OPTIMIZATION: Append embed parameters if they aren't already there
      // This forces the "raw" visualization mode which is faster and cleaner
      const separator = url.includes('?') ? '&' : '?';
      viz.src = `${url}${separator}:embed=y&:showVizHome=n&:toolbar=n`;
      
      viz.style.width = '100%';
      viz.style.height = '100%';

      // 3. Set up the Success Listener
      const handleLoad = () => {
        setIsLoading(false);
      };
      
      // We try to listen for the official "Interactive" event...
      viz.addEventListener(TableauEventType.FirstInteractive, handleLoad);

      // 4. THE SAFETY NET: Force-hide the loader after 3 seconds
      // This prevents the "infinite loading" bug if the event doesn't fire
      const safetyTimer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      // Mount it to the DOM
      vizRef.current.appendChild(viz);

      return () => {
        clearTimeout(safetyTimer);
        viz.removeEventListener(TableauEventType.FirstInteractive, handleLoad);
        cleanup();
      };
    }
  }, [url]);

  return (
    <div className="w-full h-full relative bg-white rounded-lg overflow-hidden">
      {/* Loading Skeleton */}
      <div 
        className={`absolute inset-0 z-10 bg-slate-50 flex flex-col items-center justify-center transition-opacity duration-700 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-3"></div>
        <p className="text-slate-400 text-sm font-medium tracking-wide animate-pulse">
          Loading Data...
        </p>
      </div>

      {/* The Viz Container */}
      <div ref={vizRef} className="w-full h-full" />
    </div>
  );
};

export default TableauViz;