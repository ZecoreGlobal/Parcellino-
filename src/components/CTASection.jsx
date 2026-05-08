import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Magnetic from './Magnetic';
import { useLanguage } from '../context/LanguageContext';

const CTASection = ({ 
  title, 
  subtitle,
  variant = "light"
}) => {
  const { t } = useLanguage();
  const isDark = variant === "dark";
  
  const displayTitle = title || t("Ready to Scale Your Logistics?");
  const displaySubtitle = subtitle || t("Connect with our solutions architects for a tailored technical brief and Swiss scaling strategy.");

  return (
    <section id="cta-section" className={`py-24 md:py-32 text-center transition-colors duration-300 ${isDark ? 'bg-swiss-dark text-white' : 'bg-white dark:bg-[#0A0A0A] text-swiss-dark dark:text-white border-t border-swiss-dark/5 dark:border-white/5'}`}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 transition-colors ${isDark ? 'text-white' : 'text-swiss-dark dark:text-white'}`}>{displayTitle}</h2>
          <p className={`text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto transition-colors ${isDark ? 'text-white/60' : 'text-swiss-dark/60 dark:text-white/60'}`}>
            {displaySubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Magnetic>
              <a 
                href="https://calendly.com/parcellino-swiss" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-swiss-red text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-swiss-dark dark:hover:bg-white hover:text-white dark:hover:text-swiss-dark transition-all flex items-center gap-3 group inline-block shadow-xl shadow-swiss-red/20"
              >
                <Calendar size={18} className="group-hover:scale-110 transition-transform" />
                {t('Book a Strategy Call')}
              </a>
            </Magnetic>
            <a 
              href="mailto:sr@parcellino-swiss.ch"
              className={`font-bold uppercase tracking-widest text-[10px] border-b-2 border-swiss-red pb-1 transition-colors inline-block ${isDark ? 'text-white/80 hover:text-white' : 'text-swiss-dark/80 dark:text-white/80 hover:text-swiss-red dark:hover:text-swiss-red'}`}
            >
              {t('Speak to an Expert Now')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
