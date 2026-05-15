import React from 'react';
import { Globe, AtSign, MessageCircle, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-12 bg-swiss-light-grey border-t border-swiss-dark/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-sm font-bold tracking-tighter lowercase text-swiss-red transition-colors">parcellino</span>
            <span className="text-[9px] text-swiss-dark/40 font-medium mt-1 tracking-wider italic">
              {t('Leading provider of fulfillment Switzerland services and precision architecture.')}
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {['Home', 'Solutions', 'Privacy'].map((link) => (
              <Link 
                key={link} 
                to={link === 'Home' ? '/' : link === 'Solutions' ? '/solutions' : '#'} 
                className="text-[10px] font-bold text-swiss-dark/40 dark:text-white/40 hover:text-swiss-red dark:hover:text-swiss-red uppercase tracking-widest transition-colors"
              >
                {t(link)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <a href="mailto:sr@parcellino-swiss.ch" className="text-swiss-dark/30 dark:text-white/30 hover:text-swiss-red dark:hover:text-swiss-red transition-colors"><AtSign size={14} /></a>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-swiss-dark/20 dark:text-white/20 font-bold uppercase tracking-widest">
            <p>{t('© 2026 Precision Fulfillment')}</p>
            <span>|</span>
            <a href="https://www.growthzecore.com/" target="_blank" rel="noopener noreferrer" className="hover:text-swiss-red transition-colors">
              {t('Made by zecore')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
