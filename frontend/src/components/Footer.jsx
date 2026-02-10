import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-white">Families Not Fees</h3>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Tracking state efforts to narrow or cease child support collections for parents involved in the foster care system.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/map" className="hover:text-blue-400 transition">Interactive Maps</a></li>
              <li><a href="/insights" className="hover:text-blue-400 transition">Data Insights</a></li>
              <li><a href="/state-resources" className="hover:text-blue-400 transition">State Resources</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition">Methodology & About</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition">
                <Github size={18} />
              </a>
              <a href="mailto:dberrick@berkeley.edu" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition">
                <Mail size={18} />
              </a>
            </div>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Families Not Fees. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;