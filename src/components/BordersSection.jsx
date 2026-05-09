import React from 'react';
import { motion } from 'framer-motion';
import worldMap from '../assets/world_map.png';
import { useLanguage } from '../context/LanguageContext';

const BordersSection = () => {
  const { t } = useLanguage();
  const flags = [
    { src: "https://flagcdn.com/w40/ch.png", alt: "Switzerland" }
  ];

  return (
    <section id="borders-section" className="py-24 bg-swiss-light-grey transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-swiss-dark dark:text-white leading-tight mb-8 uppercase transition-colors">
            {t('Swiss coverage is')}<br className="hidden md:block" />{t('absolute.')}
          </h2>
          <p className="text-base md:text-lg text-swiss-dark/60 dark:text-white/60 mb-10 leading-relaxed max-w-md mx-auto lg:mx-0 transition-colors">
            {t("Our infrastructure is optimized exclusively for the Swiss landscape. From Geneva to Zurich, Lugano to Basel, we provide flawless fulfillment tailored perfectly to Switzerland's unique multi-language cantons.")}
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex -space-x-2">
              {flags.map((flag, i) => (
                <div key={i} className="w-10 h-10 border-2 border-white dark:border-[#141414] rounded-sm overflow-hidden shadow-sm">
                  <img src={flag.src} alt={flag.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-bold text-swiss-red uppercase tracking-[0.2em]">
              {t('SWISS MULTI-LANGUAGE ARCHITECTURE')}
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-sm overflow-hidden bg-swiss-grey dark:bg-white/5 shadow-2xl shadow-swiss-dark/10 dark:shadow-none transition-colors"
        >
          <img src={worldMap} alt="Swiss Logistics Network" className="w-full h-full object-cover grayscale opacity-80 dark:opacity-40 transition-opacity" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="w-4 h-4 bg-swiss-red rounded-full shadow-[0_0_20px_rgba(213,43,30,0.8)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BordersSection;
