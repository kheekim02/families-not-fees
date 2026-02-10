// frontend/src/pages/Maps.jsx
import { useState } from 'react';
import TableauViz from '../components/TableauViz';
import { Map, Scale, FileText, AlertCircle, ChevronDown, ChevronRight } from 'lucide-react';

const Maps = () => {
  const [activeSection, setActiveSection] = useState('collections');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      
      {/* SIDEBAR NAVIGATION (Sticky) */}
      <aside className="hidden lg:flex flex-col w-72 bg-slate-900 text-white h-screen sticky top-0 border-r border-slate-800 shadow-xl z-20 overflow-y-auto">
        <div className="p-8">
          <h1 className="text-xl font-bold font-serif tracking-wide text-blue-100 mb-2">
            Data Explorer
          </h1>
          <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">
            Families Not Fees
          </p>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <NavButton 
            id="collections" 
            label="Collections Data" 
            icon={<Map size={18} />} 
            active={activeSection === 'collections'} 
            onClick={scrollToSection} 
          />
          <NavButton 
            id="policy" 
            label="Policy Changes" 
            icon={<Scale size={18} />} 
            active={activeSection === 'policy'} 
            onClick={scrollToSection} 
          />
          <NavButton 
            id="arrears" 
            label="Arrears Forgiveness" 
            icon={<FileText size={18} />} 
            active={activeSection === 'arrears'} 
            onClick={scrollToSection} 
          />
        </nav>

        <div className="p-8 border-t border-slate-800">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <h4 className="text-sm font-bold text-blue-200 mb-1 flex items-center gap-2">
              <AlertCircle size={14} /> Need Help?
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              If you are researching a specific state, visit our State Resources page for detailed reports.
            </p>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 md:p-12 lg:p-16 overflow-x-hidden">
        <div className="max-w-[85rem] mx-auto space-y-20">
          
          {/* SECTION 1: Collections */}
          <section id="collections" className="scroll-mt-8">
            <SectionHeader 
              title="How much do states collect from low-income parents whose children are placed in foster care?" 
              subtitle="Annual collection of child support ($) for foster care cases by state."
            />
            
            <div className="space-y-6">
              {/* Map 1 */}
              <MapCard 
                title="Annual collection of child support ($) for foster care cases by state." 
                url="https://public.tableau.com/views/2024childcaredistributedfostercarecollections/Childsupportcollectionbystate2023"
                defaultOpen={false}
              >
                 <p className="text-sm text-slate-600 mb-4">
                   Data are derived from the Office of Child Support Enforcement (2024). <a href="#" className="text-blue-600 underline">Preliminary report FY 2023. Table P-12</a>
                 </p>
              </MapCard>

              {/* Map 2 */}
              <MapCard 
                title="Percent Change (2016-2024)" 
                url="https://public.tableau.com/views/StatebyStatePercentChangefrom2016to2024_17688572605650/Dashboard1"
                defaultOpen={false}
              >
                 <div className="mb-6 space-y-3 text-slate-700">
                    <p>
                      Some states have reduced foster care collections substantially in recent years. 
                      States showing <span className="font-bold text-red-700">red or dark red</span> have reduced collections most notably; 
                      states showing <span className="font-bold bg-white px-1 border">white</span> have not changed the amount of foster care collected; 
                      states in <span className="font-bold text-blue-600">blue</span> have seen increases in child support collections since 2016.
                    </p>
                    <p className="text-sm bg-blue-50 p-3 rounded border border-blue-100">
                      Prior to the Covid-19 pandemic, states collected approximately $70M per year from parents whose children were in foster care. 
                      During the pandemic, collections rose, largely due to states recouping federal Covid-19 recovery funds. 
                      Following federal guidance issued in 2022, collections in many states have fallen.
                    </p>
                </div>
              </MapCard>

              {/* NEW MAP ADDED HERE */}
              <MapCard 
                title="U.S. Foster Care Collections 2016 – 2024" 
                url="https://public.tableau.com/views/U_S_FosterCareCollections20162024/Dashboard1"
                defaultOpen={false}
              />

              {/* Map 3 - THE LONG ONE */}
              <MapCard 
                title="Additional State Level Foster Care Collections 2024" 
                url="https://public.tableau.com/views/2024CollectionsbyState/Dashboard2"
                defaultOpen={false}
                height="h-[1000px]"
              >
                <p className="mb-4 text-slate-700">
                  Some states have adjusted policy or practice to completely eliminate all child support collections on foster care cases. Other states collect millions. In most states, collections reflect a combination of new cases – parents whose children were recently placed in foster care – and arrears – cases of children who were previously in foster care but the parent continues to owe a debt to the state. Some of these debts may last decades.
                </p>
              </MapCard>
            </div>
          </section>


          {/* SECTION 2: Policy Changes */}
          <section id="policy" className="scroll-mt-8 border-t border-gray-200 pt-16">
            <SectionHeader 
              title="Which states or jurisdictions have changed laws, regulations, or practice on child support for foster care cases?" 
              subtitle="Changes in child support laws or regulations in response to the federal guidance."
            />

            <div className="space-y-6">
              {/* Map 4 */}
              <MapCard 
                title="Changes in child support laws or regulations in response to the federal guidance." 
                url="https://public.tableau.com/views/StatesThatHaveChangedLawsRegulationsorPracticeonChildSupportReferrals/Dashboard2"
                defaultOpen={false}
              >
                <div className="mb-6">
                  <p className="text-sm text-slate-600 mb-4">
                     Please see the <a href="#" className="text-blue-600 underline">State Resources page</a> for additional information about individual states.
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h4 className="font-serif font-bold text-lg text-slate-900 mb-4">How the New Policies Restrict Child Support Enforcement:</h4>
                    <ul className="space-y-3">
                       <PolicyItem state="California" desc="Child support enforcement applies only to parents with income at least 400% above the poverty line." />
                       <PolicyItem state="Colorado" desc="Changes the default to no referral and counties must justify a referral." />
                       <PolicyItem state="Georgia" desc="Child support referral applies only to parents in case of abandonment." />
                       <PolicyItem state="Michigan" desc="No new child support enforcement orders at point of placement." />
                       <PolicyItem state="Montana" desc="Parent contribution must be in the best interest of the child and not impede reunification efforts." />
                       <PolicyItem state="New Jersey" desc="The Department of Children and Families ceased making referrals in 2023. Legislation passed in 2024 (Bill S2331) made these changes permanent through statute. The legislation also cancelled arrears." />
                       <PolicyItem state="New York City" desc="Ceased child support enforcement." />
                       <PolicyItem state="North Carolina" desc="Ceased referrals and arrears as of 2025. See HB 612." />
                       <PolicyItem state="Philadelphia" desc="Ceased child support enforcement." />
                       <PolicyItem state="Washington" desc="Child support enforcement applies only to parents in case of abandonment of a child." />
                       <PolicyItem state="Wisconsin" desc="Milwaukee and Dane Counties ceased collections on new referrals in 2025." />
                    </ul>
                  </div>
                </div>
              </MapCard>
              
              {/* Map 5 */}
              <MapCard 
                title="States that have or have recently had pending legislation or regulations under consideration" 
                url="https://public.tableau.com/views/StatesThatHaveorHaveRecentlyHadPendingLegislationorRegulationsUnderConsideration/Statesthathavechangedlawsorregulationsonchildsupportenforcement2"
                defaultOpen={false}
              >
                 <div className="mb-4 space-y-2 text-slate-700">
                    <p><strong>Massachusetts:</strong> Although the state allows for TPR in statute, it does not happen in practice.</p>
                    <p><strong>Vermont:</strong> Legislation passed in 2024 clarifies that "The Department’s Family Services Division shall not consider payment of child support to the Family Services Division to offset the cost of foster care as a factor in a petition to terminate parental rights."</p>
                 </div>
              </MapCard>

              {/* NEW MAP ADDED HERE */}
              <MapCard 
                title="States That Have Recently Changed Laws, Regulations, or Practice Regarding Termination of Parental Rights" 
                url="https://public.tableau.com/views/StatesThatHaveRecentlyChangedLawsRegulationsorPracticeRegardingTerminationofParentalRights/Dashboard1"
                defaultOpen={false}
              />
            </div>
          </section>


          {/* SECTION 3: Arrears */}
          <section id="arrears" className="scroll-mt-8 border-t border-gray-200 pt-16">
            <SectionHeader 
              title="Which states have forgiven foster care arrears?" 
              subtitle="States and localities that have forgiven foster care child support arrears."
            />
            <MapCard 
              title="States and localities that have forgiven foster care child support arrears" 
              url="https://public.tableau.com/views/StatesandLocalitiesThatHaveForgivenArrears/Dashboard3"
              defaultOpen={false}
            >
               <div className="mb-4 space-y-2 text-slate-700">
                  <p><strong>Oregon:</strong> Arrears forgiven if parental rights are terminated.</p>
                  <p><strong>Colorado:</strong> Counties are encouraged to close cases if children are over age 19.</p>
               </div>
            </MapCard>
          </section>

        </div>
      </main>
    </div>
  );
};


