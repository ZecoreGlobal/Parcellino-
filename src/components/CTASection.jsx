import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, MessageCircle } from 'lucide-react';
import Magnetic from './Magnetic';
import { useLanguage } from '../context/LanguageContext';

const CTASection = ({ 
  title, 
  subtitle,
  variant = "light"
}) => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDark = variant === "dark";
  
  const displayTitle = title || t("Ready to Scale Your Logistics?");
  const displaySubtitle = subtitle || t("Connect with our solutions architects for a tailored technical brief and Swiss scaling strategy.");

  return (
    <>
      <section id="cta-section" className={`py-24 md:py-32 text-center transition-colors duration-300 ${isDark ? 'bg-swiss-dark text-white' : 'bg-swiss-light-grey text-swiss-dark border-t border-swiss-dark/5'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-swiss-dark">{displayTitle}</h2>
            <p className="text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto text-swiss-dark/60">
              {displaySubtitle}
            </p>
            <div className="flex items-center justify-center">
              <Magnetic>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-swiss-red text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-swiss-dark hover:text-white transition-all flex items-center gap-3.5 group shadow-xl shadow-swiss-red/20 rounded-sm"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-white group-hover:scale-110 transition-transform">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.707 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t('Start Fulfillment')}
                </button>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-swiss-dark/60">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-swiss-dark rounded-xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-swiss-red to-swiss-red/50"></div>
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-swiss-dark/40 hover:text-swiss-red dark:text-white/40 dark:hover:text-swiss-red transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-swiss-dark dark:text-white mb-2">{t('Connect With Us')}</h3>
                <p className="text-swiss-dark/60 dark:text-white/60 text-sm">
                  {t('Choose your preferred method of communication.')}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:sr@parcellino-swiss.ch"
                  className="flex items-center gap-4 p-4 rounded-lg border border-swiss-dark/10 dark:border-white/10 hover:border-swiss-red dark:hover:border-swiss-red hover:bg-swiss-light-grey dark:hover:bg-white/5 transition-all group"
                >
                  <div className="bg-swiss-red/10 text-swiss-red p-3 rounded-full group-hover:bg-swiss-red group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-swiss-dark dark:text-white text-sm uppercase tracking-wider">{t('Email Us')}</h4>
                    <span className="text-swiss-dark/60 dark:text-white/60 text-xs">sr@parcellino-swiss.ch</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/4368120806840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-swiss-dark/10 dark:border-white/10 hover:border-[#25D366] dark:hover:border-[#25D366] hover:bg-swiss-light-grey dark:hover:bg-white/5 transition-all group"
                >
                  <div className="bg-[#25D366]/10 text-[#25D366] p-3 rounded-full group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-swiss-dark dark:text-white text-sm uppercase tracking-wider">{t('WhatsApp')}</h4>
                    <span className="text-swiss-dark/60 dark:text-white/60 text-xs">{t('Instant messaging support')}</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CTASection;
