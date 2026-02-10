import { Link } from 'react-router-dom';
import { ArrowRight, Map as MapIcon, BarChart2, FileText } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24 md:py-32">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-tight mb-6">
            Justice shouldn't come with a price tag.
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            States collect millions from low-income families in the foster care system, undermining reunification and keeping families in debt. We visualize the data to advocate for change.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/map" className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition shadow-lg hover:shadow-blue-500/25">
              View the Maps <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="flex items-center gap-2 px-8 py-4 bg-transparent border border-slate-600 hover:bg-slate-800 text-white rounded-full font-bold transition">
              Learn the Issue
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS (Now separated from Hero) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Explore the Platform</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MapIcon size={32} className="text-blue-600" />}
              title="Interactive Maps"
              desc="Explore state-by-state policies on child support enforcement and debt cancellation."
              link="/map"
            />
            
            <FeatureCard 
              icon={<BarChart2 size={32} className="text-purple-600" />}
              title="Data Insights"
              desc="Analyze the financial impact of fees on families and the efficiency of collections."
              link="/insights"
            />

            <FeatureCard 
              icon={<FileText size={32} className="text-emerald-600" />}
              title="State Resources"
              desc="Deep dives into legislation, reports, and advocacy tools for your specific state."
              link="/state-resources"
            />
          </div>
        </div>
      </section>

      {/* MISSION / STATS SECTION */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Why "Families Not Fees"?
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  When children are placed in foster care, parents are often billed by the government for the cost of their child's care. These fees disproportionately affect low-income families and families of color.
                </p>
                <p>
                  Research shows that charging parents for foster care delays reunification, increases time in care, and pushes families deeper into poverty—often for pennies on the dollar in actual government revenue.
                </p>
                <Link to="/about" className="inline-block text-blue-600 font-bold hover:underline mt-2">
                  Read the full methodology →
                </Link>
              </div>
            </div>

            {/* Simple Stat Box Visual */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
               <div className="border-l-4 border-blue-600 pl-6 mb-8">
                 <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Pre-Pandemic Annual Collections</p>
                 <p className="text-5xl font-bold text-slate-900">~$70 Million</p>
                 <p className="text-slate-600 mt-2">Collected from parents annually before recent reforms.</p>
               </div>
               
               <div className="border-l-4 border-green-500 pl-6">
                 <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Impact</p>
                 <p className="text-2xl font-bold text-slate-900">Cost Recovery vs. Family Stability</p>
                 <p className="text-slate-600 mt-2">
                   In many states, the administrative cost to collect these fees exceeds the revenue generated.
                 </p>
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc, link }) => (
  <Link to={link} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col items-center text-center group">
    <div className="p-4 bg-blue-50 rounded-full mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 mb-6 leading-relaxed flex-1">
      {desc}
    </p>
    <div className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
      Explore <ArrowRight size={16} />
    </div>
  </Link>
);

export default Home;