// ----------------------------------------------------------------------
// COMPONENTS
// ----------------------------------------------------------------------

// Added 'height' prop to allow custom sizing for long maps
const MapCard = ({ title, url, children, defaultOpen = false, height = "h-[750px]" }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div 
      className={`
        bg-white rounded-xl shadow-sm border transition-all duration-300 overflow-hidden
        ${isOpen ? 'border-blue-500 ring-1 ring-blue-500 shadow-md' : 'border-gray-200 hover:border-gray-300'}
      `}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors duration-200"
      >
        <h3 className={`text-lg md:text-xl font-bold font-serif pr-8 leading-snug ${isOpen ? 'text-blue-700' : 'text-slate-800'}`}>
          {title}
        </h3>
        <div className={`
          p-2 rounded-full transition-all duration-300 transform flex-shrink-0
          ${isOpen ? 'bg-blue-100 text-blue-600 rotate-180' : 'bg-slate-100 text-slate-500 rotate-0'}
        `}>
          <ChevronDown size={20} />
        </div>
      </button>

      <div 
        style={{ display: isOpen ? 'block' : 'none' }} 
        className="p-6 pt-0 border-t border-gray-100"
      >
        {children && <div className="py-6 animate-fadeIn">{children}</div>}
        
        {/* Dynamic height class applied here */}
        <div className={`${height} w-full rounded-lg overflow-hidden border border-slate-100 bg-slate-50`}>
           <TableauViz url={url} />
        </div>
      </div>
    </div>
  );
};

const NavButton = ({ id, label, icon, active, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`
      w-full flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 group text-left
      ${active 
        ? 'bg-blue-600 text-white shadow-md' 
        : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
    `}
  >
    <span className={`${active ? 'text-white' : 'text-slate-500 group-hover:text-blue-400'}`}>
      {icon}
    </span>
    <span className="font-medium text-sm">{label}</span>
    {active && <ChevronRight size={14} className="ml-auto opacity-50" />}
  </button>
);

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-slate-900 font-serif mb-3 leading-tight">{title}</h2>
    <p className="text-lg text-slate-600 max-w-4xl leading-relaxed">{subtitle}</p>
  </div>
);

const PolicyItem = ({ state, desc }) => (
  <li className="pb-2 border-b border-gray-100 last:border-0">
    <span className="font-bold text-slate-900 mr-2">{state}:</span>
    <span className="text-slate-700 text-sm leading-relaxed">{desc}</span>
  </li>
);

export default Maps;