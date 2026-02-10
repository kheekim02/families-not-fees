// frontend/src/pages/Media.jsx
import { Mic, Newspaper, Video, ExternalLink, Calendar, FileText, MapPin } from 'lucide-react';

const MEDIA_DATA = [
  {
    region: "National",
    articles: [
      {
        title: "Reforming Child Welfare: Rethinking Child Support for Children in Care",
        source: "The Guardian; NACC",
        date: "Spring 2024",
        link: "https://familiesnotfees.wordpress.com/wp-content/uploads/2024/12/2024_4601_reforming-child-welfare-2.pdf",
        type: "pdf"
      },
      {
        title: "The Network Connection Newsletter",
        source: "Grandfamilies & Kinship Support Network",
        date: "Nov 2023",
        link: "https://myemail.constantcontact.com/November-2023-Newsletter.html?soid=1102949363204&aid=cMLccltNQoU",
        type: "article"
      },
      {
        title: "Opportunity Ahead: Reimagining the Role of Child Support Engagement",
        source: "Policy and Practice",
        date: "Jun 1, 2023",
        link: "https://trayinc.cld.bz/Policy-Practice-Summer-2023/6/",
        type: "article"
      },
      {
        title: "In some states, an unpaid foster care bill could mean parents lose their kids forever",
        source: "NPR",
        date: "Jan 19, 2023",
        link: "https://www.npr.org/2023/01/19/1148829974/foster-care-parental-rights-child-support",
        type: "article"
      },
      {
        title: "A closer look at the practice of billing parents for their child's foster care",
        source: "NPR",
        date: "Dec 27, 2022",
        link: "https://www.npr.org/2022/12/27/1145579344/a-closer-look-at-the-practice-of-billing-parents-for-their-childs-foster-care",
        type: "article"
      },
      {
        title: "Laws allow kids to be taken away from their parents if they fail to pay debts",
        source: "NPR",
        date: "Dec 27, 2022",
        link: "https://www.npr.org/2022/12/27/1145714364/laws-allow-kids-to-be-taken-away-from-their-parents-if-they-fail-to-pay-debts",
        type: "article"
      },
      {
        title: "The federal government will allow states to stop charging families for foster care",
        source: "NPR",
        date: "July 1, 2022",
        link: "https://www.npr.org/2022/07/01/1107848270/foster-care-child-support",
        type: "article"
      },
      {
        title: "States send kids to foster care and their parents the bill — often one too big to pay",
        source: "NPR",
        date: "Dec 27, 2021",
        link: "https://www.npr.org/2021/12/27/1049811327/states-send-kids-to-foster-care-and-their-parents-the-bill-often-one-too-big-to-",
        type: "article"
      },
      {
        title: "Who pays for foster care? In the U.S., parents do",
        source: "Centre for Research on Discretion and Paternalism",
        date: "Dec 2, 2021",
        link: "https://discretion.uib.no/who-pays-for-foster-care-in-the-u-s-parents-do/",
        type: "article"
      }
    ]
  },
  {
    region: "California",
    articles: [
      {
        title: "Foster Care Arrears Collections to Cease",
        source: "Alliance for Children's Rights",
        date: "Dec 1, 2023",
        link: "https://familiesnotfees.wordpress.com/wp-content/uploads/2024/12/acrarrearstocease-1.pdf",
        type: "pdf"
      },
      {
        title: "California Stops Charging Parents for Their Kids in Foster Care, and Eliminates Arrears",
        source: "The Imprint",
        date: "Nov 30, 2023",
        link: "https://imprintnews.org/top-stories/california-stops-charging-parents-for-kids-in-foster-care/246421",
        type: "article"
      },
      {
        title: "Billing Parents for Their Children’s Foster Care? One California Lawmaker Says No",
        source: "The Imprint",
        date: "Sep 28, 2022",
        link: "https://imprintnews.org/foster-care/a-california-bill-parents-paying-for-their-childrens-foster-care-one-california-lawmaker-says-no/233765",
        type: "article"
      },
      {
        title: "California tried to force parents to pay for their kid's foster care. That's crazy.",
        source: "The Sacramento Bee",
        date: "Apr 2, 2022",
        link: "https://www.sacbee.com/opinion/op-ed/article259981365.html",
        type: "article"
      },
      {
        title: "Reduce number of CPS families required to pay for foster care",
        source: "Cal Matters",
        date: "Mar 14, 2022",
        link: "https://calmatters.org/commentary/2022/03/reduce-number-of-cps-families-required-to-pay-for-foster-care/",
        type: "article"
      }
    ]
  },
  {
    region: "Colorado",
    articles: [
      {
        title: "CO: Colorado won't require parents to make payments while children in foster care",
        source: "KDVR",
        date: "Jun 12, 2024",
        link: "https://www.fox21news.com/news/colorado-wont-require-parents-to-make-payments-while-children-in-foster-care/",
        type: "article"
      }
    ]
  },
  {
    region: "Georgia",
    articles: [
      {
        title: "Kennesaw Mom’s Lawsuit Persists After Georgia Officials Deny They Unfairly Made Her Pay",
        source: "The Imprint",
        date: "Oct 24, 2025",
        link: "https://imprintnews.org/top-stories/kennesaw-moms-lawsuit-persists-after-georgia-officials-deny-they-unfairly-made-her-pay-for-her-kids-foster-care/268228",
        type: "article"
      },
      {
        title: "Legal Challenge in Georgia Targets Practice of Billing Parents for Foster Care",
        source: "The Imprint",
        date: "Sep 5, 2025",
        link: "https://imprintnews.org/top-stories/legal-challenge-in-georgia-targets-practice-of-billing-parents-for-foster-care/265305",
        type: "article"
      },
      {
        title: "Georgia removed her kids because she was homeless. The state is charging her $13,000",
        source: "WABE",
        date: "Sep 14, 2024",
        link: "https://www.wabe.org/georgia-child-support-debt-foster-care/",
        type: "article"
      }
    ]
  },
  {
    region: "New Jersey",
    articles: [
      {
        title: "The Price of Reunification: Foster Care Child Support",
        source: "Legal Services of New Jersey",
        date: "Jun 18, 2024",
        link: "https://www.youtube.com/watch?v=DHaxhR5z75o",
        type: "video"
      },
      {
        title: "Making parents pay for foster care: A bad idea for families",
        source: "New Jersey Monitor",
        date: "Mar 26, 2024",
        link: "https://newjerseymonitor.com/2024/03/26/making-parents-pay-for-foster-care-a-bad-idea-for-families/",
        type: "article"
      }
    ]
  },
  {
    region: "New York",
    articles: [
      {
        title: "NY Law Would Scale Back Practice of Billing Parents for Foster Care",
        source: "The Imprint",
        date: "Mar 13, 2024",
        link: "https://imprintnews.org/top-stories/new-york-bill-limits-foster-care-child-support/248066",
        type: "article"
      },
      {
        title: "NY legislation would end parents paying for foster care",
        source: "Public News Service",
        date: "Feb 14, 2024",
        link: "https://publicnewsservice.org/2024-02-14/childrens/ny-legislation-would-end-parents-paying-for-foster-care/a88848-1",
        type: "article"
      },
      {
        title: "Charging parents for foster care hurts New York families",
        source: "Albany Times Union",
        date: "Feb 20, 2024",
        link: "https://digital.olivesoftware.com/olive/odn/albanytimesunion/shared/ShowArticle.aspx?doc=HATU%2F2024%2F02%2F20&entity=Ar01200&sk=7B3A03E8&mode=text#",
        type: "article"
      },
      {
        title: "Another Voice: New York prolongs family separation–but it doesn’t have to",
        source: "The Buffalo News",
        date: "Feb 16, 2024",
        link: "https://buffalonews.com/opinion/another-voice-new-york-prolongs-family-separation-but-it-doesn-t-have-to/article_8e503ef4-cab0-11ee-9228-37e8cc73d14f.html",
        type: "article"
      },
      {
        title: "Charging Poverty Stricken Parents for their Child's Stay in Foster Care w. Dr. Jill Berrick",
        source: "After the Kids Move In",
        date: "Sep 30, 2023",
        link: "https://soundcloud.com/affcny/101-broadcast",
        type: "audio"
      }
    ]
  }
];

