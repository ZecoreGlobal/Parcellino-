import React from 'react';
import { Globe, AtSign, MessageCircle, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 bg-white dark:bg-[#0A0A0A] border-t border-swiss-dark/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-8">
          <span className="text-sm font-bold tracking-tighter uppercase dark:text-white transition-colors">Parcellino Swiss</span>
          <nav className="hidden md:flex items-center gap-6">
            {['Home', 'Solutions', 'Privacy'].map((link) => (
              <Link 
                key={link} 
                to={link === 'Home' ? '/' : link === 'Solutions' ? '/solutions' : '#'} 
                className="text-[10px] font-bold text-swiss-dark/40 dark:text-white/40 hover:text-swiss-red dark:hover:text-swiss-red uppercase tracking-widest transition-colors"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <a href="mailto:Sr@parcellino-swiss.ch" className="text-swiss-dark/30 dark:text-white/30 hover:text-swiss-red dark:hover:text-swiss-red transition-colors"><AtSign size={14} /></a>
          </div>
          <p className="text-[10px] text-swiss-dark/20 dark:text-white/20 font-bold uppercase tracking-widest">
            © 2026 Precision Fulfillment
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
