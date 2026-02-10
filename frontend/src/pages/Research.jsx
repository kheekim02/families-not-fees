// frontend/src/pages/Research.jsx
import { BookOpen, Link as LinkIcon, FileText, ExternalLink } from 'lucide-react';

const REFERENCES = [
  {
    citation: "ASPE. Factors that Impact the Child Support Program’s Role in Reducing Child Poverty: Convening Summary.",
    link: "https://aspe.hhs.gov/reports/child-support-convening-summary"
  },
  {
    citation: "Azevedo-McCaffrey, Diana. (2022). States should use new guidance to stop charging parents for foster care, prioritize family reunification. Center on Budget and Policy Priorities.",
    link: "https://www.cbpp.org/research/income-security/states-should-use-new-guidance-to-stop-charging-parents-for-foster-care"
  },
  {
    citation: "Berrick, J.D. (2021). Imagining a new future: Elimination of child support obligations for child welfare-involved families. Journal of Public Child Welfare.",
    link: "https://escholarship.org/uc/item/6hk1s6d4"
  },
  {
    citation: "Berger, L. M., Cancian, M., Kim, H., Ko, A. & Pac, J. Child Support and Child Welfare System Interactions. Submitted to the Wisconsin Department of Children and Families, Institute for Research on Poverty, University of Wisconsin–Madison, September 2025.",
    link: "https://www.irp.wisc.edu/wp/wp-content/uploads/2024/07/CSRA-2022-2024-T2-07242024.pdf"
  },
  {
    citation: "Cancian, M., Cook, S.T., Seki, M., & Wimer, L. (2017). Making parents pay: The unintended consequences of charging parents for foster care. Children and Youth Services Review, 72, 100-110.",
    link: "https://www.sciencedirect.com/science/article/pii/S0190740916303425"
  },
  {
    citation: "Cancian, M., Yang, M.Y., & Slack, K. (2013). The effect of child support income on the risk of child maltreatment. Social Service Review, 87, 417-437.",
    link: null
  },
  {
    citation: "Chellew, C., Noyes, J.L., & Selekman, R. (2012). Child support referrals for out-of-home placements: A review of policy and practice. Madison, WI: Institute for Research on Poverty.",
    link: "https://www.irp.wisc.edu/research1/childsup/cspolicy/pdfs/2011-12/Task6_CS_2011-12_CSPII.pdf"
  },
  {
    citation: "Eldred, S. (2020) Kids in care: Best practices at the intersection of child support and child welfare. Powerpoint presentation. National Child Support Association conference.",
    link: null
  },
  {
    citation: "Garfinkel, I., McLanahan, S., & Robins, P.K. (Eds.) (1994). Child support and child well-being. Washington D.C.: Urban Institute Press.",
    link: "https://evidence2impact.psu.edu/wp-content/uploads/2023/05/s_wifis06c02.pdf"
  },
  {
    citation: "Gupta-Kagan, J. (2023). Distinguishing family poverty from child neglect. Iowa Law Review, Forthcoming.",
    link: "https://scholarship.law.columbia.edu/cgi/viewcontent.cgi?article=5528&context=faculty_scholarship"
  },
  {
    citation: "Hatcher, Daniel L. (2009). Collateral children: Consequence and illegality at the intersection of foster care and child support. Brooklyn Law Review, 74 (4), 1333-1380.",
    link: "https://scholarworks.law.ubalt.edu/all_fac/288/"
  },
  {
    citation: "Hatcher, Daniel L. (2023). Injustice inc. Oakland: University of California Press",
    link: null
  },
  {
    citation: "Office of Child Support Services. (2024). FY 2023 Preliminary reports and data. (*Relevant information pertaining to child support collections on foster care cases can be found on Table P-12)",
    link: "https://www.acf.hhs.gov/css/policy-guidance/fy-2023-preliminary-data-report-and-tables"
  },
  {
    citation: "Orange County Department of Child Support Services (OCDCSS). (2019). Child support and foster care.",
    link: "https://www.css.ocgov.com/sites/css/files/import/data/files/116568.pdf"
  },
  {
    citation: "Skophammer, T. (2017). Child support collections to offset out of home placement costs: A study of cost effectiveness [Unpublished doctoral dissertation]. Hamline University.",
    link: "https://youngwilliams.com/wp-content/uploads/2023/03/childsupportcollectionstooffsetout-homeplacementcostsskophammer-1.pdf"
  },
  {
    citation: "The Anne E. Casey Foundation. Children in foster care in United States.",
    link: "https://datacenter.aecf.org/data/tables/6243-children-in-foster-care"
  },
  {
    citation: "T Chanda, LM Berger, RE Dwyer (2025). Debt Strain and Child Protective Services Involvement. Social Service Review",
    link: null
  }
];

const ORGANIZATIONS = [
  {
    name: "Center for Child Support Policy",
    link: "https://www.childsupportpolicy.org/"
  },
  {
    name: "National Child Support Engagement Association",
    link: "https://www.ncsea.org/"
  },
  {
    name: "National Council of Child Support Directors",
    link: "https://www.nccsd.net/"
  }
];

const Research = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* Header */}
      <div className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Research & Resources
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Academic literature, policy reports, and organizational resources underpinning the movement.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* References Section */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
              <BookOpen size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Academic References</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <ul className="divide-y divide-gray-100">
              {REFERENCES.map((ref, idx) => (
                <li key={idx} className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="text-slate-700 text-sm leading-relaxed font-serif">
                      {ref.citation}
                    </div>
                    {ref.link && (
                      <a 
                        href={ref.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-shrink-0 inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-xs font-bold uppercase tracking-wide border border-blue-200 hover:border-blue-400 px-3 py-1 rounded-full transition-all"
                      >
                        View Source <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Organizations Section */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
            <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
              <LinkIcon size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Key Organizations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ORGANIZATIONS.map((org, idx) => (
              <a 
                key={idx} 
                href={org.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-300 transition-all group text-center flex flex-col items-center h-full"
              >
                <div className="p-4 bg-emerald-50 rounded-full text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <h3 className="font-bold text-slate-800 group-hover:text-emerald-700 transition-colors mb-2">
                  {org.name}
                </h3>
                <span className="text-xs text-slate-400 mt-auto flex items-center gap-1">
                  Visit Website <ExternalLink size={10} />
                </span>
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Research;