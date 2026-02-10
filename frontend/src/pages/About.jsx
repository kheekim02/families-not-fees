// frontend/src/pages/About.jsx
import { Users, Target } from 'lucide-react';

const TEAM = [
  {
    name: "Jill Duerr Berrick",
    image: "https://familiesnotfees.wordpress.com/wp-content/uploads/2024/11/dsc_2409-edit-5.jpg",
    bio: "Jill Duerr Berrick (she/her) is a Distinguished Professor and the Zellerbach Family Foundation Professor of Social Welfare at UC Berkeley. She also holds a joint appointment as a Professor II at the University of Bergen, Norway. Dr. Berrick's research focuses on the child welfare system and efforts to improve the experiences of children and families touched by foster care."
  },
  {
    name: "Vasiliki \"Kiki\" Marca",
    image: "https://familiesnotfees.wordpress.com/wp-content/uploads/2024/11/image_002.jpg",
    bio: "Kiki Marca (she/her) is an undergraduate student at UC Berkeley, pursuing a double major in Political Economics and French. She is passionate about leveraging data and research to influence social change and became interested in child welfare when her family adopted two girls out of foster care."
  },
  {
    name: "Max Abubucker",
    image: "https://familiesnotfees.wordpress.com/wp-content/uploads/2024/11/maxheadshotsized.jpg",
    bio: "Max Abubucker (he/him) is studying philosophy and economics at UC Berkeley. He is passionate about child welfare because of his experiences working in the Parental Defense Division of the Baltimore County Public Defender’s Office and volunteering with Baltimore City teenagers involved in the justice system."
  },
  {
    name: "Cassie Walter",
    image: "https://familiesnotfees.wordpress.com/wp-content/uploads/2024/11/image0-5.jpeg",
    bio: "Cassie Walter (she/her) is a Master of Social Welfare student. Her interest in child welfare reform is influenced by her previous work as a Family Advocate at the Center for Family Representation. She is also a student researcher studying interventions for foster youth at risk of commercial sexual exploitation."
  },
  {
    name: "Celine To",
    image: "https://familiesnotfees.wordpress.com/wp-content/uploads/2024/11/dsc_2533.jpeg",
    bio: "Celine To (they/them) is a MSW/MPH student at UC Berkeley. As a Bay-area native with lived experience with Child Welfare systems, Celine is an avid advocate seeking equitable policy solutions to support low-income families of color. They are currently an intern at Just Advocates."
  },
  {
    name: "Geoffrey Kim",
    image: "https://familiesnotfees.wordpress.com/wp-content/uploads/2024/12/img_6356.jpg",
    bio: "Geoffrey Kim (he/him) is studying data science at UC Berkeley, focusing on business analytics. Motivated by his experience working in a local childcare facility in South Korea, he seeks to contribute to meaningful change for children by utilizing data analysis and visualizations to improve communication."
  },
  {
    name: "Amelia Bean",
    image: "https://familiesnotfees.wordpress.com/wp-content/uploads/2026/01/img_1073.jpg",
    bio: "Amelia Bean (she/her) is majoring in Legal Studies with a minor in Human Rights. She plans to attend law school to study how law and policy shape the lives of marginalized communities. Amelia has interned with the Orange County District Attorney’s Office and holds a personal connection to child welfare through her father."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* Hero Section */}
      <div className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            A dedicated team of researchers, students, and advocates working to reform the child welfare system.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Mission Section */}
        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-blue-100 rounded-xl text-blue-700">
              <Target size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 font-serif mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Families Not Fees is designed to track and showcase state efforts to narrow or cease child support collections and arrears for parents whose children are placed in foster care. We provide data, research, and resources to support legislative and administrative reforms that reduce family poverty and increase children’s opportunities to return home.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section>
          <div className="flex items-center gap-3 mb-10 border-b border-gray-200 pb-4">
            <div className="p-2 bg-purple-100 rounded-lg text-purple-700">
              <Users size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Meet the Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                
                {/* Image Container (Taller Aspect Ratio) */}
                <div className="aspect-[3/4] overflow-hidden bg-slate-100 relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">{member.name}</h3>
                  {/* Removed Role Label */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;