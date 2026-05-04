import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Layers, Recycle, Zap, RefreshCcw, ArrowRight } from 'lucide-react';
import mountainImage from '../assets/mountain.png';
import { useLanguage } from '../context/LanguageContext';

const BentoGrid = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-swiss-light-grey dark:bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-swiss-dark/40 dark:text-white/40 font-bold tracking-[0.2em] text-[10px] uppercase mb-2 block">
            {t('ENGINEERED EXCELLENCE')}
          </span>
          <h2 className="text-4xl font-bold text-swiss-dark dark:text-white transition-colors">
            {t('BENTO BOX OF PRECISION.')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
          {/* Large Item 1: E-Com Integration */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => navigate('/solutions')}
            className="md:col-span-2 bg-swiss-grey dark:bg-[#141414] p-6 md:p-10 flex flex-col justify-between group transition-all border border-swiss-dark/5 dark:border-white/5 cursor-pointer hover:bg-white dark:hover:bg-[#1A1A1A] min-h-[300px]"
          >
            <div>
              <Layers className="text-swiss-red mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4 dark:text-white">{t('E-Com Integration')}</h3>
              <p className="text-swiss-dark/60 dark:text-white/60 max-w-sm leading-relaxed mb-6">
                {t('One-click Shopify/Woo/Amazon sync. Our API is built for high-frequency trading standards, ensuring your stock levels are never out of sync.')}
              </p>
              <button className="flex items-center gap-2 text-[10px] font-bold text-swiss-red uppercase tracking-widest group-hover:gap-4 transition-all">
                {t('Explore Tech')} <ArrowRight size={14} />
              </button>
            </div>
            <div className="flex gap-4 text-[10px] font-bold text-swiss-dark/40 dark:text-white/40 uppercase tracking-widest mt-4">
              <span>REST API</span>
              <span>WEBHOOKS</span>
              <span>CLOUD SYNC</span>
            </div>
          </motion.div>

          {/* Large Item 2: Sustainable Packaging (Dark) */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => navigate('/solutions')}
            className="bg-swiss-dark dark:bg-swiss-red p-6 md:p-10 text-white relative overflow-hidden group border border-white/5 cursor-pointer min-h-[300px] transition-colors"
          >
            <div className="relative z-10 h-full flex flex-col">
              <Recycle className="text-swiss-red dark:text-white mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4">{t('Sustainable Packaging')}</h3>
              <p className="text-white/60 dark:text-white/80 leading-relaxed mb-8">
                {t('The future of eco-conscious delivery. 100% biodegradable materials engineered for structural integrity and premium unboxing experiences.')}
              </p>
              <button className="flex items-center gap-2 text-[10px] font-bold text-swiss-red dark:text-white uppercase tracking-widest group-hover:gap-4 transition-all mt-auto">
                {t('View Eco-Policy')} <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

          {/* Small Item 1: Rapid Fulfillment */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => navigate('/solutions')}
            className="bg-swiss-grey dark:bg-[#141414] p-6 md:p-10 border border-swiss-dark/5 dark:border-white/5 cursor-pointer hover:bg-white dark:hover:bg-[#1A1A1A] flex flex-col justify-between group min-h-[250px] transition-all"
          >
            <div>
              <Zap className="text-swiss-red mb-6" size={28} />
              <h3 className="text-xl font-bold mb-3 dark:text-white">{t('Rapid Fulfillment')}</h3>
              <p className="text-sm text-swiss-dark/60 dark:text-white/60 leading-relaxed">
                {t('Order-to-shipping in 60 minutes. Picking flows that mimic Swiss timepieces.')}
              </p>
            </div>
            <ArrowRight size={16} className="text-swiss-red opacity-0 group-hover:opacity-100 transition-all self-end" />
          </motion.div>

          {/* Small Item 2: Returns Management */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => navigate('/solutions')}
            className="bg-swiss-grey dark:bg-[#141414] p-6 md:p-10 border border-swiss-dark/5 dark:border-white/5 cursor-pointer hover:bg-white dark:hover:bg-[#1A1A1A] flex flex-col justify-between group min-h-[250px] transition-all"
          >
            <div>
              <RefreshCcw className="text-swiss-red mb-6" size={28} />
              <h3 className="text-xl font-bold mb-3 dark:text-white">{t('Returns Management')}</h3>
              <p className="text-sm text-swiss-dark/60 dark:text-white/60 leading-relaxed">
                {t('Automated verification and instant restocking for peak efficiency.')}
              </p>
            </div>
            <ArrowRight size={16} className="text-swiss-red opacity-0 group-hover:opacity-100 transition-all self-end" />
          </motion.div>

          {/* NEW Small Item 3: Image Box (Bottom Right) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative overflow-hidden group border border-swiss-dark/5 dark:border-white/5 min-h-[200px]"
          >
            <img 
              src={mountainImage} 
              alt="Matterhorn Mountain" 
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700" />
            <div className="absolute bottom-4 right-4 z-10">
              <span className="text-swiss-red bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-sm text-xs tracking-[0.2em] lowercase font-black shadow-lg">parcellino</span>
            </div>
          </motion.div>
          
          {/* Decorative Placeholder for Grid balance if needed, or just let it flow */}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
