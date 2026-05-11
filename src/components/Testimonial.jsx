import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import saminaImg from '../assets/samina.png';
import { useLanguage } from '../context/LanguageContext';

const Testimonial = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 md:py-32 bg-swiss-light-grey overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group max-w-sm mx-auto"
        >
          <div className="absolute -top-4 -left-4 w-full h-full border border-swiss-red/20 z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
          <div className="relative z-10 aspect-[4/5] overflow-hidden">
            <img src={saminaImg} alt="Samina Rehman" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <div className="text-center lg:text-left">
          <span className="text-swiss-red font-bold tracking-[0.2em] text-[10px] uppercase mb-8 block">
            {t('SWISS LEADERSHIP')}
          </span>
          
          {/* Mission Statement Quote */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-medium text-swiss-dark leading-[1.25] mb-8 italic transition-colors"
          >
            "{t('We deliver more than products.')}<br />
            {t('We provide trust, efficiency and growth.')}"
          </motion.h2>

          {/* Supportive Statement Paragraphs */}
          <div className="mb-10 text-swiss-dark/70 space-y-5">
            <p className="text-base md:text-lg leading-relaxed text-swiss-dark/80">
              {t('Our company was established by a ')}<strong>{t('woman entrepreneur')}</strong>{t(' who has seen and felt the pain in the fulfillment process, and we have a ')}<strong>{t('simple vision')}</strong>{t(' to make fulfillment ')}<em>{t('seamless, reliable and exceptional')}</em>.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-swiss-dark/60">
              <strong>{t('Smart logistics, proactive service and uncompromising attention to detail')}</strong>{t(', all for the purpose of ensuring that the quality of our service is reflected in every order you place.')}
            </p>
          </div>
          
          <div>
            <p className="text-xl font-bold text-swiss-dark transition-colors">Samina Rehman</p>
            <p className="text-sm text-swiss-dark/40 uppercase tracking-widest font-medium mb-6">{t('Founder & CEO')}</p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              {/* Email Button */}
              <a 
                href="mailto:sr@parcellino-swiss.ch" 
                className="flex items-center gap-3 px-6 py-3 bg-white border border-swiss-dark/5 text-swiss-dark hover:border-swiss-red hover:text-swiss-red transition-all group rounded-sm"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold tracking-widest lowercase">sr@parcellino-swiss.ch</span>
              </a>

              {/* Phone Button */}
              <a 
                href="tel:+41715757739" 
                className="flex items-center gap-3 px-6 py-3 bg-white border border-swiss-dark/5 text-swiss-dark hover:border-swiss-red hover:text-swiss-red transition-all group rounded-sm"
              >
                <Phone size={16} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest">+41-71-575 7739</span>
              </a>

              {/* WhatsApp Redirect Button */}
              <a 
                href="https://wa.me/4368120806840" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white border border-swiss-dark/5 text-swiss-dark hover:border-swiss-red hover:text-swiss-red transition-all group rounded-sm"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-green-500 group-hover:scale-110 transition-transform">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.707 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-xs font-bold uppercase tracking-widest">{t('WhatsApp')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