const Media = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* Header */}
      <div className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Local & National Media
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Coverage of the movement to end foster care fees.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {MEDIA_DATA.map((section) => (
          <section key={section.region}>
            <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
              <div className={`p-2 rounded-lg ${section.region === 'National' ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-700'}`}>
                {section.region === 'National' ? <Newspaper size={24} /> : <MapPin size={24} />}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 font-serif">{section.region}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.articles.map((article, idx) => (
                <MediaCard key={idx} article={article} />
              ))}
            </div>
          </section>
        ))}

      </div>
    </div>
  );
};

const MediaCard = ({ article }) => {
  const { title, source, date, link, type } = article;

  const getIcon = () => {
    switch (type) {
      case 'video': return <Video size={18} />;
      case 'audio': return <Mic size={18} />;
      case 'pdf': return <FileText size={18} />;
      default: return <Newspaper size={18} />;
    }
  };

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col group h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
          {getIcon()}
          {source}
        </div>
        <div className="flex items-center gap-1 text-slate-400 text-xs">
          <Calendar size={12} />
          {date}
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors font-serif leading-tight">
        {title}
      </h3>
      
      <div className="mt-auto pt-4 flex items-center text-blue-600 text-sm font-bold gap-1 group-hover:gap-2 transition-all">
        {type === 'pdf' ? 'Download PDF' : 'Read Story'} 
        <ExternalLink size={14} />
      </div>
    </a>
  );
};

export default Media;