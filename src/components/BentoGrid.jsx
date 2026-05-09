import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Layers, Recycle, Zap, RefreshCcw, ArrowRight, Warehouse } from 'lucide-react';
import swissWatch from '../assets/swiss_watch.png';
import { useLanguage } from '../context/LanguageContext';

const BentoGrid = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-swiss-light-grey transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-swiss-dark/40 font-bold tracking-[0.2em] text-[10px] uppercase mb-2 block">
            {t('ENGINEERED EXCELLENCE')}
          </span>
          <h2 className="text-4xl font-bold text-swiss-dark transition-colors">
            {t('BENTO BOX OF PRECISION')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: E-Com Management (Manual for starting phase) */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => navigate('/solutions')}
            className="bg-swiss-grey p-6 md:p-8 flex flex-col justify-between group transition-all border border-swiss-dark/5 cursor-pointer hover:bg-white h-[350px] sm:h-[320px]"
          >
            <div>
              <Layers className="text-swiss-red mb-6" size={28} />
              <h3 className="text-xl font-bold mb-3 text-swiss-dark">{t('E-Com Management')}</h3>
              <p className="text-sm text-swiss-dark/60 leading-relaxed mb-6">
                {t('We manually handle and process your Shopify, WooCommerce, and Amazon orders with Swiss precision. Perfect for emerging brands looking for error-free execution and personal care without complex setups.')}
              </p>
            </div>
            <button className="flex items-center gap-2 text-[10px] font-bold text-swiss-red uppercase tracking-widest group-hover:gap-4 transition-all self-start mt-auto">
              {t('See How We Work')} <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* Card 2: Sustainable Packaging */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => navigate('/solutions')}
            className="bg-swiss-grey p-6 md:p-8 text-swiss-dark border border-swiss-dark/5 cursor-pointer hover:bg-white transition-all flex flex-col justify-between h-[350px] sm:h-[320px]"
          >
            <div>
              <Recycle className="text-swiss-red mb-6" size={28} />
              <h3 className="text-xl font-bold mb-3 text-swiss-dark">{t('Sustainable Packaging')}</h3>
              <p className="text-sm text-swiss-dark/60 leading-relaxed mb-6">
                {t('The future of eco-conscious delivery. 100% biodegradable materials engineered for structural integrity and premium unboxing experiences.')}
              </p>
            </div>
            <button className="flex items-center gap-2 text-[10px] font-bold text-swiss-red uppercase tracking-widest group-hover:gap-4 transition-all self-start mt-auto">
              {t('View Eco-Policy')} <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* Card 3: Rapid Fulfillment */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => navigate('/solutions')}
            className="bg-swiss-grey p-6 md:p-8 border border-swiss-dark/5 cursor-pointer hover:bg-white flex flex-col justify-between group h-[350px] sm:h-[320px] transition-all"
          >
            <div>
              <Zap className="text-swiss-red mb-6" size={28} />
              <h3 className="text-xl font-bold mb-3 text-swiss-dark">{t('Rapid Fulfillment')}</h3>
              <p className="text-sm text-swiss-dark/60 leading-relaxed mb-6">
                {t('Order-to-shipping in 60 minutes. Meticulous picking flows that mimic Swiss watch movements.')}
              </p>
            </div>
            <button className="flex items-center gap-2 text-[10px] font-bold text-swiss-red uppercase tracking-widest group-hover:gap-4 transition-all self-start mt-auto">
              {t('Explore Tech')} <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* Card 4: Returns Management */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => navigate('/solutions')}
            className="bg-swiss-grey p-6 md:p-8 border border-swiss-dark/5 cursor-pointer hover:bg-white flex flex-col justify-between group h-[350px] sm:h-[320px] transition-all"
          >
            <div>
              <RefreshCcw className="text-swiss-red mb-6" size={28} />
              <h3 className="text-xl font-bold mb-3 text-swiss-dark">{t('Returns Management')}</h3>
              <p className="text-sm text-swiss-dark/60 leading-relaxed mb-6">
                {t('Automated verification and instant restocking for peak efficiency.')}
              </p>
            </div>
            <button className="flex items-center gap-2 text-[10px] font-bold text-swiss-red uppercase tracking-widest group-hover:gap-4 transition-all self-start mt-auto">
              {t('See Process')} <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* Card 5: Warehousing Storage */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => navigate('/solutions')}
            className="bg-swiss-grey p-6 md:p-8 border border-swiss-dark/5 cursor-pointer hover:bg-white flex flex-col justify-between group h-[350px] sm:h-[320px] transition-all"
          >
            <div>
              <Warehouse className="text-swiss-red mb-6" size={28} />
              <h3 className="text-xl font-bold mb-3 text-swiss-dark">{t('Swiss Warehousing')}</h3>
              <p className="text-sm text-swiss-dark/60 leading-relaxed mb-6">
                {t('Meticulous storage in our single, highly secure Swiss facility. Optimized storage space custom-tailored for early-stage brands.')}
              </p>
            </div>
            <button className="flex items-center gap-2 text-[10px] font-bold text-swiss-red uppercase tracking-widest group-hover:gap-4 transition-all self-start mt-auto">
              {t('View Storage')} <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* Card 6: Swiss Watch Image Card (Where mountain was) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative overflow-hidden group border border-swiss-dark/5 h-[350px] sm:h-[320px] rounded-sm"
          >
            <img 
              src={swissWatch} 
              alt="Swiss Watch Precision" 
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-700" />
            <div className="absolute bottom-4 right-4 z-10">
              <span className="text-swiss-red bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-sm text-[10px] tracking-wider font-bold shadow-lg">
                {t('Quality in perfect time.')}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
