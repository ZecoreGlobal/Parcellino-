import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Magnetic from './Magnetic';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { currentLang, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [isLangOpen, setIsLangOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  const navLinks = [
    { name: t('Home'), path: '/' },
    { name: t('Solutions'), path: '/solutions' }
  ];

  const languages = ['English', 'Deutsch', 'Français', 'Italiano', 'Español'];

  // Swiss Flag Icon Component
  const SwissFlag = () => (
    <div className="w-[26px] h-[26px] bg-swiss-red flex items-center justify-center rounded-sm flex-shrink-0">
      <div className="relative w-[15px] h-[15px] flex items-center justify-center">
        <div className="absolute w-full h-[2.5px] bg-white" />
        <div className="absolute w-[2.5px] h-full bg-white" />
      </div>
    </div>
  );

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isMobileMenuOpen ? 'bg-swiss-light-grey' : 'bg-swiss-light-grey/80 backdrop-blur-md'} border-b border-swiss-dark/5`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3.5 group">
          <SwissFlag />
          <span className="font-bold text-2xl sm:text-[26px] tracking-tight text-swiss-red transition-colors lowercase">parcellino</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-[17px] font-medium transition-colors ${
                location.pathname === link.path ? 'text-swiss-red' : 'text-swiss-dark/70 dark:text-white/70 hover:text-swiss-red dark:hover:text-swiss-red'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 text-[17px] font-medium text-swiss-dark/70 dark:text-white/70 hover:text-swiss-red dark:hover:text-swiss-red transition-colors"
            >
              <Globe size={14} />
              {currentLang}
              <ChevronDown size={14} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-4 w-40 bg-white dark:bg-[#141414] border border-swiss-dark/5 dark:border-white/10 shadow-2xl rounded-lg p-2 overflow-hidden"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm font-medium transition-all flex items-center gap-3 group ${
                        currentLang === lang 
                          ? 'text-swiss-red bg-swiss-red/5 rounded-md' 
                          : 'text-swiss-dark/60 dark:text-white/60 hover:text-swiss-dark dark:hover:text-white hover:bg-swiss-light-grey dark:hover:bg-white/5 rounded-md'
                      }`}
                    >
                      {currentLang === lang && (
                        <span className="w-1 h-4 bg-swiss-red rounded-full" />
                      )}
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          
          <div className="hidden sm:block">
            <Magnetic>
              <button 
                onClick={scrollToCTA}
                className="bg-swiss-red text-white px-5 py-2.5 text-sm font-semibold rounded-sm hover:bg-swiss-red/90 transition-all active:scale-[0.98]"
              >
                {t('Start Your E-com Now')}
              </button>
            </Magnetic>
          </div>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-swiss-dark dark:text-white hover:text-swiss-red transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white dark:bg-[#0A0A0A] z-[150] flex flex-col md:hidden overflow-hidden"
          >
            {/* Header Area */}
            <div className="h-20 flex items-center justify-between px-6 border-b border-swiss-dark/5 dark:border-white/5">
              <div className="flex items-center gap-3.5">
                <SwissFlag />
                <span className="font-bold text-xl sm:text-[24px] lowercase tracking-tighter text-swiss-red">parcellino</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-swiss-dark dark:text-white hover:text-swiss-red transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            {/* Links Area */}
            <div className="flex-1 px-8 py-12 flex flex-col justify-between">
              <nav className="space-y-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link 
                      to={link.path} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-baseline gap-4"
                    >
                      <span className="text-xs font-black text-swiss-red/20 dark:text-swiss-red/40 group-hover:text-swiss-red transition-colors duration-500">
                        0{i + 1}
                      </span>
                      <span className={`text-3xl font-black tracking-tighter transition-all duration-500 ${
                        location.pathname === link.path ? 'text-swiss-red' : 'text-swiss-dark dark:text-white group-hover:pl-4'
                      }`}>
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-[10px] font-bold text-swiss-dark/40 dark:text-white/40 uppercase tracking-[0.2em] mb-4">{t('Select Language')}</p>
                  <div className="flex flex-wrap gap-3">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`text-[10px] font-bold px-4 py-2 border transition-all uppercase tracking-widest ${
                          currentLang === lang 
                            ? 'border-swiss-red bg-swiss-red text-white' 
                            : 'border-swiss-dark/10 dark:border-white/10 text-swiss-dark/60 dark:text-white/60 hover:border-swiss-red hover:text-swiss-red'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-8 border-t border-swiss-dark/5 dark:border-white/5"
                >
                  <p className="text-[10px] font-bold text-swiss-dark/40 dark:text-white/40 uppercase tracking-[0.2em] mb-6">{t('Contact Architecture')}</p>
                  <div className="space-y-4">
                    <a href="mailto:sr@parcellino-swiss.ch" className="block text-xl font-bold text-swiss-dark dark:text-white hover:text-swiss-red transition-colors">
                      sr@<span className="text-swiss-red">parcellino</span>-swiss.ch
                    </a>
                    <a href="tel:+4368120806840" className="block text-xl font-bold text-swiss-dark dark:text-white hover:text-swiss-red transition-colors">
                      +43 681 20806840
                    </a>
                  </div>
                </motion.div>
                
                <button 
                  onClick={scrollToCTA}
                  className="w-full bg-swiss-red text-white py-5 font-bold uppercase tracking-[0.3em] text-xs hover:bg-swiss-dark transition-all shadow-xl shadow-swiss-red/20"
                >
                  {t('Start Your E-com Now')}
                </button>
              </div>
            </div>
            
            {/* Background Decorative cross */}
            <div className="absolute -bottom-20 -right-20 opacity-[0.03] pointer-events-none rotate-12">
              <SwissFlag />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
