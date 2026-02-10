// frontend/src/pages/HowToHelp.jsx
import { CheckSquare, Megaphone, ArrowRight, FileText } from 'lucide-react';

const REFORM_STEPS = [
  "Develop clear guidance establishing non-referral to child support enforcement agencies as the standard practice.",
  "Reprogram computer systems to stop the automatic referral of cases.",
  "Provide adequate training for caseworkers and other agency personnel on new guidance and its practices, including specific criteria for staff to determine the rare cases that should be referred.",
  "Establish quality control mechanisms to review cases that are flagged for referral before they are referred.",
  "Adopt practices that improve coordination between child welfare and child support programs — programs that are often siloed even though many families involved in the child welfare system are also served by child support."
];

const ACTION_STEPS = [
  "Write an op-ed for your local news outlet.",
  "Submit a news item for your association or organization’s newsletter.",
  "Contact child and family service agencies in your state to make them aware of this issue.",
  "Meet with state legislators to determine appetite for carrying legislation.",
  "Identify parents who have been affected by current policies and collect their stories."
];

const HowToHelp = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* Header */}
      <div className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            How to Help
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Advocating for legislative and administrative reforms that reduce family poverty and increase children’s opportunities to return home.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1: System Reforms */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
              <CheckSquare size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Assessing Readiness & Reform</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-8 border-b border-slate-100 bg-slate-50/50">
              <p className="text-slate-700 text-lg leading-relaxed">
                Suggested steps to assess readiness at the state level, as recommended by the <strong>Center on Budget and Policy Priorities</strong>:
              </p>
            </div>
            <div className="p-8">
              <ul className="space-y-6">
                {REFORM_STEPS.map((step, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold text-sm">
                      {idx + 1}
                    </span>
                    <p className="text-slate-700 text-base leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Community Engagement */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
              <Megaphone size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Community Action</h2>
          </div>

          <p className="text-xl text-slate-600 mb-8">
            Activities to engage community members in learning about this issue:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACTION_STEPS.map((action, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all group cursor-default">
                <div className="flex items-start gap-4">
                  <ArrowRight className="text-emerald-500 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" size={20} />
                  <p className="text-slate-800 font-medium leading-relaxed">{action}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reference Footer */}
        <div className="border-t border-slate-200 pt-8 mt-12 text-sm text-slate-500 font-mono">
          <p className="mb-2 font-bold uppercase tracking-wider text-xs">Reference:</p>
          <p>
            1. Azevedo-McCaffrey, Diana. (2022). <em>States should use new guidance to stop charging parents for foster care, prioritize family reunification.</em> Center on Budget and Policy Priorities. 
            <a href="https://www.cbpp.org/sites/default/files/10-13-22fis.pdf" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:underline inline-flex items-center gap-1">
              View Report <FileText size={12} />
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default HowToHelp;