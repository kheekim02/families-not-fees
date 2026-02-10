import { Scale, Clock, TrendingDown, Users, DollarSign, BookOpen, AlertTriangle } from 'lucide-react';

const PolicyBasics = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* Page Header */}
      <div className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Policy Basics
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Understanding the history, the costs, and the human impact of charging parents for foster care.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* SECTION 1: BACKGROUND */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
              <BookOpen size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Background</h2>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              The practice of collecting child support payments from parents whose children are placed in foster care has been occurring for almost 40 years since Congress amended the Social Security Act in 1984. That law included provisions for states to recoup some of the costs of foster care through the assignment of child support obligations to parents.
            </p>
            <p>
              Until recently, federal guidance required child welfare agencies to refer Title IV-E eligible parents “where appropriate” and under conditions that support the “best interests of the child.”<sup>1</sup> Child welfare agencies were also allowed to refer non-Title-IV-E eligible parents to child support collections.
            </p>
            <p>
              The guidance gave states flexibility to define “appropriate” and discouraged state foster care agencies from referring cases for child support services if payment of child support would create a barrier to reunification. Child welfare staff were required to review cases individually to determine whether exemptions might apply, but the imposition of child support obligations was considered a common practice across the states.
            </p>

            {/* Highlight Box for New Guidance */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-8">
              <h3 className="text-blue-900 font-bold text-lg mb-2">The 2022 Federal Shift</h3>
              <p className="text-blue-800 text-base">
                Federal guidance from the Children’s Bureau and the Office of Child Support Services, issued in 2022, has the potential to dramatically reduce the number of child welfare-involved parents referred to child support services. This shift is based on significant evidence showing the negative effects of this practice on families.
              </p>
            </div>
          </div>
        </section>


        {/* SECTION 2: RESEARCH EVIDENCE */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-purple-100 rounded-lg text-purple-700">
              <Scale size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 font-serif">A Brief Review of Research Evidence</h2>
          </div>

          <p className="text-xl text-slate-600 mb-10 max-w-3xl">
            Available research indicates that child support enforcement for foster care cases is cost-ineffective and disproportionately harms Black families.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Cost Ineffective */}
            <EvidenceCard 
              icon={<DollarSign size={24} />}
              color="red"
              title="Cost Ineffective"
              points={[
                "Cost-benefit analyses from five states show administrative costs outweigh benefits by a ratio of at least 3:1.",
                "Foster care cases are complex, requiring staff to expend at least 50% more time on collection efforts.",
                "Increased lengths of stay for children suggest considerable expenses for public child welfare agencies ($14,000 – $82,000 per year, per child)."
              ]}
              citations={["3", "4"]}
            />

            {/* Card 2: Reduced Reunification */}
            <EvidenceCard 
              icon={<Clock size={24} />}
              color="orange"
              title="Delays Reunification"
              points={[
                "When mothers are ordered to pay just $100/month, the likelihood of reunification declines by almost one-fifth.",
                "Children stay in care an average of 6.6 months longer when parents are ordered to pay.",
                "Disproportionate impact: Black children remain in care 4.5 months longer than white children when mothers pay support.",
                "The likelihood of reentry doubles, and termination of parental rights becomes more likely."
              ]}
              citations={["5", "6"]}
            />

            {/* Card 3: Financial Instability */}
            <EvidenceCard 
              icon={<TrendingDown size={24} />}
              color="slate"
              title="Increases Instability"
              points={[
                "Enforcement increases poverty among the poorest families. Parents unable to pay fall into debt to the state.",
                "Many states impose significant interest rates on arrears, rapidly ballooning the size of parents’ debt.",
                "Poverty increases the risk of child maltreatment, potentially increasing the likelihood of re-entry to foster care."
              ]}
              citations={["7", "8"]}
            />

            {/* Card 4: Kinship Care */}
            <EvidenceCard 
              icon={<Users size={24} />}
              color="emerald"
              title="Barrier to Kinship Care"
              points={[
                "Relatives may decline to care for a child to protect the parent (their relative) from the financial cost associated with child support notices.",
                "This decision thwarts public policy directives that privilege kinship foster care."
              ]}
              citations={["9"]}
            />

          </div>
        </section>


        {/* SECTION 3: CITATIONS */}
        <section className="border-t border-slate-200 pt-12">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">References & Citations</h3>
          <ol className="list-decimal list-outside ml-4 space-y-3 text-xs text-slate-500 font-mono">
            <li>
              U.S. Department of Health and Human Services. (US DHHS). (2012). Child Welfare Policy Manual. Available at <a href="http://www.acf.hhs.gov/cwpm/programs/cb/laws_policies/laws/cwpm/policy_dsp.jsp?citID=170" className="text-blue-600 hover:underline">ACF Website</a>.
            </li>
            <li>
              Cancian, M., Cook, S.T., Seki, M., & Wimer, L. (2017). Making parents pay: The unintended consequences of charging parents for foster care. <em>Children and Youth Services Review</em>, 72, 100-110.
            </li>
            <li>
              Chellew, C., Noyes, J.L., & Selekman, R. (2012). Child support referrals for out-of-home placements: A review of policy and practice. Madison, WI: Institute for Research on Poverty; Orange County Department of Child Support Services (OCDCSS). (2019); Skophammer, T. (2017).
            </li>
            <li>
              Orange County Department of Child Support Services (OCDCSS). (2019). Child support and foster care.
            </li>
            <li>
              Cancian, M., Cook, S.T., Seki, M., & Wimer, L. (2017). <em>Children and Youth Services Review</em>.
            </li>
            <li>
              Cancian, M., Cook, S.T., Seki, M., & Wimer, L. (2017). <em>Children and Youth Services Review</em>.
            </li>
            <li>
              National Conference of State Legislatures (2023). Interest on child support arrears. <a href="https://www.ncsl.org/human-services/interest-on-child-support-arrears" className="text-blue-600 hover:underline">NCSL Link</a>.
            </li>
            <li>
              Drake, B., & Jonson-Reid, M. (2014). Poverty and child maltreatment. In <em>Handbook of child maltreatment</em> (pp. 131-148).
            </li>
            <li>
              Hatcher, D.L. (2009). Collateral children: Consequence and illegality at the intersection of foster care and child support. <em>Brooklyn Law Review</em>, 74 (4), 1333-1380.
            </li>
          </ol>
        </section>

      </div>
    </div>
  );
};

// --- Helper Component for Evidence Cards ---
const EvidenceCard = ({ icon, color, title, points, citations }) => {
  const colorClasses = {
    red: "bg-red-50 text-red-700 border-red-100",
    orange: "bg-orange-50 text-orange-700 border-orange-100",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
  };

  const currentTheme = colorClasses[color] || colorClasses.slate;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className={`p-4 border-b flex items-center gap-3 ${currentTheme}`}>
        {icon}
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {points.map((point, idx) => (
            <li key={idx} className="text-slate-700 text-sm leading-relaxed flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-slate-50 text-xs text-slate-400 text-right">
          Citations: <sup>[{citations.join(', ')}]</sup>
        </div>
      </div>
    </div>
  );
};

export default PolicyBasics;