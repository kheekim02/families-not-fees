// frontend/src/components/Footer.jsx
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-white">Families Not Fees</h3>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Tracking state efforts to narrow or cease child support collections for parents involved in the foster care system.
            </p>
          </div>

          {/* Contact / Copyright (Right Aligned on Desktop) */}
          <div className="md:text-right">
            <a href="mailto:dberrick@berkeley.edu" className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors mb-4">
              <Mail size={16} /> Contact Research Team
            </a>
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